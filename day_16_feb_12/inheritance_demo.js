class Person {
    constructor(name, age, add) {
        this.name = name;
        this.age = age;
        this.add = add;
    }
}
class Student extends Person {
    constructor(name, age, add, roll, mark) {
        super(name, age, add); // invoking parent constructor
        this.roll = roll;
        this.mark = mark;
    }
}
let stdObj = new Student('akshay', 21, 'bangalore', 101, 92);
console.log(stdObj)

class Employee extends Person {
    constructor(name, age, add, eid, salary) {
        super(name, age, add); // invoking parent constructor
        this.eid = eid;
        this.salary = salary;
    }
}
let empObj = new Employee('Adars', 22, 'mumbai', 'e201', 5000);
console.log(empObj)