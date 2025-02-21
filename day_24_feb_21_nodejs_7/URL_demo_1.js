const url = require('url');

const urlStr = 'http://localhost:8080/default.htm?year=2025&month=february';
const urlObj = url.parse(urlStr, true);

console.log(urlObj); 
console.log(urlObj.host);      // localhost:8080
console.log(urlObj.pathname);  // default.htm
console.log(urlObj.search);    // ?year=2025&month=february

const queryParams = urlObj.query;   // { year: 2025, month: 'february' }
console.log(queryParams.year, queryParams.month); // 2025 february