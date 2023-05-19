const { Socket } = require('dgram');
const http = require('http');

/// when ran the server will listen on our port we written down
const http = require('http');

//this line allows you to work with request or actual objects 
const server = http.createServer((req, res) =>{
    if (req.url === '/') {
        res.write('Hi');
        res.end();
    }

    if (req.url === 'api/courses') {
        res.write(JSON.stringify([7, 5, 9]));
        res.end();
    }
});

server.listen(3000);

console.log('Hello');