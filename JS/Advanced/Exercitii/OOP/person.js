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

class Teacher extends Person {
    constructor (name, age, height, specialty){
        super(name, age, height, specialty);
        this.specialty = specialty;
    }
    sayHello(){
        super.sayHello();
        console.log(`I'm a teacher and I teach ${this.specialty}`);
    }
}

var Radu = new Person('Radu', 33, 170);
var Andreea = new Student('Andreea', 26, 168, 'JavaScript');
var chuckNorris = new Teacher('Chuck Norris', 40, 175, 'Vue.JS');

Radu.sayHello();
Andreea.sayHello();
chuckNorris.sayHello();