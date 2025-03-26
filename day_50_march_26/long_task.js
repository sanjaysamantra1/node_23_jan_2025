function longComputation() {
    let sum = 0;
    for (let i = 1; i < 1000000000; i++) {
        sum = sum + i;
    }
    return sum;
}
process.on('message', (message) => {
    if(message == 'calculate'){
        const sum = longComputation();
        process.send(sum);
    }
})
