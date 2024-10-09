# voting_api.R

library(data.table)
library(plumber)

# Wait for the processed data files to become available
while (!file.exists("processed_data_chicago.rds") || !file.exists("processed_data_cook.rds")) {
  cat("Waiting for preprocessed data files to be available...\n")
  Sys.sleep(5)  # Wait for 5 seconds before checking again
}

cat("Current working directory:", getwd(), "\n")

# Load preprocessed data from RDS files
voting_data_chicago <- readRDS("processed_data_chicago.rds")
voting_data_cook <- readRDS("processed_data_cook.rds")

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

  # Match addresses
  matches_chicago <- voting_data_chicago[grepl(tolower(q), tolower(voting_data_chicago$address_full)), address_full]
  matches_cook <- voting_data_cook[grepl(tolower(q), tolower(voting_data_cook$address_full)), address_full]
  suggestions <- unique(c(matches_chicago, matches_cook))[1:5]
  
  return(suggestions)
}

# Details endpoint
#* @param address The full address to get details for
#* @get /details
function(address = "") {
  if (address == "") {
    return(list())
  }
  
  # Look up address in both datasets
  record_chicago <- voting_data_chicago[address_full == address, ]
  record_cook <- voting_data_cook[address_full == address, ]
  
  # Combine results
  combined_record <- list()
  
  if (nrow(record_chicago) > 0) {
    combined_record <- c(as.list(record_chicago), combined_record)
  }
  if (nrow(record_cook) > 0) {
    combined_record <- c(as.list(record_cook), combined_record)
  }

  return(combined_record)
}
