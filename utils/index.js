const nodemailer = require('nodemailer');
require('dotenv').config()


module.exports = {
    sendEmail: (details) => {

        return new Promise(async (resolve, reject) => {
            try {
                const { destination, subject, renderAs, body } = details
                const transporter = nodemailer.createTransport({
                    service: 'yahoo',
                    auth: {
                        user: process.env.DEV_EMAIL,
                        pass: process.env.PW
                    }
                });

                const mailOptions = {
                    from: process.env.DEV_EMAIL,
                    to: destination,
                    subject: subject ? subject : 'hello from node.js',
                    [renderAs ? renderAs : 'text']: body ? body : "<h1>hello world</h1> <br> <a href='https://samuelfox1.github.io/emailer-client/'>try it out</a>",
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) reject(error);
                    else resolve(info);
                });

            } catch (error) {
                reject(error)
            }
        })
    }
}