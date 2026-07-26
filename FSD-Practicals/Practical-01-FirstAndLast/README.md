# Practical 01 - FirstAndLast Function (JavaScript)

## 📌 Aim

Write a JavaScript function `FirstAndLast` that takes an array and returns an object where:

- The **first element** of the array becomes the **object key**.
- The **last element** of the array becomes the **object value**.

---

## 📝 Problem Statement

Write a function `FirstAndLast` that takes an array and returns an object with:

1. The first element of the array as the object's key.
2. The last element of the array as that key's value.

### Example

**Input**

```javascript
["ABC", "DEF", "Employee", "Manager"]
```

**Output**

```javascript
{
  ABC: "Manager"
}
```

---

## 💻 JavaScript Code

```javascript
function FirstAndLast(arr)
{
    let obj = {};

    obj[arr[0]] = arr[arr.length - 1];

    return obj;
}

let data = ["ABC", "DEF", "Employee", "Manager"];

console.log(FirstAndLast(data));
```

---

## ▶️ Output

```javascript
{
  ABC: 'Manager'
}
```

---

## 🧠 Logic

1. Create an empty object.
2. Access the first element using `arr[0]`.
3. Access the last element using `arr[arr.length - 1]`.
4. Store them as key-value pair.
5. Return the object.

---

## 📚 Concepts Used

- JavaScript Functions
- Arrays
- Objects
- Array Indexing
- `length` Property

---

## ❗ Common Mistakes

- Using `arr.length` instead of `arr.length - 1`.
- Returning the array instead of the object.
- Using `obj.arr[0]` instead of `obj[arr[0]]`.

---

## 🎯 Viva Questions

### Why do we use `arr.length - 1`?

Because array indexing starts from **0**, so the last element is always at `length - 1`.

---

### Why do we use square brackets?

Because the object key is stored in a variable (`arr[0]`).

---

### What does `{}` represent?

It creates an empty object.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
