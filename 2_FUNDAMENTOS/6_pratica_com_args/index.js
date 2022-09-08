const minimist = require('minimist') 

//externo
const args = minimist(process.argv.slice(2)) //atribui em args o terceiro argumento(indice 2)

//interno
const soma = require('./soma').soma

soma(6, 6)