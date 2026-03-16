// Path Module
// - Provides utilities for working with file and directory paths
// - It can be used to handle and transform file paths

p1ath = require('path');

// Get the file name from a path
console.log(p1ath.basename('/home/user/file.txt')); // Output: file.txt

// Get the directory name from a path
console.log(p1ath.dirname('/home/user/file.txt')); // Output: /home/user

// Get the file extension from a path
console.log(p1ath.extname('/home/user/file.txt')); // Output: .txt

// Join multiple path segments into a single path
console.log(p1ath.join('/home', 'user', 'file.txt')); // Output: /home/user/file.txt

// Normalize a path, resolving '..' and '.' segments
console.log(p1ath.normalize('/home/user/../file.txt')); // Output: /home/file.txt

// Resolve a sequence of paths into an absolute path
console.log(p1ath.resolve('file.txt')); // Output: /current/working/directory/file.txt
