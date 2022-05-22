const http = require('http'); //Common JS Module pattern (CJS)
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res)
{
    console.log(__dirname);
})