const { spawn } = require('child_process');
console.log('main Process')

for (let i = 1; i <= 3; i++) {
    const fileName = `test_${i}.js`;
    const subprocess = spawn("node", [fileName]);

    subprocess.stdout.on('data', (data) => {
        console.log(`Received chunk ${data}`);
    });
    subprocess.stderr.on('data', (data) => {
        console.log(`Received Error ${data}`);
    });
    subprocess.on('close', (code) => {
        console.log(`Child process exited with code: ${code}`);
    });
}