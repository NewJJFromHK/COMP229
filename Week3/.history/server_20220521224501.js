//require built-in modules
const http = require('http'); //Common JS Module pattern (CJS)
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res) // sth like server = new Server();
{
    //console.log(__dirname);

    fs.readFile(__dirname + req.url, function(err, data)
    {
if(err)
{
    res.writeHead(404); //status - file not found
    res.end(err.message); //output the error msg to the page
}
res.writeHead(200); 
    });
});

server.listen(port, function() //sth like server.addEventListener("req")
{
    console.log(`Server running at Port: ${port}`);
});