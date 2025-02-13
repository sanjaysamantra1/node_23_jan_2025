function add(a, b) {
    // console.log(this)
    console.log(a + b + this.num); // this = global object , 2+3+undefined
}
add(2, 3); // NaN

let obj1 = { num: 4 }

// call add() by using this = obj1
add.call(obj1, 2, 3); // 9
// call add() by using this = obj1
add.call(obj1, 4, 5); // 13
// call add() by using this = obj1
add.call(obj1, 5, 6); // 15

console.log('===================================')

let addition = add.bind(obj1); // inside addition() , this = obj1
addition(2, 3);
addition(4, 5);
addition(5, 6);  
