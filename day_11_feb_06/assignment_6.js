const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];

let result = [];
let word = '';
for (char of inputArr) {
    word += char;
    if (char == '') {
        result.push(word);
        word = '';
    }
}
result.push(word); // for the last word

console.log(result)