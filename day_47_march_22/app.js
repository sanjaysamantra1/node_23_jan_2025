const path = require('path');
const express = require('express');
const { Server } = require('socket.io');
let app = express(); // app - request handler function
let expressServer = app.listen(5000, () => console.log('server running at 5000 port'));
// expressServer - actual http Server
const io = new Server(expressServer, {}); // io - socket.io server
app.use(express.static(path.join(__dirname, "public")));

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
