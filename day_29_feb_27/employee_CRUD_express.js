const express = require('express');
const app = express();
app.use(express.json()); // express.json() middleware 

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

const myLogger = (req, res, next) => {
    console.log(`URL:${req.url} , method:${req.method} , Time:${new Date().toLocaleTimeString()}`)
    next();
}
app.use(myLogger)

const authenticate = (req, res, next) => {
    console.log('authenticate middleware')
    const token = req.headers['authorization'];
    if (!token || token !== 'mysecrettoken') {
        res.status(401).json({ message: 'Unauthorized' });
    } else {
        next(); // User is authenticated, proceed to next middleware or route handler
    }
};
app.use(authenticate)

app.get('/employees', (req, res) => {
    console.log('This is /employees route')
    res.json(employees)
});
app.get('/employees/:empId([0-9]{1,3})', (req, res,next) => {
    const { url, method, params, body } = req;
    console.log(url, method, params, body)
    const empId = req.params.empId
    try {
        if (empId <= 200) {
            let employee = employees.find(emp => emp.eId == empId);
            res.json(employee)
        }else{
            throw new Error('EmpId should be less than 10')
        }
    } catch (err) {
        next(err); // transfers error object to error handling middleware
    }
});
app.post('/employees', (req, res) => {
    let newEmployee = req.body;
    employees = [...employees, newEmployee];
    // res.status(201).send('Employee Added Successfully!!!');
    res.sendStatus(201);
});
app.put('/employees', (req, res) => {
    console.log('This is PUT method')
});
app.delete('/employees', (req, res) => {
    res.send('This is DELETE method')
});

let myErrorHandler = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong, Try again!';
    res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
        success: false,
    });
};
app.use(myErrorHandler);

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});
