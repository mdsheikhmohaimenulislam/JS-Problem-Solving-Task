class BankAccount {
  readonly userId: number;
  userName: String;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // addBalance(addMoney: number) {
  //   //? this.userBalance = this.userBalance + addMoney;
  //   this._userBalance += addMoney;
  //   return this._userBalance;
  // }

  // Setter use kore korta chai
  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  // get korBo
  // getBlance() {
  //   return this._userBalance;
  // }

  // getter use kore get korta chai
  get getBalance() {
    return this._userBalance;
  }
}

// class StudentAccount extends BankAccount {
//   test(){
//     this._userBalance
//   }
// }

const shaFi = new BankAccount(101, "ShaFi", 500);
// console.log(shaFi.addBalance(500));
// console.log(shaFi.getBlance());

// call korta hobe na
// shaFi.addBalance = 100;
// console.log(shaFi);

// type RichPeople = {
//   bike: string;
//   car: string;
//   ship: string;
// };

// type TypeCheck<T> = T extends keyof RichPeople ? true : false;
// type HasBike = TypeCheck<"car">;

// Static
class Counters {
static count: number = 0;

  increment() {
    return (Counters.count = Counters.count + 1);
  }

  static decrement() {
    return (Counters.count = Counters.count - 1);
  }
}

const instancel1 = new Counters()
console.log(instancel1.increment());


const instancel2 = new Counters()
console.log(instancel2.increment());

const instancel3 = new Counters()
console.log(instancel3.increment());

// static method
console.log(Counters.decrement());
