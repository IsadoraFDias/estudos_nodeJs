const fs = require('fs')

fs.stat('pasta', (err, stats) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(stats.isFile()) //é um arquivo
    console.log(stats.isDirectory())//é um diretorio
    console.log(stats.isSymbolicLink())//é um link simbolico
    console.log(stats.ctime)//hora da criação
    console.log(stats.size)//tamanho em bytes
})