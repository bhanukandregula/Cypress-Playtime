# This command will create tscinfig.json file in the porjrct structure.
# THIS WILL ENDURE THAT TYPES FOR CYPRESS ARE ACCESSIBLE BY TYPESCRIPT
# THESE TYOES DEPEMD ON DOM AND ES6, SO WE PASS THEM AS LOB OPTION TO TYPESCRIPT
npx tsc --init --types cypress --lib dom,es6

