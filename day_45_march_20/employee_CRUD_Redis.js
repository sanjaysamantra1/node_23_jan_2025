const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeeModel = require('./employee_model');
const { createClient } = require('redis');

const app = express();
app.use(express.json()); // express.json() middleware 
app.use(cors()); // cors() middleware 

function connectToDB() {
    return mongoose.connect('mongodb://127.0.0.1:27017/march_2025')
}
let redisClient;
async function connectToRedis() {
    redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
    console.log('Redis is connected')
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
    const dataInRedis = await redisClient.get(id);
    if (dataInRedis) { // yes , data is present in redis
        let output = JSON.parse(dataInRedis);
        res.json({ source: 'Redis', output });
    } else { // no , data is not present in redis
        try {
            const employee = await employeeModel.findById(id);
            await redisClient.set(id, JSON.stringify(employee), { EX: 60 * 5 });
            res.json({ source: 'database', employee });
        } catch (err) {
            console.log(err);
        }
    }
});
app.post('/employees', async (req, res) => {
    const payload = req.body;
    try {
        const newEmp = new employeeModel(payload);
        await newEmp.save();
        res.send({ msg: 'Employee Added successfully' })
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
    await connectToRedis();
    console.log('Connection to Database Established')
    console.log(`app Running at 5000 port`)
});
