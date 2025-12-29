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

//!............Object lock and key ............................!//

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


//*..........Practice................

const book = {
    name:"Loi Series",
    author:"Loi",
    page:125,
    
}
