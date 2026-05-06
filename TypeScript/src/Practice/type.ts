// ?...............OOP --> Class ---> Object..............
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound(name: string) {
    console.log(`the ${name} animal is makeIng sound ${this.sound}`);
  }
}

const dog = new Animal("dogI", "dog", "gheW gheW");
const cat = new Animal("catI", "cat", "mew mewO");
// cat.makeSound("Ogi")
// dog.makeSound("dogIChan")
// console.log(cat.name);

// ?................patramental properties .............................
class Animal1 {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeIng(name: string) {
    console.log(`The ${name} Animal is making sound ${this.sound}`);
  }
}

const dogBai = new Animal1("dogIChain", "dog","gheW gheW");
const catI = new Animal1("catIng","cat","mewO mewO")
// dogBai.makeIng("chu")
// console.log(dogBai);
// console.log(catI);
