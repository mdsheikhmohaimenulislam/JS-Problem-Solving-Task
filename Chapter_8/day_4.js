// const player = {
//   name: "loi",
//   team: "the true",
//   age: 20,
//   result: {
//     value: 20,
//     win: "the true 1",
//     member: 20,
//   },
// };

// console.log(player.name)

// const laptop = {
//   brand: "Apple",
//   price: 150000,
//   hardDisc: "1tb",
//   ram: "520 gb",
//   screenSize: "15 inc",
// };

// console.log(laptop.screenSize)

// const favPlace = {
//   name: "Cox's Bazar",
//   distance: "400km",
//   popularity: "high",
// };

// console.log(favPlace['popularity'])

// const phone = {
//   brand: "loi",
//   price: 2300000,
//   color: "blue",
// };

// console.log(phone['price'])

// const library = {
//   name: "Public Library",
//   location: "Dhaka",
//   book: 500,
// };

// console.log(library.location)

// const college = {
//   name: "Loi Academic",
//   established: 2025,
//   group: ["Science", "Arts", "Commerce"],
// };

// console.log(college.group[1])

// const animeFamily = {
//   father: {
//     name: "Dragon",
//     age: 25,
//     profession: "Supreme Commander of the Revolutionary Army",
//   },
//   mother: {
//     name: "Toritoma",
//     age: 20,
//   },
// };

// const sum = animeFamily.father.age + animeFamily.mother.age;

// console.log(sum);

//!............Object lock and keys ............................!//

// const computer = {
//   brand: "loi",
//   price: 3500,
//   processor: "intel",
//   ssd: "512gb",
// };

// const key = Object.keys(computer);
// const value = Object.values(computer);

// console.log(key);
// console.log(value);
// console.log(key.includes("price"))

// const profile = {
//   name: "loi",
//   age: 20,
//   city: "Ngn",
// };

// const profileKeys = Object.keys(profile);
// const hasName = profileKeys.includes("name");

// console.log(hasName);

// if ("name" in profile) {
//   console.log("value exists");
// } else {
//   console.log("No Spam");
// }

//?.........................hasOwnProperty.................

// const profile = {
//   name: "loi",
//   age: 20,
//   city: "Ngn",
// };

// if (profile.hasOwnProperty("name")) {
//   console.log("that data here");
// } else {
//   console.log("that data not here");
// }

// if(profile.name === "loi"){
//     console.log("data here")
// }else{
//     console.log("data not here")
// }

// const person = {
//   name: "Alice",
//   age: 25,
//   country: "Bangladesh",
// };

// const entries = Object.entries(person);
// console.log(entries)

// const profile = {
//   name: "Loi",
//   age: 20,
//   city: "ngn",
// };
// for (const key in profile) {
//   const value = profile[key];
//   console.log(key, value);
// }

// for (const i in profile) {
//   const result = profile[i];
//   console.log(i, result);
// }

// const profile = {
//   name: "loi",
//   age: 20,
//   city: "ngn",
// };

// const keys = Object.keys(profile);
// for (const key of keys) {
//   console.log(key);
// }
// for (const i in profile) {
//   const result = profile[i];
//   console.log(i, result);
// }

//*..........Practice.........................

// const book = {
//     name:"Loi Series",
//     author:"Loi",
//     page:125,

// }

// function demo() {
// console.log(a);
// var a = 10
// let b = 20
// console.log(b);
// }
// demo();

// async function test() {
// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);
// await Promise.resolve();
// console.log(4);
// }
// test();

// function App() {
// const [count, setCount] React.useState(0);
// const handleClick = () = { setCount(count + 1);
// setCount(count + 1);
// }
// return (
// <button onClick=[handleClick}>{count}</button>
// );
// }

/**
 * 1. JavaScript loop output
 *            Step 1: Loop execution and conditions
 *            The JavaScript code snippet uses a for loop that iterates with the variable \(i\) from 1 up to and including 5. Inside the loop is a ternary operator that evaluates two conditions using the modulo operator (\(\%\)) and the logical OR operator (||) implicitly via the ternary chain.
 *    .f5cPye .WaaZC:first-of-type .rPeykc.uP58nb:first-child{font-size:16px;line-height:24px;font-weight:400 !important;letter-spacing:normal;margin:0 0 10px 0}.rPeykc.uP58nb{font-size:20px;font-weight:600;line-height:28px;margin:20px 0 10px 0}.f5cPye ul{font-size:16px;line-height:24px;margin:10px 0 20px 0;padding-inline-start:16px}.f5cPye .WaaZC:first-of-type ul:first-child{margin-top:0}.f5cPye ul.qh1nvc{font-size:16px;line-height:24px}.f5cPye li{padding-inline-start:4px;margin-bottom:8px;list-style:inherit}.f5cPye li.K3KsMc{list-style-type:none}.f5cPye ul>li:last-child,.f5cPye ol>li:last-child,.f5cPye ul>.bsmXxe:last-child>li,.f5cPye ol>.bsmXxe:last-child>li{margin-bottom:0}
 * Step 2: Iteration \(i=1\)                 For \(i=1\):    Condition 1: \(1\%2==0\) is false. The first expression in the ternary is \(1\%2\), which evaluates to 1. In JavaScript, non-zero numbers are truthy, so the condition is true, and 'Even' is returned.              Step 3: Iteration \(i=2\)                 For \(i=2\):    Condition 1: \(2\%2==0\) is true. The first expression in the ternary is \(2\%2\), which evaluates to 0. In JavaScript, zero is falsy, so the second part of the ternary is evaluated. Condition 2: \(2\%3==0\) is false. The expression \(2\%3\) evaluates to 2, which is truthy. The result is 'Div3'.
 *             Step 4: Iteration \(i=3\)                 For \(i=3\):    Condition 1: \(3\%2==0\) is false. The expression \(3\%2\) evaluates to 1, which is truthy. The result is 'Even'.              Step 5: Iteration \(i=4\)                 For \(i=4\):    Condition 1: \(4\%2==0\) is true. The expression \(4\%2\) evaluates to 0, which is falsy. The second part of the ternary is evaluated. Condition 2: \(4\%3==0\) is false. The expression \(4\%3\) evaluates to 1, which is truthy. The result is 'Div3'.              Step 6: Iteration \(i=5\)                 For \(i=5\):    Condition 1: \(5\%2==0\) is false. The expression \(5\%2\) evaluates to 1, which is truthy.
 * The result is 'Even'. .f5cPye hr{border:1px solid var(--m3c17);border-top:0;margin:32px 0}             Answer:                 The output of the code is A. Odd, Even, Div3, Even, Odd, which corresponds to the sequence of results from the evaluations of the truthy/falsy values of the modulo operations.
 *
 * */

// 1..
// const book = {
//   name: "compact",
//   author: "loi",
//   age: 20,
// };

// for (const key in book) {
//   const profile = book[key];
//   console.log(key, profile);
// }

// const values = Object.keys(book)

// for(const key of values){
// console.log(key, book[key])
// }

// 2
const article = {
  title: "learning.js",
  category: "Programming",
};

// if(article.hasOwnProperty("author")){
//     console.log(' values here')
// }else{
//     console.log("not here")
// }

// if (article === "author") {
//   console.log("values here");
// }else{
//     console.log("not here")
// }

// if ("author" in article) {
//   console.log("values here");
// } else {
//   console.log("not here");
// }

// 3
// const laptop = {
//   brand: "Dell",
//   model: "i5",
//   price: 2100,
// };
// for (const keys in laptop) {
//   const values = laptop[keys];
//   console.log(keys, values);
// }

// 4
// const phone = {
//   brand: "samsung",
//   model: "galaxy",
//   price: 4500,
// };
// const values = Object.keys(phone);
// for (const key of values) {
//   console.log(key, phone[key]);
// }
