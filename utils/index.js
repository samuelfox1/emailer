const nodemailer = require('nodemailer');
require('dotenv').config()


module.exports = {
    sendEmail: (destination, subject = 'Sent using Node.js', action = 'text', body = 'hello world') => {

        return new Promise(async (resolve, reject) => {

            try {
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
                    [action]: body,
                    subject,
                    // text: 'Super Easy!',
                    // html: '<h1>hello world</h1>'
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