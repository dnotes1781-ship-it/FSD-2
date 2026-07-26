const express = require("express");      // Import Express framework
const nodemailer = require("nodemailer"); // Import Nodemailer package

// Create Express application
const app = express();

// Create transporter object to connect Node.js with Gmail
const transporter = nodemailer.createTransport({

    // Email service provider
    service: "gmail",

    // Authentication details
    auth: {

        // Sender Gmail address
        user: "lju@gmail.com",

        // Gmail App Password (not normal Gmail password)
        pass: "YOUR_APP_PASSWORD"

    }

});

// Object containing all email details
const mailOptions = {

    // Sender email address
    from: "lju@gmail.com",

    // Receiver email addresses
    to: "student@gmail.com, faculty@gmail.com",

    // Subject of email
    subject: "LJ University",

    // HTML body of email
    html: `
        <h3>Welcome Student</h3>

        <table border="1">

            <tr>
                <th>Date</th>
                <th>Exam Name</th>
            </tr>

            <tr>
                <td>28/06/23</td>
                <td>FSD-2</td>
            </tr>

        </table>
    `
};

// Send email using transporter
transporter.sendMail(mailOptions, (err, info) => {

    // If an error occurs
    if (err) {

        console.log(err);

    }

    // If email is sent successfully
    else {

        console.log("Mail Sent Successfully");
        console.log(info.response); // Display server response

    }

});

// Start server on port 5000
app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});