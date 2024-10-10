# initialize_tasks.R

library(data.table)

#change working directory to repository root

#setwd("2024_election_guides")

# Print the current working directory
cat("Current working directory:", getwd(), "\n")

# Set paths
input_file_chicago <- "Voting Guide Code/maggie_code/chicago_voting_guide.csv"
output_dir_chicago <- file.path(tempdir(), "chunks_chicago")
#input_file_cook <- "Voting Guide Code/maggie_code/cook_voting_guide.csv"
#output_dir_cook <- file.path(tempdir(), "chunks_cook")
chunk_size <- 50000  # Number of rows per chunk

# Preprocessing: Split the large CSV file into smaller chunks
split_csv <- function(input_file, output_dir, chunk_size) {
  if (!dir.exists(output_dir)) {
    dir.create(output_dir, recursive = TRUE)
  }
  # Read the entire CSV file
  data <- fread(input_file)
  # Calculate the number of chunks
  num_chunks <- ceiling(nrow(data) / chunk_size)
  
  # Split the data into smaller chunks
  for (i in 1:num_chunks) {
    # Determine the row indices for this chunk
    start_row <- ((i - 1) * chunk_size) + 1
    end_row <- min(i * chunk_size, nrow(data))
    
    # Extract the chunk
    chunk <- data[start_row:end_row, ]
    
    # Create output file name
    output_file <- paste0(output_dir, "/chunk_", i, ".csv")
    
    # Write the chunk to a new CSV file
    fwrite(chunk, file = output_file)
    print(paste("Created chunk file:", output_file, "with", nrow(chunk), "rows"))
  }
  
  cat("Splitting of CSV file completed. Created", num_chunks, "chunks in", output_dir, "\n")
}

# Call the split_csv function to preprocess the data
split_csv(input_file_chicago, output_dir_chicago, chunk_size)
#split_csv(input_file_cook, output_dir_cook, chunk_size)

# Helper function to load all the chunks into memory
load_chunks <- function(output_dir) {
  chunk_files <- list.files(output_dir, full.names = TRUE)
  all_data <- rbindlist(lapply(chunk_files, function(file) {
    data <- fread(file)
    setnames(data, tolower(trimws(names(data))))
    return(data)
  }))
  return(all_data)
}
cat("Current working directory:", getwd(), "\n")

output1_path <- "2024_election_guides/Voting Guide Code/maggie_code/processed_data_chicago.rds"
#output2_path <- "2024_election_guides/Voting Guide Code/maggie_code/processed_data_cook.rds"

# Load the processed chunk data into memory
cat("Loading Chicago data chunks...\n")
voting_data_chicago <- load_chunks(output_dir_chicago)
#cat("Loading Cook data chunks...\n")
#voting_data_cook <- load_chunks(output_dir_cook)

cat("Current working directory:", getwd(), "\n")


# Define the output directory and file paths
output_dir <- "Voting Guide Code/maggie_code"
output1_path <- file.path(output_dir, "processed_data_chicago.rds")
#output2_path <- file.path(output_dir, "processed_data_cook.rds")

# Create the directory if it doesn't exist
if (!dir.exists(output_dir)) {
  dir.create(output_dir, recursive = TRUE)
  cat("Created directory:", output_dir, "\n")
} else {
  cat("Directory already exists:", output_dir, "\n")
}

# Load the processed chunk data into memory
cat("Loading Chicago data chunks...\n")
voting_data_chicago <- load_chunks(output_dir_chicago)
#cat("Loading Cook data chunks...\n")
#voting_data_cook <- load_chunks(output_dir_cook)

# Save the datasets to RDS files using the specified paths
saveRDS(voting_data_chicago, file = output1_path)
#saveRDS(voting_data_cook, file = output2_path)

# Verify that the files were created
if (file.exists(output1_path)) {
  cat("Successfully created", output1_path, "\n")
} else {
  cat("Failed to create", output1_path, "\n")
}

#if (file.exists(output2_path)) {
#  cat("Successfully created", output2_path, "\n")
#} else {
#  cat("Failed to create", output2_path, "\n")
#}

cat("Initialization completed.\n")
