// const person = {
//   name: "Alice",
//   age: 20,
//   country: "JPN",
// };

// delete person.age;
// delete person.country
// console.log(person)

// const adminUser = {
//   userName: "admin",
//   email: "admin@gmail.com",
//   role: "FNd",
// };
// Object.freeze(adminUser);

// adminUser.role = "user";
// adminUser.password = 1234;
// delete adminUser.role
// console.log(adminUser)

// const user = {
//   userName: "loi",
//   email: "loi@gmail.com",
//   password: 1234,
// };
// Object.seal(user);

// user.password = 123456;
// console.log(user);

//!...............Practice.....................!//
// 1
// const headPhone = {
//   brand: "Loi",
//   price: 3000,
//   color: "blue",
// };
// Object.freeze(headPhone);

// headPhone.price = 3500;
// headPhone.new = "model";
// console.log(headPhone);

// 2
// const player = {
//   name: "Loi",
//   goals: 3,
//   club: "miami",
// };
// Object.freeze(player)

// player.sumName = "Loi3"
// console.log(player)

// 3
// const book = {
//   title: "Harry Potter",
//   author: "Jk Rowling",
//   page: 850,
// };
// Object.seal(book);

// book.author = "Loi";
// book.page = 950;
// book.color = "Blue"; // new add hobE na
// delete book.page; // delete o hobE na
// console.log(book);

// 4
// const gadget = {
//   name: "G Phone",
//   price: 5500,
//   color: "black",
// };

// delete gadget.price;
// console.log(gadget);

// 5
// const animal = {
//   name: "Tiger",
//   age: 30,
//   location: "SunDorBon",
// };
// Object.freeze(animal)

// animal.location = "mala"
// console.log(animal)

// 6.......
// const food = {
//   name: "Pizza",
//   price: 500,
//   size: "lerGe",
// };
// Object.seal(food);

// food.price = 400;
// console.log(food);

// 7.......
// const data = { id: 1, status: "active" };
// Object.freeze(data);

// data.status = "inactive";
// data.type = "user";
// console.log(data);

// 8.....
// const user = { name: "Sara", age: 20 };
// Object.seal(user);

// user.age = 21;
// user.country = "BD";
// console.log(user);

// 9....
// const car = { brand: "Toyota" };
// Object.seal(car);

// delete car.brand;
// console.log(car);

// 10.....
// const obj = { a: 1, b: 2 };
// Object.seal(obj);

// obj.c = 3;
// console.log(obj);

