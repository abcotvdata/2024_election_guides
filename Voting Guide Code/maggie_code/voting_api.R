# voting_api.R (simplified version)

library(plumber)

# Define the path for loading the test RDS file
test_data_path <- "Voting Guide Code/maggie_code/test_data.rds"

# Log the current working directory
cat("Current working directory:", getwd(), "\n")
cat("Looking for test data file at:", test_data_path, "\n")

max_wait_time <- 60  # Maximum wait time in seconds
wait_interval <- 5   # Interval to check for file existence


# Wait for the test data file to be available
elapsed_time <- 0
while (!file.exists(test_data_path) && elapsed_time < max_wait_time) {
  cat("Waiting for the test data file to be available...\n")
  Sys.sleep(wait_interval)  # Wait for the specified interval before checking again
  elapsed_time <- elapsed_time + wait_interval
}

# Check if the file was found within the time limit
if (!file.exists(test_data_path)) {
  stop("Test data file was not found within the time limit. Exiting.")
}

# Load the test data from the RDS file
test_data <- readRDS(test_data_path)
cat("Loaded test data:\n")
print(test_data)

# Create a simple Plumber API
#* @apiTitle Test API

# Test endpoint to check if the API is working
#* @get /test
function() {
  list(
    message = "API is working!",
    data = test_data
  )
}

# Start the Plumber API
r <- plumb()
r$run(host = "0.0.0.0", port = as.numeric(Sys.getenv("PORT", "8080")))
