const http = require('http');

const employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

const server = http.createServer((req, res) => {
    const { url, method } = req; // object de-structuring

    if (url == '/') {
        res.write('<h1>This is Home page')
    } else if (url == '/employees') { // GET request 
        res.write(JSON.stringify(employees));
    } else if (url == '/employees' && method == 'POST') { // GET request 
        res.write('<h1>This is post method');
    }else if (url == '/employees' && method == 'PUT') { // GET request 
        res.write('<h1>This is PUT method');
    }
    res.end();
});
server.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
});
