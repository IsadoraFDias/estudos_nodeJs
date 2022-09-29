const http = require("http")
const fs = require("fs")



const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) { // se nao houver um nome
        fs.readFile('mensagem.html', function (err, data) { //le o arquivo mensagem
            res.writeHead(200, { 'Content-Type': 'text/html' }); // carrega com status 200
            res.write(data);// escreve os dados dele
            return res.end();// finaliza
          });
    } else{ // se nao (houver nome)
         fs.writeFile('arquivo.txt', name, function(err, data){ //escrever um arquivo
            res.writeHead(302, { // retornar codigo 302
                Location: '/' //renderizar novamente a home
            })
            return res.end() // finaliza
         })
    }

  
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
