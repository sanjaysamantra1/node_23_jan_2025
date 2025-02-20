const os = require('os');

console.log('Architecture:', os.arch());
console.log('CPUs:', os.cpus().length);
console.log('Total Memory:', os.totalmem()/1024/1024/1024 +' GB');
console.log('Free Memory:', os.freemem()/1024/1024/1024 +' GB');
console.log('hostname:', os.hostname());
console.log('platform:', os.platform());
console.log('release:', os.release());
console.log('type:', os.type());
console.log('uptime:', os.uptime()/60/60/24+' days');
console.log('userInfo:', os.userInfo().username);
console.log('homedir:', os.homedir());
console.log('userInfo:', os.tmpdir());