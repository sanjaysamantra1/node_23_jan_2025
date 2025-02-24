const http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hellooooo, This is Response from server</h1>');
    res.end();
});
server.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
});
// setTimeout(server.close, 5000);