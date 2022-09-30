const fs = require('fs')

const arqAntigo = 'arquivoAntigo.txt'
const arqNovo = 'arquivoNovo.txt'

fs.rename(arqAntigo, arqNovo, function (err) { //rename é a função de renomear, dois parametros o nome antigo e o novo e a função call back
    if (err) {
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})