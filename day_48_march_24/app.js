const { Socket } = require('dgram');
const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

// static files
app.use(express.static('public'));

const activeUsers = new Set();

io.on('connection', (socket) => {
    console.log('A new client connected');

    

    socket.on('new user', (userId) => {
        socket.userId = userId;
        activeUsers.add(userId);
        io.emit('new user', [...activeUsers]);

        if(userId == 'adarsh' || userId=='ajay'){
            socket.join("adarsh_ajay_room");
        }
    });
    // socket.on('disconnect', () => {
    //     activeUsers.delete(socket.userId);
    //     io.emit('user disconnected', socket.userId);
    // });
    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });
    socket.on('typing', (data) => {
        // io.emit('typing',data);
        socket.broadcast.emit('typing', data);
    });
    socket.on("private message", (data) => {
        io.to("adarsh_ajay_room").emit("private message", data);
    });

});
httpServer.listen(5000, () => console.log('server running at 5000'))


