#!/bin/bash

# Create the destination directory if it doesn't exist
mkdir -p dist/styles

# Combine all CSS files into master.css
COMBINED_PATH="./master.css"
cat ./src/styles/**/*.css > $COMBINED_PATH

echo "All CSS files have been combined into $COMBINED_PATH"