const fs = require('fs') //file system, é um core module, ja existe no Node

fs.readFile('arquivo.txt', 'utf8', (err, data) => { //esta chamando o arquivo, e dizendo para ler caracteres utf8, e tem parametros de erro e de dados
    if (err) { // se der erro, imprimir erro
        console.log(err)
    }
    console.log(data) //se nao, imprimir o conteudo do arquivo
})