class Hero {
    constructor(name, life, mana) {
        this.name= name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary(anotherHero){}
    fireSecondary(anotherHero){}
    receiveHit(energy){}
    isAlive(){
        return this.life > 0;
    }
}

class Superman extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 5;
        anotherHero.receiveHit(30);
    }
    firesecondary(anotherHero) {
        this.mana -= 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(energy) {
        if (energy > 10){
            this.life -= 0.1*energy;
        }
    }
}

class Mage extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 20;
        this.life += 2;
        anotherHero.receiveHit(15);
    }
    fireSecondary(anotherHero) {
        this.mana -= 10;
        this.life += 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(energy) {
        this.life -= 10;
        this.mana += energy *0.5;
    }
}

class Undead extends Hero {
    firePrimary() {
        this.mana -= 0.5;
        this.life += 30;
    }
    fireSecondary() {
        this.mana -= 1;
        this.life += 50;
    }
    receiveHit() {
        this.life -= 0.1;
        this.mana += 100;
    }
}

var clark = new Superman('Clark Kent', 1000, 1000);
var xevras = new Mage('Xevras', 100, 300);

clark.firePrimary();
xevras.receiveHit();
xevras.firePrimary();
clark.receiveHit();
xevras.fireSecondary();
clark.receiveHit();
clark.fireSecondary();
xevras.receiveHit();

console.log(clark);
console.log(xevras);

console.log(clark.isAlive());
console.log(xevras.isAlive());