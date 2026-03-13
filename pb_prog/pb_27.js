// <!-- Write a function 'FirstAndLast' that takes in an array, and returns an 
// object with:
// 1) the first element of the array as the object's key, and
// 2) the last element of the array as that key's value. 
// (Example input: ['ABC', 'DEF', 'Employee', 'Manager'] 
// output: ABC : 'Manager') -->

function FirstAndLast(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return {};
  }
  
  const first = arr[0];
  const last = arr[arr.length - 1];
  
  return { [first]: last };
}

// Example usage:
console.log(FirstAndLast(['ABC', 'DEF', 'Employee', 'Manager']));
// Output: { ABC: 'Manager' }
