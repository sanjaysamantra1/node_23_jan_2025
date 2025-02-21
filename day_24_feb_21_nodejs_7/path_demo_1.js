const path = require('path');

const myPath = 'C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_23_jan_2025/day_24_feb_21_nodejs_7/path_demo_1.js';
console.log(path.basename(myPath)); // path_demo_1.js
console.log(path.delimiter);
console.log(path.sep);
console.log(path.extname(myPath));
console.log(path.isAbsolute(myPath));

