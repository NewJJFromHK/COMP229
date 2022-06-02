//require built-in modules
const http = require('http'); //Common JS Module pattern (CJS)
const fs = require('fs');
const mime = require('mime-types')

let lookup = mime.lookup; //alias for mime.lookup

const port = 3000;

//when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
const server = http.createServer(function(req, res) // sth like server = new Server();
{

    let path = req.url; // alias for req.url

    if(path =="/" || path =="/home")
    {
        pth = "/index.html";
    }

    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);

    //console.log(__dirname);

    fs.readFile(__dirname + path, function(err, data)
    {
if(err)
{
    res.writeHead(404); //status - file not found
    console.log(`ERROR: ${err.message}`); // output to the dev console
    return res.end("ERROR: 404 - File Not Found"); //output the error msg to the page
}
// no error
res.setHeader("X-Content-Type-Options", "nosniff"); //security guard
res.writeHead(200, {'Content-Type': mime_type}); //status - all ok
//console.log(`DATA: ${data}`);
return res.end(data); //output the file that was read to the page
    });
});

server.listen(port, function() //sth like server.addEventListener("req")
{
    console.log(`Server running at Port: ${port}`);
});