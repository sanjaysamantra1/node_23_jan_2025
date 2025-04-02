const cron = require('node-cron');
const nodemailer = require("nodemailer");

async function sendMyMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sanjaysamantra2@gmail.com",
            pass: "oiug hmtp wwiw csbq", // google app password
        }
    });
    await transporter.sendMail({
        from: '"Sanjay Samantra 👻" sanjaysamantra2@gmail.com', // sender address
        to: "ajaysingh.sdm@gmail.com,adarshnimkar04@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: `
            <h1>This is a Test Email</h1>
            <h3 style="color:red;text-align:center">Congratulations!!</h3>
            <p>Please follow the instructions to claim your amoubt</p>
            <pre>
                Helloooooooo
                Hiiiiiiiiiiiii
                Good Morning
            </pre>
        `
    });
    console.log("Message Sent Successfully!!!");
}

cron.schedule('* * * * *', async () => {
    await sendMyMail();
    console.log('Mail Sent successfully');
});
