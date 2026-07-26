# Practical 10 - Sending Email using Nodemailer (Express.js)

## 📌 Objective

Create a Node.js application using **Express.js** and **Nodemailer** to send an email from a Gmail account.

The email should contain:

- Sender: `lju@gmail.com`
- Receivers:
  - `student@gmail.com`
  - `faculty@gmail.com`
- Subject: **LJ University**
- HTML body containing:
  - Welcome heading
  - Table displaying Date and Exam Name

---

## 📂 Project Structure

```
mailDemo/
│
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

---

## 📦 Packages Used

- Express.js
- Nodemailer

Install packages:

```bash
npm install express nodemailer
```

---

## ▶️ Run the Project

```bash
node server.js
```

If everything is configured correctly, the terminal will display:

```
Server Running on Port 5000
Mail Sent Successfully
```

---

## 💻 Technologies Used

- Node.js
- Express.js
- Nodemailer
- Gmail SMTP

---

## 📝 Concepts Covered

- Express Server
- Nodemailer
- SMTP (Simple Mail Transfer Protocol)
- Gmail Authentication
- HTML Email
- Sending Email using JavaScript
- Callback Function
- Error Handling

---

## 📧 Email Details

| Property | Value |
|----------|-------|
| Sender | lju@gmail.com |
| Receiver | student@gmail.com, faculty@gmail.com |
| Subject | LJ University |
| Heading | Welcome Student |
| Date | 28/06/23 |
| Exam | FSD-2 |

---

## ⚠️ Note

This practical uses Gmail SMTP.

To send a real email, replace:

```javascript
pass: "YOUR_APP_PASSWORD"
```

with your own **Google App Password**.

A normal Gmail password will not work.

---

## 📸 Expected Output

Terminal:

```
Server Running on Port 5000
Mail Sent Successfully
```

Email:

```
Welcome Student

------------------------
| Date      | Exam Name |
------------------------
| 28/06/23  | FSD-2     |
------------------------
```

---

## 🎯 Learning Outcomes

After completing this practical, you will understand:

- How to create an Express server.
- How to configure Nodemailer.
- How Gmail SMTP authentication works.
- How to send HTML emails.
- How to handle email sending errors.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science

LJ University
