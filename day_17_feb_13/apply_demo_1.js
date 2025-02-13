function add(a, b) {
    console.log(a + b + this.num); // this = global object , 2+3+undefined
}
add(2, 3); // NaN

obj = { num: 4 };
add.call(obj, 2, 3);

let arr = [2,3];
add.call(obj, arr);  // inside add() , this = obj , a = [2,3] , b = undefined
add.apply(obj, arr);  // inside add() , this = obj , a = 2 , b = 3