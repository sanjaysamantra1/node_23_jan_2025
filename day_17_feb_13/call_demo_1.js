function add(a, b) {
    console.log(this)
    console.log(a + b + this.num); // this = global object , 2+3+undefined
}
add(2, 3);
// while calling add() dont use default value of 'this'
let obj = { num: 4 };
add.call(obj, 2, 3); // add() should called with this value set to obj