const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const StudentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        lowercase: true
    },

    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/
    },

    password: {
        type: String,
        minlength: 8,
        maxlength: 12
    },

    city: {
        type: String,
        enum: ["baroda", "surat", "ahmedabad"]
    }

});

const Student = mongoose.model("Student", StudentSchema);

const student = new Student({
    name: "Dhruvi",
    surname: "SONI",
    email: "dhruvi@gmail.com",
    password: "abcd1234",
    city: "surat"
});

student.save()
.then(() => console.log("Data Saved"))
.catch(err => console.log(err));