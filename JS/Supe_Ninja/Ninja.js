class Ninja {
    constructor (name, healthValue) {
        this.name = name;
        this.health = healthValue;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name)
    }
    showStats(){
        console.log(
            `Name: ${this.name}`,
            `Health: ${this.health}`,
            `Speed: ${this.speed}`,
            `Strenght: ${this.strength}`
        )
    }
    drinkSake(){
        this.health += 10;
    }
}

module.exports = Ninja;

// const ninja1 = new ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();