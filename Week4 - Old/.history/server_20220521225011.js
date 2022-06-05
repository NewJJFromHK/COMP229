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
    ocnsole.log
    res.end(err.message); //output the error msg to the page
}
// no error
res.writeHead(200); //status - all ok
res.end(data); //output the file that was read to the page
    });
});

server.listen(port, function() //sth like server.addEventListener("req")
{
    console.log(`Server running at Port: ${port}`);
});