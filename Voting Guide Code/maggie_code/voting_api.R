# Load necessary libraries
library(data.table)
library(plumber)

# Set paths
input_file <- "chicago_voting_guide.csv"
output_dir <- tempdir()  # Use a temporary directory to avoid permission issues
chunk_size <- 50000  # Adjust chunk size as needed

# Preprocessing: Split the large CSV file into smaller chunks
split_csv <- function() {
  # Read the entire CSV file
  voting_data <- fread(input_file)
  
  # Calculate the number of chunks
  num_chunks <- ceiling(nrow(voting_data) / chunk_size)
  
  # Split the data into smaller chunks
  for (i in 1:num_chunks) {
    # Determine the row indices for this chunk
    start_row <- ((i - 1) * chunk_size) + 1
    end_row <- min(i * chunk_size, nrow(voting_data))
    
    # Extract the chunk
    chunk <- voting_data[start_row:end_row, ]
    
    # Create output file name
    output_file <- paste0(output_dir, "/chunk_", i, ".csv")
    
    # Write the chunk to a new CSV file
    fwrite(chunk, file = output_file)
  }
  
  cat("Splitting of CSV file completed. Created", num_chunks, "chunks in", output_dir, "\n")
}

# Call the split_csv function to preprocess the data
split_csv()

#* @filter cors
cors <- function(req, res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  res$setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res$setHeader("Access-Control-Allow-Headers", "Content-Type")
  plumber::forward()
}


# Create API using plumber
#* @apiTitle Voting Guide API

# Suggestion endpoint
#* @param q The query string for address suggestions
#* @get /suggest
function(q = "") {
  if (q == "") {
    return(list())
  }
  
  # Load all chunk files
  chunk_files <- list.files(output_dir, pattern = "chunk_.*\\.csv", full.names = TRUE)
  suggestions <- c()
  
  for (file in chunk_files) {
    chunk_data <- fread(file)
    matches <- chunk_data[grepl(tolower(q), tolower(chunk_data$address_full)), address_full]
    suggestions <- c(suggestions, matches)
    
    # Limit to 10 suggestions
    if (length(suggestions) >= 10) {
      suggestions <- suggestions[1:10]
      break
    }
  }
  
  return(suggestions)
}

# Details endpoint
#* @param address The full address to get details for
#* @get /details
function(address = "") {
  if (address == "") {
    return(list())
  }
  
  # Load all chunk files
  chunk_files <- list.files(output_dir, pattern = "chunk_.*\\.csv", full.names = TRUE)
  
  for (file in chunk_files) {
    print(paste("Checking file:", file))  # Debugging line
    chunk_data <- fread(file)
    
    # Compare addresses in a case-insensitive manner
    record <- chunk_data[trimws(tolower(address_full)) == trimws(tolower(address)), ]
    
    if (nrow(record) > 0) {
      print(paste("Match found in file:", file))  # Debugging line
      return(as.list(record))
    }
  }
  
  print("No match found")  # Debugging line
  return(list())
}
