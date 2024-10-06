# Load necessary libraries
library(plumber)

# Source the API definition file
source("voting_api.R")  # Adjust the path to where 'voting_api.R' is located

# Serve the API
api <- plumb("voting_api.R")  # Adjust the path as needed
api$run(host = "0.0.0.0", port = 8000)
