const nodemailer = require("nodemailer");
const express = require('express');
const app = express();

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
        to: "teja.madu@gmail.com,gveerendray1803@gmail.com", // list of receivers
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
        `,
        attachments:[
            {
                filename: 'profile.png',
                path: './profile.png'
            }
        ]
    });
    console.log("Message Sent Successfully!!!");
}

app.get('/sendMail', async (req, res) => {
    try {
        await sendMyMail();
        res.send("Message Sent Successfully!!!");
    } catch (err) {
        res.send(err)
    }
});

app.listen(5000, () => {
    console.log(`app Running at 5000 port`)
});
