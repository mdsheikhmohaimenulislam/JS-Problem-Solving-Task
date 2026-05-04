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
