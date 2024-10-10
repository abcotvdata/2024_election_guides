# voting_api.R (simplified version)

library(plumber)

# Define the path for loading the test RDS file
test_data_path <- "Voting Guide Code/maggie_code/test_data.rds"

# Wait for the test data file to be available
while (!file.exists(test_data_path)) {
  cat("Waiting for the test data file to be available...\n")
  Sys.sleep(5)  # Wait for 5 seconds before checking again
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
