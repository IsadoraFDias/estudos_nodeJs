const fs = require('fs')

console.log('Inicio')

fs.writeFileSync('arquivoSincrono.txt', 'oi, eu sou sincrono') //cria o arquivo para depois continuar rodando o programa

console.log('Fim')