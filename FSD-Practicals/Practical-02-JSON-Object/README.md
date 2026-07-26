# Practical 02 - Print Formatted Statement from JSON Object

## 🎯 Aim

Create a JavaScript program that reads values from a nested JSON object and prints the following statement:

```
Ramesh got 99 outof 100 marks
and secure 1st rank.
```

---

# 📝 Problem Statement

Given a JSON object containing student details, subjects, marks, rank, and other information, access the required values and print the formatted output.

---

# 💻 JavaScript Code

```javascript
const a = {
    "Name": "Ramesh",

    "Subjects": ["Maths", "Science", "Chemistry"],

    "Grade": {
        "Type": "marks",
        "Total": [88, 90, 99, 87]
    },

    "Range": {
        "opt": "100",
        "type": ["secure", "subject", "class"]
    },

    "achive": [
        {
            "Rank": "rank",
            "place": [1, 2, 3]
        },
        {
            "Ordinalindicator": "st"
        },
        "12"
    ],

    "joints": ["outof", "got", "and"]
};

const name = a.Name;
const highestMark = Math.max(...a.Grade.Total);
const total = a.Range.opt;
const rank = a.achive[0].place[0];
const ordinal = a.achive[1].Ordinalindicator;

console.log(`${name} ${a.joints[1]} ${highestMark} ${a.joints[0]} ${total} marks`);
console.log(`${a.joints[2]} secure ${rank}${ordinal} rank.`);
```

---

# ▶️ Output

```
Ramesh got 99 outof 100 marks
and secure 1st rank.
```

---

# 🧠 Logic

1. Create a JSON object.
2. Access the student's name.
3. Find the highest mark using `Math.max()`.
4. Read the total marks.
5. Read the rank and ordinal indicator.
6. Print the sentence using template literals.

---

# 📚 Concepts Used

- JSON Object
- Nested Objects
- Arrays
- Array Indexing
- Object Property Access
- Math.max()
- Spread Operator (`...`)
- Template Literals

---

# ❗ Common Mistakes

- Forgetting to use the spread operator with `Math.max()`.
- Using `a.achive.place` instead of `a.achive[0].place`.
- Using `a.joints.got` instead of `a.joints[1]`.
- Forgetting array indexes.

---

# 🎯 Viva Questions

### What is JSON?

JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange information as key-value pairs.

---

### Why do we use the spread operator (`...`)?

The spread operator converts an array into individual values so that `Math.max()` can compare them.

---

### Why is `a.achive[0].place[0]` used?

Because `achive` is an array containing objects, and `place` is another array inside the first object.

---

### What is a template literal?

A template literal is a string enclosed in backticks (`` ` ``) that allows variables to be inserted using `${}`.

---

# 📖 Conclusion

This practical demonstrates how to navigate nested JSON objects and arrays, retrieve specific values, use built-in JavaScript functions, and generate formatted output.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
