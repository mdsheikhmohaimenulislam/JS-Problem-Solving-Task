// Problem 1: Reverse a String...............
function add(name) {
  return name.split("").reverse().join("");
}

console.log(add("hello"));

// Problem 2: Count Vowels in a String

function myStr1(myStr) {
  let vowels = /[aeiou]/g;
  let match = myStr.match(vowels).length;
  return match
}
console.log(myStr1("programming"));

// Problem 3: Check for Palindrome

const revValue = (name) => {
  const myRevName = name.split("").reverse().join("");
  const checkName = name === myRevName;
  console.log("Check Name: ", checkName);
};

revValue("madam");
revValue("hello");

// Problem 4: Find the Maximum Number

const bigValue = (array) => {
  const value = Math.max(...array);
  console.log(value);
};

bigValue([5, 1, 9, 3]);

// Problem 5: Remove Duplicates from an Array

function uniqueArr(arr) {
  let uniqueValue = [...new Set(arr)];
  console.log(uniqueValue);
}

uniqueArr([1, 2, 2, 3, 4, 4]);

// Problem 6: Sum of All Numbers in an Array

function sum(number) {
  let s = 0;

  for (num of number) {
    s += num;
  }

  return s;
}

console.log(sum([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array

function evenNumber(even) {
  return even.filter((evenSum) => evenSum % 2 === 0);
}

console.log(evenNumber([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word

function words(word) {
  return word
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.substring(1).toLowerCase())
    .join(" ");
}

console.log(words("Hello World"));

// Problem 9: Find the Factorial of a Number
function value1(num) {
  let fac = 1;
  for (let i = num; i >= 1; i--) {
    fac = fac * i;
  }
  return fac;
}

console.log(value1(5));

// Problem 10: PingPong Challenge
function PingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
PingPong();
