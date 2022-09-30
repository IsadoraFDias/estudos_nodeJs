const fs = require('fs')

fs.unlink('arquivo.txt', function (err) { //unlik deleta o arquivo
    if (err) {
        console.log(err)
        return
    }
    console.log('Arquivo Removido')
})