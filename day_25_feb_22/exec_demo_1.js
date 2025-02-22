const { exec } = require('child_process');

let urls = [
    'https://www.w3schools.com/html/html_editors.asp',
    'https://www.tutorialspoint.com/index.htm',
    'https://www.geeksforgeeks.org/node-js-query-string/'
]

for (url of urls) {
    console.log('THis will be done by a child process')
    exec(`start chrome ${url}`)
}
for (let i = 1; i <= 20; i++) {
    console.log('Main Thread Runs:::', i);
}
