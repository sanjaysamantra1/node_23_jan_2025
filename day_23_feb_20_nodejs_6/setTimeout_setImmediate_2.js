const fs = require('fs');

fs.readFile(__filename, (err, data) => {
    setTimeout(() => {
        console.log('setTimeout with 0 wait');
    }, 0);

    setImmediate(() => {
        console.log('setImmediate');
    });
})
// when setImmediate() and setTimeout(0) is used inside I/o, setImmediate calls first

