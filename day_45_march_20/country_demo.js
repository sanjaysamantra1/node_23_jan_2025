const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { createClient } = require('redis');
const app = express();
app.use(cors())

let redisClient;
async function connectToRedis() {
    redisClient = await createClient()
        .on('error', err => console.log('Redis Client Error', err))
        .connect();

}

app.get('/fetchData', async (req, res) => {
    let countryName = req?.query?.country || 'india';
    let url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${countryName}`

    const dataInRedis = await redisClient.get(countryName);

    if (dataInRedis) { // yes , data is present in redis
        let output = JSON.parse(dataInRedis);
        res.json({ source: 'Redis', output });
    } else { // no , data is not present in redis
        try {
            const response = await axios.get(url);
            let output = response.data;

            await redisClient.set(countryName, JSON.stringify(output), { EX: 60 * 5 });
            res.json({ source: 'API', output });
        } catch (err) {
            console.log(err);
        }
    }
});

app.listen(5000, async () => {
    await connectToRedis();
    console.log('Redis is connected')
    console.log(`app Running at 5000 port`)
});
