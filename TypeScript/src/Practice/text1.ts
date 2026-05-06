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
