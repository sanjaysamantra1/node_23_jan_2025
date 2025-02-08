class Student {
    constructor(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
}
Student.prototype.clgName = 'naresh IT';
Student.prototype.clgAddress = 'Hyderabad';

let std1 = new Student(101, 'Adarsh', 'NodeJS');

console.log('roll' in std1);     // true
console.log('clgName' in std1);  // true

console.log(std1.hasOwnProperty('roll')); // true
console.log(std1.hasOwnProperty('clgName')); // false

console.log('dob' in std1); // false
console.log(std1.hasOwnProperty('dob')); // false