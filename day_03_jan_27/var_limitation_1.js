function varTest() {
    if (true) {
        var name = 'sachin';
        console.log('Block: ', name);
    }
    console.log('Function: ', name);
}
varTest();
// even if 'name' is declared inside if block, it;s scope is function

function letTest() {
    if (true) {
        let add = 'Mumbai';
        console.log('Block: ', add);
    }
    console.log('Function: ', add);
}
letTest();