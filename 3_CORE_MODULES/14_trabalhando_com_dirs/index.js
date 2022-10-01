const fs = require("fs")

if(!fs.existsSync('./minhaPasta')){ //se o diretorio minhaPasta nao existir
    console.log('Não existte')
    fs.mkdirSync('minhaPasta') // se nao existe cria de forma sincrona
} else if (fs.existsSync('./minhaPasta')) { // se o diretorio existir
    console.log('Existe!')
}