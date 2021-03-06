class Animal {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    speak(){};
}

class Duck extends Animal {
    speak() {
        console.log(`Duck says ${this.sound}`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`Dog says ${this.sound}`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`Cat says ${this.sound}`);
    }
}

let sasha = new Dog('Sasha', 2, 'Woof!');
let duck = new Duck('Duck', 1, 'Quack!');
let cat = new Cat('Cat', 2, 'Meow!');

sasha.speak();
duck.speak();
cat.speak();