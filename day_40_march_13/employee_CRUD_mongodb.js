const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json()); // express.json() middleware 
app.use(cors()); // cors() middleware 
app.use(express.urlencoded({ extended: true })); // to use form data

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'march_2025';
let myCollection;

async function connectToDB() {
    await client.connect();
    console.log('Connected successfully to Database server');
    const myDatabase = client.db(dbName);
    myCollection = myDatabase.collection('employees');
    return 'done.';
}

app.get('/employees', async (req, res) => {
    try {
        const allEmployees = await myCollection.find({}).toArray();
        res.json(allEmployees);
    } catch (err) {
        console.log(err);
    }
});
app.get('/employees/:empId', async (req, res) => {
    try {
        const employee = await myCollection.find({ eId: +req.params.empId }).toArray();
        res.send(employee[0]);
    } catch (err) {
        console.log(err);
    }
});
app.post('/employees', async (req, res) => {
    const payload = req.body;
    try {
        await myCollection.insertOne(payload);
        res.send(payload);
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
app.delete('/employees/:id', async(req, res) => {
    try {
        let deleteResponse = await myCollection.deleteOne({ eId: +req.params.id });
        res.send(deleteResponse);
    } catch (err) {
        console.log(err);
    }
});

app.listen(5000, async () => {
    await connectToDB();
    console.log(`app Running at 5000 port`)
});
