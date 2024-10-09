# Load necessary libraries
library(plumber)

# Source the API definition file
#source("voting_api.R")  # Adjust the path to where 'voting_api.R' is located

# Serve the API
port <- as.numeric(Sys.getenv("PORT", "8000"))
api <- plumb("Voting Guide Code/maggie_code/voting_api.R")  # Adjust the path as needed
api$run(host = "0.0.0.0", port = 8000)
