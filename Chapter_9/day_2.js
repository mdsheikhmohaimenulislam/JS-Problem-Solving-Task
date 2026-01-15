// function add(sum){
// const value = sum + sum;
// console.log(value)
// }
// add(5)

// function addNumbers(a, b, c) {
//   return a + b + c;
// }

// const result = addNumbers(5, 5, 5);
// console.log(result);

function addNumbers(a, b) {
  console.log(arguments);
  return a + b;
}
const result = addNumbers(5,8,9,6)
console.log(result)