const args = process.argv.slice(2);
console.log(args); // args is an array = [node,filepath,arg1,arg2]
let [a, b] = args;
function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${+a + +b}`)
}
function sub(a, b) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`)
}
add(a,b)
sub(a,b)
