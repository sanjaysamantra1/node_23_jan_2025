const path = require('path');
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
let app = express();
app.use(express.static(path.join(__dirname, "public")));

const httpServer = createServer(app);
const io = new Server(httpServer, {}); // io - socket.io server

io.on("connection", (socket) => {
    console.log('A new client Joined');
    socket.on('setName', (name) => {
        socket.userName = name;
    })
    socket.on('chat', (data) => {
        let userName = socket.userName;
        let currentTime = new Date().toLocaleTimeString();
        let msgObj = { message: data.message, userName, time: currentTime };
        io.emit('chat', msgObj);
    })
});

httpServer.listen(5000, () => console.log('server running at 5000 port'));