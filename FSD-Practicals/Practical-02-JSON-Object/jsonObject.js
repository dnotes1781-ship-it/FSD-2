// Create a constant object named 'a'
// 'const' means the variable reference cannot be reassigned
const a = {

    // Store student's name
    "Name": "Ramesh",

    // Array of subjects
    "Subjects": ["Maths", "Science", "Chemistry"],

    // Nested object named Grade
    "Grade": {

        // Type of grade
        "Type": "marks",

        // Array containing marks
        "Total": [88, 90, 99, 87]
    },

    // Nested object named Range
    "Range": {

        // Maximum marks
        "opt": "100",

        // Array of words
        "type": ["secure", "subject", "class"]
    },

    // Array containing objects and values
    "achive": [

        {
            // Rank word
            "Rank": "rank",

            // Array of positions
            "place": [1, 2, 3]
        },

        {
            // Ordinal indicator
            "Ordinalindicator": "st"
        },

        // Extra value
        "12"
    ],

    // Array containing words used to build the sentence
    "joints": ["outof", "got", "and"]

};



// Get the student's name
// a.Name accesses the Name property
const name = a.Name;



// Find the highest mark
// Math.max() returns the largest number
// (...) Spread operator converts array into individual values
const highestMark = Math.max(...a.Grade.Total);



// Get total marks
// Access Range object
// Access opt property
const total = a.Range.opt;



// Get first rank
// achive[0] → First object
// place[0] → First element of place array
const rank = a.achive[0].place[0];



// Get ordinal indicator
// achive[1] → Second object
// Ordinalindicator → "st"
const ordinal = a.achive[1].Ordinalindicator;



// Print first sentence
// Template literal allows inserting variables using ${}
console.log(`${name} ${a.joints[1]} ${highestMark} ${a.joints[0]} ${total} marks`);



// Print second sentence
console.log(`${a.joints[2]} secure ${rank}${ordinal} rank.`);
