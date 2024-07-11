#!/bin/bash
#!/bin/bash

# Autor: Arthur Vinicius Souza Lucena - 10/07/2024
# version 1.0

echo "Arthur.vsl"

echo "Iniciando..."

cd src/app

echo "Criandos pastas..."

foldersPattern=("components" "views" "styles" "assets" "utils" "api" "tests" "json" "linux" );

for foldersPattern in "${foldersPattern[@]}"
do
	mkdir $foldersPattern
done

echo "Deletando arquivos..."

reactDefaults=("layout.tsx" "globals.css" "page.module.css");

for reactDefaults in "${reactDefaults[@]}"
do
	rm $reactDefaults
done

cd styles
touch style.css

cd ../../

echo "Conluido!"
