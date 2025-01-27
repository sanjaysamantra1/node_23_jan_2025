var a = 10; // Global
function f1() {
    var b = 20; // function scope
    console.log('a ', a); // yes
    console.log('b ', b); // yes
    // console.log('c ', c); // No
    console.log('d ', d); 
}
function f2() {
    var c = 30; // function scope
    d = 40;
    console.log('a ', a); // yes
    // console.log('b ', b); // no
    console.log('c ', c); // yes
}
f2();
f1();
console.log('Global Code')
console.log('a ', a); // yes
// console.log('b ', b); // no
// console.log('c ', c); // no

// Note : The variables declared without var/let/const are global variables, no matter where they are declared