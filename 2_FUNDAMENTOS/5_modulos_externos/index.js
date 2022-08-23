const minimist = require('minimist')

const args = minimist(process.argv.slice(2)) //atribui em args o terceiro argumento(indice 2)

console.log(args)

const nome = args['nome'] // atribuiu a args o nome 
const profissao = args['profissao']

console.log(nome, profissao)

console.log(`O nome dela é ${nome} e sua profissao é ${profissao}`)