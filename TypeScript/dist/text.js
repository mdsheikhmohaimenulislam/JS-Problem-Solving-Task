"use strict";
// let bazarList: (string | number)[] = ["eggs",11,"milk","sugar"];
Object.defineProperty(exports, "__esModule", { value: true });
// bazarList.push("apple")
// let coordinates: [number,number,number] = [100,1000,500];
// const user: {
//   firstName?: string;
//   middleName: string;
//   lastName?: string;
// } = {
// firstName:"k",
//   middleName: "loi",
// };
// const user: {
//   readonly firstName?: string;
//   middleName: string;
//   lastName?: string;
// } = {
//   firstName: "k",
//   middleName: "loi",
// };
// function add(num:number, num2:number){
//     return num + num2;
// }
// console.log(add(44,55));
// const add = (num1: number, num2: number) => num1 + num2;
// add(55, 66);
// object => function => method
const car = {
    name: "loi",
    prince: 40,
    addNewPrice(value) {
        const totalPrice = this.prince + value;
        return totalPrice;
    },
};
// console.log(car.addNewPrice(5000));
const arr = [1, 2, 3, 4];
const squareArray = arr.map((elem) => elem * elem);
function getZipCode(userResponse) {
    return userResponse.info?.address?.zipCode ?? "00000";
}
// const result = getZipCode({info:{address:{zipCode:"1100"}}});
const result = getZipCode({});
// console.log(result);
// Task 4: Type Assertion
let secretValue = "typescript is awesome";
const upperValue = secretValue;
// const upperValue = (secretValue as string).toUpperCase();
// console.log(upperValue.toUpperCase());
// Task 5: Generic Constraints
function logLength(input) {
    return input.length;
}
// console.log(logLength({length:55}));
// Task 6: The Property Guard
const product1 = { id: 101, name: "Keyboard", price: 50 };
function getProductProp(obj, key) {
    return obj[key];
}
const result1 = getProductProp(product1, "id");
// console.log(result1);
// Task 7: Constant Literal Types
const Colors = {
    Primary: "RED",
    Secondary: "BLUE",
};
function setColo(c) {
    return c;
}
const result2 = {
    title: "Readonly And Optional",
    content: "Task",
    author: "Loi",
};
const value = "Small";
console.log(value);
// !
function getData(input) {
    return Array.isArray(input) ? "Large" : "Small";
}
const userProfile = {
    id: 3,
    username: "oi",
};
// console.log(userProfile);
//# sourceMappingURL=text.js.map