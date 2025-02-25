const http = require('http');

const employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

const server = http.createServer((req, res) => {
    let { url, method } = req;
    const empId = url.split('/').pop();

    if (url == '/employees' && method == 'GET') { // all employees
        res.write(JSON.stringify(employees))
    } else if (url.includes('/employees') && method == 'GET' && empId){
        let employee = employees.find(emp=>emp.eId==empId);
        res.write(JSON.stringify(employee))
    }else if (url.includes('/employees') && method == 'POST' ){
        res.write('This is POST method')
    }else if (url.includes('/employees') && method == 'PUT' && empId){
        res.write('This is PUT method')
    }else if (url.includes('/employees') && method == 'DELETE' && empId){
        res.write('This is DELETE method')
    }
    res.end();

});
server.listen(5000, () => {
    console.log(`Server Running at 5000 port`)
});
