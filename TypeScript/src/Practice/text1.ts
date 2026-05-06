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

//?  Type guard using instance of / type narrowing
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(sleepTime: number) {
    console.log(`${this.name} every day sleeping time ${sleepTime}`);
  }
}

class Student1 extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numberOfTime: number) {
    console.log(`${this.name} every day study time ${numberOfTime}`);
  }
}

class Teacher2 extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(inClassTime: number) {
    console.log(`${this.name} tech in student time ${inClassTime} hour`);
  }
}

//  function  student & teacher
const isStudent = (user: Person) => {
  return user instanceof Student1;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher2;
};

const getUser = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(2);
  } else if (isTeacher(user)) {
    user.takeClass(1);
  } else {
    user.getSleep(8);
  }
};

const student2 = new Student("Sezumi", "dhaka", 21);
const Teacher3 = new Teacher2("soni");
getUser(student2);
getUser(Teacher3);
