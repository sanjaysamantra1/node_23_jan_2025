const express = require('express');
const app = express();
app.use(express.json()); // express.json() middleware 

app.get('/employees', (req, res) => {
    res.json(employees)
});
app.get('/employees/:empId', (req, res) => {
    let employee = employees.find(emp => emp.eId == req.params.empId);
    res.json(employee)
});
app.post('/employees', (req, res) => {
    let newEmployee = req.body;
    employees = [...employees, newEmployee];
    res.send('Employee Added Successfully!!!')
});
app.put('/employees', (req, res) => {

});
app.delete('/employees', (req, res) => {
    res.send('This is DELETE method')
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});
