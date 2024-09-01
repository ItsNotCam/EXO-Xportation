find ./ -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.css" \) -not -path "*/node_modules/*" -exec sed -i 's/\t/  /g' {} +
