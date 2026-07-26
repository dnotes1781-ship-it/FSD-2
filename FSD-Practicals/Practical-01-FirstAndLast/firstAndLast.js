// Create a function named 'FirstAndLast'
// 'function' → Keyword used to create a function
// 'FirstAndLast' → Function name
// '(arr)' → Parameter that receives an array when the function is called
function FirstAndLast(arr)
{
    // 'let' → Declares a block-scoped variable
    // 'obj' → Variable name that will store an object
    // '{}' → Creates an empty object
    let obj = {};

    // 'obj' → Object in which we will store the key-value pair
    // 'arr[0]' → First element of the array (becomes the object key)
    // '=' → Assignment operator (assigns the value to the key)
    // 'arr.length' → Returns the total number of elements in the array
    // 'arr.length - 1' → Calculates the index of the last element
    // 'arr[arr.length - 1]' → Retrieves the last element of the array (becomes the object value)
    obj[arr[0]] = arr[arr.length - 1];

    // 'return' → Sends the object back to the place where the function was called
    // 'obj' → Return the completed object
    return obj;
}

// 'let' → Declares a variable
// 'data' → Variable name that stores the input array
// '=' → Assigns the array to the variable
// '[]' → Creates an array
let data = ["ABC", "DEF", "Employee", "Manager"];

// 'console' → JavaScript console object
// '.log()' → Prints the output to the console
// 'FirstAndLast(data)' → Calls the function and passes the 'data' array as an argument
console.log(FirstAndLast(data));
