function displayInfo(user) {
    console.log(`${user.name} is from ${user.address} , He is ${user.age} years old`);
}
let user = { name: 'sachin', age: 50, address: 'Mumbai' }
displayInfo(user);

function displayInfo2({ name, address, age }) {
    console.log(`${name} is from ${address} , He is ${age} years old`);
}
let user2 = { name: 'sachin', age: 50, address: 'Mumbai' }
displayInfo2(user2)