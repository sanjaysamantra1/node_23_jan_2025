const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

const cars = [];

eventEmitter.on('addFirst', (carName) => {
    cars.unshift(carName);
    console.log('After Add First ', cars)
})
eventEmitter.on('addLast', (carName) => {
    cars.push(carName);
    console.log('After Add Last ', cars)
})
eventEmitter.on('removeFirst', () => {
    cars.shift();
    console.log('After remove First ', cars)
})
eventEmitter.on('removeLast', () => {
    cars.pop();
    console.log('After remove Lrst ', cars)
})

eventEmitter.emit('addFirst','Tata');
eventEmitter.emit('addLast','Honda');
eventEmitter.emit('addFirst','Maruti');
eventEmitter.emit('removeFirst');
eventEmitter.emit('removeLast');


