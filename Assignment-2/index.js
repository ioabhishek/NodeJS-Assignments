const fs = require('fs');
const http = require('http');
const name = 'Abhishek';

// create a server object 
http.createServer(function (req, res) {
  fs.writeFile('index.html', '', () => {})
  fs.appendFile('index.html', `<h1> Hello World </h1> <p> This is ${name} </p>`, () => {})

  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //tpo display HTML we need to use write head func
    res.write(data); //write a response to the client
    return res.end(); //return the end response
  });
}).listen(5000); //the server object listens on port 5000