const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1); //pega a segunda parte do nome

  if (filename.includes('html')) { //se a segunda parte for html
   if(fs.existsSync(filename)){ // se o arquivo existir
    fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html'}) //escrever se o retorno for 200
        res.write(data)
        return res.end()
    })

   } else{
    fs.readFile('404.html', function(err, data){ // se o arquivo nao existir
        res.writeHead(404, { 'Contet-Type': 'text/html'}) // escrver se o retorno for 404
        res.write(data)
        return res.end()
    })
   }
  } 
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
