// Create Database
use students1

// Insert Records
db.students1.insertMany([
    {name:"ABC",age:12,std:7,percentage:89},
    {name:"mno",age:16,std:9,percentage:99},
    {name:"pqr",age:15,std:8,percentage:98}
])

// Find names where age > 5
db.students1.find(
    {age:{$gt:5}},
    {name:1,_id:0}
)

// Increase std by 1
db.students1.updateMany(
    {},
    {$inc:{std:1}}
)

// Arrange by descending age
db.students1.find().sort({age:-1})

// Oldest student
db.students1.find(
    {},
    {name:1,_id:0}
).sort({age:-1}).limit(1)
