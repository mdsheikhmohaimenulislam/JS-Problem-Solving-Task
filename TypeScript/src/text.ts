// let bazarList: (string | number)[] = ["eggs",11,"milk","sugar"];

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
  addNewPrice(value: number): number {
    const totalPrice = this.prince + value;
    return totalPrice;
  },
};
// console.log(car.addNewPrice(5000));

const arr: number[] = [1, 2, 3, 4];

const squareArray = arr.map((elem: number): number => elem * elem);

// console.log(squareArray);

// Object destructuring array

// const user = {
//   id: 12,
//   name: {
//     firstName: "loi",
//   },
//   gender: "male",
//   color: "blue",
// };

// type CartItem = {
//   name: string;
//   price: number;
//   quantity?: number;
// };

// function calculateTotal(item: CartItem) {
//   const { price, quantity = 1 } = item;
//   //   if (item?.quantity === 0) {
//   //     const quantity = 1;
//   //     `${item.name} ${item.price * quantity}`
//   //   }

//   return `name: ${item.name} price: ${price * quantity}`;
// }

// console.log(calculateTotal({ name: "pencil", price: 100 }));

// Task 2: Merging User Profiles

// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };

// type Employee = Person & JobDetails;

// function getProfile(employee: Employee) {
//   const { name, role } = employee;
//   return `name: ${name}  role: ${role} `;
// }

// console.log(getProfile({ name: "loi", role: "dev", age: 22, salary: 500 }));

// Task 3: The "Safe" Data Fetcher
// 💡 Real-world connection
// এই pattern তুমি API response এ সবসময় দেখবে:
// data?.user?.profile?.email ?? "not found"

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

function getZipCode(userResponse: UserResponse) {
  return userResponse.info?.address?.zipCode ?? "00000";
}

// const result = getZipCode({info:{address:{zipCode:"1100"}}});
const result = getZipCode({});
// console.log(result);

// Task 4: Type Assertion

let secretValue: unknown = "typescript is awesome";

const upperValue = secretValue as string;
// const upperValue = (secretValue as string).toUpperCase();

// console.log(upperValue.toUpperCase());

// Task 5: Generic Constraints

function logLength<T extends { length: number }>(input: T) {
  return input.length;
}

// console.log(logLength({length:55}));

// Task 6: The Property Guard
const product1 = { id: 101, name: "Keyboard", price: 50 };

function getProductProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const result1 = getProductProp(product1, "id");
// console.log(result1);

// Task 7: Constant Literal Types
const Colors = {
  Primary: "RED",
  Secondary: "BLUE",
} as const;

type ValidColor = (typeof Colors)[keyof typeof Colors];

function setColo(c: ValidColor) {
  return c;
}
// console.log(setColo("BLUE"));

// Task 8: The "Draft" Mode
interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type ReadonlyAndOptional<T> = { readonly [k in keyof T]?: T[k] };

const result2: ReadonlyAndOptional<MyDocument> = {
  title: "Readonly And Optional",
  content: "Task",
  author: "Loi",
};
// console.log(result2);
