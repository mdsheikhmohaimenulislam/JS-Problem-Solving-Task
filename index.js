// Problem 1: Reverse a String

// function add(name) {

//   return name.split("").reverse().join("");

// }

// console.log(add("hello"));

// Problem 2: Count Vowels in a String

// let myStr = "programming"

// let vowels = /[aeiou]/g

// let match = myStr.match(vowels).length
// console.log(match);

// Problem 3: Check for Palindrome

// let name = "madam";
// let value = "hello";

// const revValue = () => {
//   const myRevName = name.split("").reverse().join("");
//   const checkName = name === myRevName;
//   console.log("Check Name: ", checkName);

//   const myRevValue = value.split("").reverse().join("");
//   const checkValue = value === myRevValue;
//   console.log("Check Value: ", checkValue);
// };

// revValue();

// Problem 4: Find the Maximum Number

// let array = [5, 1, 9, 3];

// const bigValue = () => {
//   const value = Math.max(...array);
//   console.log(value);
// };

// bigValue();

// Problem 5: Remove Duplicates from an Array

// function uniqueArr(arr) {
//     let uniqueValue = [... new Set(arr)];
//     console.log(uniqueValue);
// }

// uniqueArr([1, 2, 2, 3, 4, 4]);

// Problem 6: Sum of All Numbers in an Array

// function sum(number) {
//   let s = 0;

//   for (num of number) {
//     s += num;
//   }

//   return s;

// }

// console.log(sum([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array

// function evenNumber(even) {
//   return even.filter((evenSum) => evenSum % 2 === 0);
// }

// console.log(evenNumber([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word

// function words(word) {
//   return word
//     .split(" ")
//     .map((value) => value[0].toUpperCase() + value.substring(1).toLowerCase())
//     .join(" ");
// }

// console.log(words("Hello World"));



// Problem 9: Find the Factorial of a Number
// function value(num){
//     let fac = 1;
//     for(let i = num; i >= 1; i--){
//         fac = fac * i
//     }
//     return fac
    
// }

// console.log(value(5));