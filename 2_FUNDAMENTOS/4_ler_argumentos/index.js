//nome

console.log(process.argv) //mostra o executavel do Node

const args = process.argv.slice(2) //pega o terceiro indice(começa do 0)

console.log(args)//imprime a const args, que guardou o terceiro indice

const name = args[0].split('=')[1]//coloca na const nome o argumento indice 0, divide em dois com o = e pega o segundo indice

console.log(name)

const idade = args[1].split('=')[1]

console.log(idade)

console.log(`O nome dela é ${name} e ela tem ${idade} anos de idade`)