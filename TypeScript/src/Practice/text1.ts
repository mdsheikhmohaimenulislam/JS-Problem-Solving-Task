// 3-2 Inheritance, the 1st Pillar of OOP

class parent {
  name: string;
  address: string;
  age: number;

  constructor(name: string, address: string, age: number) {
    ((this.name = name), (this.address = address), (this.age = age));
  }

  getSleep(hour: number) {
    console.log(`${this.name} ${hour} hour Sleeping Time..`);
  }
}

class Student extends parent {}

class Teacher extends parent {
  designation: string;

  constructor(name: string, address: string, age: number, designation: string) {
    super(name, address, age);
    this.designation = designation;
  }

  getSleep(hour: number) {
    console.log(`${this.name} ${hour} hour Sleeping Time..`);
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} ${numberOfClass} hour class nei`);
  }
}

const student1 = new Student("Shafi", "Shodor", 25);
// student1.getSleep(15);

const teacher1 = new Teacher("sence", "shodor", 25, "junior teacher");
// teacher1.takeClass(6);

// Type guard using typeof and in
type Alphaneumeric = number | string;

const add = (num: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num === "number" && typeof num2 === "number") {
    return num + num2;
  } else {
    return num.toString() + num2.toString();
  }
};

// console.log(add("2", "50"));

// in guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This name ${user.name} and his role id ${user.role}`);
  } else {
    console.log(` His name: ${user.name} `);
  }
};

// getUserInfo({name:"ruhi",role:"Admin"})

