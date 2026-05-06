"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ?...............OOP --> Class ---> Object..............
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound(name) {
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
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeIng(name) {
        console.log(`The ${name} Animal is making sound ${this.sound}`);
    }
}
const dogBai = new Animal1("dogIChain", "dog", "gheW gheW");
const catI = new Animal1("catIng", "cat", "mewO mewO");
dogBai.makeIng("chu");
console.log(dogBai);
console.log(catI);
//# sourceMappingURL=type.js.map