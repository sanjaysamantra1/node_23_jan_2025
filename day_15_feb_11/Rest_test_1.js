function test(a, b, ...c) {
    console.log(a, b, c);
} //Rest parameter must be last formal parameter
test(2,3);          //  2  3  [] 
test(2,3,4);        //  2  3  [4]
test(2,3,4,5,6);    //  2  3  [4,5,6]

