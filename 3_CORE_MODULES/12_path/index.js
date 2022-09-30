const path = require('path')

const customPath = '/relatorios/isadora/relatorio1.pdf'

console.log(path.dirname(customPath)) //nome do diretorio
console.log(path.basename(customPath)) //nome do arquivo
console.log(path.extname(customPath)) //nnome da extenção