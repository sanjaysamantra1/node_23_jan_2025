const { EventEmitter } = require('events');

const eventObj = new EventEmitter();

eventObj.on('addnewcar', (car) => { // listener
    console.log(`A New Car ${car} has been added`);
});

eventObj.emit('addnewcar', 'Tata');
eventObj.emit('addnewcar', 'Honda');