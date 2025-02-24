const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if (url == '/') {
        res.write('<h1>This is Home page')
    } else if (url == '/users') {
        res.write('<h1>This is Users page')
    } else if (url == '/comments') {
        res.write('<h1>This is Comments page')
    } else if (url == '/todos') {
        res.write('<h1>This is Todos page')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<div>Sorry, the page you are looking for is not available')
    }
    res.end();
});
server.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
});

// http://localhost:5000/users
// http://localhost:5000/comments
// http://localhost:5000/todos