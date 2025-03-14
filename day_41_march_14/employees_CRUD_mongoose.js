const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeModel = require('./employee_schema');

const app = express();
app.use(express.json()); // express.json() middleware 
app.use(cors()); // cors() middleware 
app.use(express.urlencoded({ extended: true })); // to use form data


function connectToDB() {
    return mongoose.connect('mongodb://127.0.0.1:27017/march_2025')
}

app.get('/employees', async (req, res) => {
    try {
        const allEmployees = await employeeModel.find({});
        res.json(allEmployees);
    } catch (err) {
        console.log(err);
    }
});
app.get('/employees/:empId', async (req, res) => {
    const id = req.params.empId;
    try {
        const employee = await employeeModel.findById(id);
        res.json(employee);
    } catch (err) {
        console.log(err);
    }
});
app.post('/employees', async (req, res) => {
    const payload = req.body;
    try {
        const newEmp = new employeeModel(payload);
        await newEmp.save();
        res.send({msg:'Employee Added successfully'})
    } catch (err) {
        console.log(err);
    }
});
app.patch('/employees/:id', async (req, res) => {
    const payload = req.body;
    try {
        await myCollection.updateOne({ eId: +req.params.id }, { $set: payload });
        res.send(payload);
    } catch (err) {
        console.log(err);
    }
});
app.delete('/employees/:id', async (req, res) => {
    try {
        let deleteResponse = await myCollection.deleteOne({ eId: +req.params.id });
        res.send(deleteResponse);
    } catch (err) {
        console.log(err);
    }
});

app.listen(5000, async () => {
    await connectToDB();
    console.log('Connection to Database Established')
    console.log(`app Running at 5000 port`)
});
