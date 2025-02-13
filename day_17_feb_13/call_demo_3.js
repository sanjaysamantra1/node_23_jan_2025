let obj1 = {
    a: 10,
    b: 20,
    add: function () {
        console.log(this.a + this.b);
    }
};
obj1.add(); // inside add() , this = obj1

let obj2 = { a: 100, b: 200 };
// obj2.add();  // obj2.add is not a function
// call add() present in obj1 , but inside add(), this should be obj2
obj1.add.call(obj2);

let obj3 = { a: 1000, b: 2000 };
// obj3.add();  // obj3.add is not a function
obj1.add.call(obj3);