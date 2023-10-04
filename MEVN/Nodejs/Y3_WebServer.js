const http = require('http');
const fs= require('fs');
const read=fs.readFileSync('./Y3/Y3_index.html', 'utf-8')
const server =http.createServer((request,response) =>{
    response.end(read);
    console.log("A new request received");
});

server.listen(8000, '127.0.0.1', () =>{
    console.log("server has started");
})