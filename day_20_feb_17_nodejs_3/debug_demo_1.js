console.log('Global Code Starts Here...')
function f3() {
    console.log('F3 Starts Here...')
    console.log('F3 Ends Here...')
}
function f2() {
    console.log('F2 Starts Here...')
    f3();
    console.log('F2 Ends Here...')
}
function f1() {
    console.log('F1 Starts Here...')
    f2();
    console.log('F1 Ends Here...')
}
f1();
console.log('Global Code Ends Here...')