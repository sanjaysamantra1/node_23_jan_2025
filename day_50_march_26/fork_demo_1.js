const express = require('express');
const app = express();
const { fork } = require("child_process");

function longComputation() {
    let sum = 0;
    for (let i = 1; i < 1000000000; i++) {
        sum = sum + i;
    }
    return sum;
}
function longComputationPromise() {
    return new Promise((resolve) => {
        let sum = 0;
        for (let i = 1; i < 1000000000; i++) {
            sum = sum + i;
        }
        resolve(sum);
    })
}


app.get('/one', (req, res) => {
    console.log('Request received for /one route...');
    const sum = longComputation();
    res.send({ sum });
})
app.get('/two', async (req, res) => {
    console.log('Request received for /two route...');
    const sum = await longComputationPromise();
    res.send({ sum });
})
app.get('/three', async (req, res) => {
    console.log('Request received for /three route...');
    const subProcess = fork("./long_task.js");
    subProcess.send('calculate');
    subProcess.on('message', (sum) => {
        res.send({ sum });
    });
})

app.listen(5000, () => console.log('server running at 5000'));


