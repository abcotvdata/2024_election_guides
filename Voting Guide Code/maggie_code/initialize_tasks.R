# initialize_tasks.R (simplified version)

# Create a minimal test dataset
test_data <- data.frame(
  id = 1:5,
  name = c("Alice", "Bob", "Charlie", "David", "Eve")
)

# Define a simplified output file path
output_file <- "Voting Guide Code/maggie_code/test_data.rds"

# Create the directory if it doesn't exist
output_dir <- "Voting Guide Code/maggie_code"
if (!dir.exists(output_dir)) {
  dir.create(output_dir, recursive = TRUE)
  cat("Created directory:", output_dir, "\n")
} else {
  cat("Directory already exists:", output_dir, "\n")
}

# Save the test data to an RDS file
saveRDS(test_data, file = output_file)

# Verify that the file was created
if (file.exists(output_file)) {
  cat("Successfully created", output_file, "\n")
} else {
  cat("Failed to create", output_file, "\n")
}

cat("Simplified initialization completed.\n")
