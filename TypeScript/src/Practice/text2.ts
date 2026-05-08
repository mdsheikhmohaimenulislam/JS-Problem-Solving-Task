class BankAccount {
  readonly userId: number;
  userName: String;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(addMoney: number) {
    //? this.userBalance = this.userBalance + addMoney;
    this.userBalance += addMoney;
    return this.userBalance;
  }
}

const shaFi = new BankAccount(101, "ShaFi", 500);
// console.log(shaFi.addBalance(500));

type RichPeople = {
  bike: string;
  car: string;
  ship: string;
};

type TypeCheck<T> = T extends keyof RichPeople ? true : false;
type HasBike = TypeCheck<"car">;
 