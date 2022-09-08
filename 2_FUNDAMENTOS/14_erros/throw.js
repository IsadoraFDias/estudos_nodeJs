const chalk = require("chalk")

var x = 10 

//checar se o numero x é um numero inteiro

if (!Number.isInteger(x)) {
    throw new Error('O valor de x nao é um numero inteiro!')
}

console.log('Continuando o codigo...')

console.log(chalk.green.bold('Agora irá gerar erro'))

var x = '10' //se colocar apenas o numero 10 o codigo passa

//checar se o numero x é um numero inteiro

if (!Number.isInteger(x)) {
    throw new Error('O valor de x nao é um numero inteiro!')
}

console.log('Continuando o codigo...')