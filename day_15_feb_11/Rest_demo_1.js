// ES-6
function add(...arr) { // arr is rest parameter, variable amount of parameters
    // console.log(Array.isArray(arr)); // true
    let sum = 0;
    for (ele of arr) {
        sum += ele;
    }
    console.log(sum)
}
add(2, 3)
add(2, 3, 4)
add(2, 3, 4, 5)

