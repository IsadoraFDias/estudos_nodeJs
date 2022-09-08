const http = require('http')

const port = 3001

const server = http.createServer((req, res) => { //envia uma req(requisição) e obtem uma res(resposta)
    res.write('Oi HTTP')
    res.end() //encerra a resposta
})

server.listen(port, () => { //para rodar é necessario listen (ouvir a porta)
    console.log(`Servidor rodando na porta ${port}`)
})