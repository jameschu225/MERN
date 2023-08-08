const Ninja = require('./Ninja');

class Sensei extends Ninja {
    constructor( name, health = 200, speed = 10, strength =10){
        super(name, health)
        this.name =name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
        this.wisdom= 10;
    }
    speakWisdom(){
        super.drinkSake();
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"