import { Hero } from './hero.js';

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

export { Undead }