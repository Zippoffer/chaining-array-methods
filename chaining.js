var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// // Sort the numbers in descending order (10, 9, 8, 7, etc).
// integers.sort(function(a, b) {
//     b - a
// });
// console.log("integers sorted in descending order" + " =", integers);


// // Remove any integers greater than 19.
// var newArray = integers.filter(function(x) {
//     return x <= 19
// });
// console.log("removing integers greater than 19" + " =", newArray);


// // Multiply each remaining number by 1.5 and then subtract 1.
// var newArray = integers.map(function(x) {
//     return (x * 1.5) - 1
// });
// console.log("integers multiplied by 1.5, and then subtract 1" + " =", newArray);


// // Then output (either in the DOM or the console) the sum of all the resulting numbers.
// var newArray = integers.reduce(function(a, b) {
//     return a + b
// });
// console.log("sum of resulting numbers" + " =", newArray);




var newArray = integers.sort(function(a, b) {
    return b - a
}).filter(function(x) {
    return x <= 19
}).map(function(y) {
    return (y * 1.5) - 1
}).reduce(function(a, b) {
    return a + b;
});
console.log("after running through the functions, your new number" + " =", newArray);