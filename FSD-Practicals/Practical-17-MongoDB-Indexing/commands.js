// Switch Database
use student

// Insert Documents
db.student.insertMany([
    {_id:123433,name:"DDD",age:32},
    {_id:123434,name:"BBB",age:20},
    {_id:123435,name:"AAA BBB",age:10}
])

// View Data
db.student.find()

// Question 1
db.student.createIndex({name:"text"})

db.student.find({
    $text:{
        $search:"BBB"
    }
})

db.student.find({
    $text:{
        $search:"BBB"
    }
}).explain("executionStats")

// Question 2
db.student.createIndex({age:1})

db.student.find({
    age:{
        $gt:15
    }
})

db.student.find({
    age:{
        $gt:15
    }
}).explain("executionStats")
