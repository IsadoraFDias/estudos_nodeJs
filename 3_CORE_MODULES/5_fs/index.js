const http = require("http")
const fs = require("fs")


const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('mensagem.html', function (err, data) { // le o arquivo 
    res.writeHead(200, { 'Content-Type': 'text/html' }); // carrega com status 200
    res.write(data);// escreve os dados
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
