// ES-5
/* function Trainer(name, course, time, price) { // constructor function
    this.name = name;
    this.course = course;
    this.time = time;
    this.price = price;
}
let trainer1 = new Trainer('sanjay', 'nodejs', '7.00AM', 6000);
let trainer2 = new Trainer('satish gupta', 'python', '6.00pM', 8000);
console.log(trainer1)
console.log(trainer2) */

// ES-6
class Trainer {
    constructor(name, course, time, price) {
        this.name = name;
        this.course = course;
        this.time = time;
        this.price = price;
    }
}
let trainer1 = new Trainer('sanjay', 'nodejs', '7.00AM', 6000);
let trainer2 = new Trainer('satish gupta', 'python', '6.00pM', 8000);
console.log(trainer1)
console.log(trainer2)