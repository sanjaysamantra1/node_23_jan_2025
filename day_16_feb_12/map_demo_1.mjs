let myMap = new Map(); // {}
console.log(myMap);

myMap.set('name', 'Adarsh'); // add data into a map
myMap.set('age', 23);
myMap.set('address', 'Mumbai');
myMap.set('course', 'NodeJs');
console.log(myMap)

console.log(myMap.get('age')); // read data from map
console.log(myMap.size); // 4
myMap.delete('course')
console.log(myMap.size); // 3
myMap.clear();
console.log(myMap.size); // 0