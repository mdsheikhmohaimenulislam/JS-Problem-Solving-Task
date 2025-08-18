// function add(name) {

//   return name.split("").reverse().join("");

// }

// console.log(add("hello"));

// let myStr = "programming"

// let vowels = /[aeiou]/g

// let match = myStr.match(vowels).length
// console.log(match);

let name = "madam";
let value = "hello";

const revValue = () => {
  const myRevValue = name.split("").reverse().join("");
  const checkValue = name === myRevValue;
  console.log(checkValue);
};

revValue();
