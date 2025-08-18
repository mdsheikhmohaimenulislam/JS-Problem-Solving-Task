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

let array = [5, 1, 9, 3];

const bigNumber = () => {
    const value = Math.max(...array)
    console.log(value);
};

bigNumber();