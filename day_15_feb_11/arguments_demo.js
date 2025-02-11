// ES-5
function add() {
    console.log(Array.isArray(arguments));
    let sum = 0;
    for (ele of arguments) { // arguments is a keyword, it is an array like structure
        sum += ele;
    }
    console.log(sum)
}
add(2, 3)
add(2, 3, 4)
add(2, 3, 4, 5)

