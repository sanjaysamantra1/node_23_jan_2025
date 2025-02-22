const url = require('url');
const querystring = require('querystring');

let str = 'https://example.com/path/to/page?name=sanjay_samantra&color=dark blue';
let queryStr = url.parse(str).query;
console.log(queryStr);

let obj = querystring.parse(queryStr);
console.log(obj.name , obj.color)