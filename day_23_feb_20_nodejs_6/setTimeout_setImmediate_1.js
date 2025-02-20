// when setImmediate() and setTimeout(0) is used outside I/o the order is non-deterministic

setTimeout(() => {
    console.log('setTimeout with 0 wait');
}, 0);

setImmediate(() => {
    console.log('setImmediate');
});