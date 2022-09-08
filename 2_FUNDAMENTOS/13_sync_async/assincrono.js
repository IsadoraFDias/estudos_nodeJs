const fs = require('fs')

console.log('Inicio')

fs.writeFile('arquivoAssincrono.txt', 'oi eu sou assincrono', function (err) { //cria o arquivo enquanto roda o programa
    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 1000)
})

console.log('Fim')