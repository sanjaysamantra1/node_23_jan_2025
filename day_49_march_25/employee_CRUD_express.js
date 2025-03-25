const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); // express.json() middleware 
app.use(cors()); // express.json() middleware 

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// route for swagger document
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

app.get('/api/employees', (req, res) => {
    res.json(employees)
});
app.get('/api/employees/:empId', (req, res) => {
    const { url, method, params, body } = req;
    console.log(url, method, params, body )
    let employee = employees.find(emp => emp.eId == req.params.empId);
    res.json(employee)
});
app.post('/api/employees', (req, res) => {
    let newEmployee = req.body;
    employees = [...employees, newEmployee];
    // res.status(201).send('Employee Added Successfully!!!');
    res.sendStatus(201);
});
app.put('/api/employees', (req, res) => {

});
app.delete('/api/employees', (req, res) => {
    res.send('This is DELETE method')
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});
