const args = process.argv.slice(2);
console.log(args); // ['name=sanjay','add=bangalore']

let obj = {};
for (ele of args) {
    let [k, v] = ele.split('=');
    obj[k] = v;
}
console.log(obj)