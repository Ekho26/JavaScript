class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, height, course){
        // Apelam constructorul parintelui
        super(name, age, height);
        // Adaugam proprietatile in plus
        this.course = course;
    }
    // Suprascrierea metodelor:
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I like ${this.course}`);
    }
}

var personRadu = new Person('Radu', 33, 170);
var studentAndreea = new Student('Andreea', 26, 168, 'JavaScript');

personRadu.sayHello();
studentAndreea.sayHello();