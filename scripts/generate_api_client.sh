cd backend/cgi-bin/ && FLASK_APP=api.py flask spec -f json -o openapi.json 
cd ../../ && docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i local/backend/cgi-bin/openapi.json -g typescript-axios -o local/src/generated