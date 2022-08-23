const meuModulo = require('./meu_modulo') //importa o modulo criado
const soma = meuModulo.soma // cria a constante e coloca o modulo nela e a função desejada, no caso a função soma

soma(2, 3) //parametros da função importada
soma(5, 10)