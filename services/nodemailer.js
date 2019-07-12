const nodemailer = require('nodemailer');
const nodeMailerPass = require('../config/nodeMailerPass');

// Nodemailer method
exports.sendmailer = function (email) {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: nodeMailerPass.user,
            pass: nodeMailerPass.pass
        }
    });

    var mailbody = `
        <h3> Bonjour Membre</h3>
        <p>Votre demande d'adhésion a été accepté !</p>
        <p>Vous pouvez désormais régler votre adhésion !</p>
        <p> Connectez vous à votre profil pour cela.</p>
        `

    var mailOptions = {
        from: 'alexhuylaptran@gmail.com',
        to: email,
        subject: 'Demande de paiement de votre adhésion',
        // text: `Hi Smartherd, thank you for your nice Node.js tutorials.
        //         I will donate 50$ for this course. Please send me payment options.`
        html: mailbody,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}