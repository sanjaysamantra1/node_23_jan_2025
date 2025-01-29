let a = 10;
let b = 20;
console.log(`Addition of ${a} and ${b} is ${a+b}`);
console.error(`Addition of ${a} and ${b} is ${a+b}`);
console.warn(`Addition of ${a} and ${b} is ${a+b}`);

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
	{ "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];
console.log(employees);
console.table(employees);

console.time('forLoop')
for(let i=1;i<=1000;i++){
    console.log('Good Morning')
}
console.timeEnd('forLoop')