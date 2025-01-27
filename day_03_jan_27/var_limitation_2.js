for (var i = 1; i <= 3; i++) {
    console.log('i value inside loop', i)
}
console.log('i value outside loop', i); // i is accessible outside the loop also

for (let j = 1; j <= 3; j++) {
    console.log('j value inside loop', j)
}
// console.log('j value outside loop', j); // j is not defined