const http = require('http'); //Common JS Module pattern (CJS)
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res) // sth like 
{
    console.log(__dirname);

    //fs.readFile(__dirname + req.url)
});

server.listen(port, function()) //sth like server.addEventListener("req")