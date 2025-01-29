let arr = [10, 20, 30, 40, 50];

let res1 = arr.map(function (ele) {
    return ele + 5;
}); // map() is HigherOrder Function, it takes a callback function
console.log(res1);

let res2 = arr.map((ele)=>ele+5);
console.log(res2);