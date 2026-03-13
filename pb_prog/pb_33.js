// <!--pb_33:-  Write one JSON string with date property (yyyy-mm-dd) and print 
// date in India standard time. -->

const obj = `{"name":"xyz","age":38,"dob":"1993-02-21"}`
const a = JSON.parse(obj)
console.log(a.dob)
d = new Date(a.dob)
console.log(d)