let user = {
    'name': 'sachin',
    'last name': 'tendulkar',
    'age': 35,
    'add': 'mumbai',
};
console.log(user.name);
console.log(user['name']);

// use[] when key contains space
// console.log(user.last name); 
console.log(user['last name']);

// when key is dynamic
let a = 'name';
console.log(user.a); // looks for a property inside user object 
console.log(user[a]); // looks for name property inside user object
console.log('-------------------------------------------------------------')

// while iterating all the keys and values
for (key in user) {
    console.log(key + " ==== " + user[key])
}
