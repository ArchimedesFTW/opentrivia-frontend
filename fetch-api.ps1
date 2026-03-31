# Install codegen in order to generate defintions.
npm install --save-dev openapi-typescript-codegen

# Fetch api definitions
Invoke-WebRequest -Uri http://127.0.0.1:8080/v3/api-docs -OutFile openapi.json

# Generate typescript api definitions
npx openapi-typescript-codegen --input ./openapi.json --output src/api --client axios

# Remove json (might become outdated)
Remove-Item openapi.json

Write-Host "API updated."