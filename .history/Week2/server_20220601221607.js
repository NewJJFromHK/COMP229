//require built-in modules
const http = require('http'); //Common JS Module pattern (CJS)
const fs = require('fs');
const mime = require('mime-types')

let look

const port = 3000;

//when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
const server = http.createServer(function(req, res) // sth like server = new Server();
{
    //console.log(__dirname);

    fs.readFile(__dirname + req.url, function(err, data)
    {
if(err)
{
    res.writeHead(404); //status - file not found
    console.log(`ERROR: ${err.message}`); // output to the dev console
    return res.end(err.message); //output the error msg to the page
}
// no error
res.writeHead(200); //status - all ok
console.log(`DATA: ${data}`);
return res.end(data); //output the file that was read to the page
    });
});

server.listen(port, function() //sth like server.addEventListener("req")
{
    console.log(`Server running at Port: ${port}`);
});