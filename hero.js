//encapsulation =  you declare a private database / cannot easily manipulated  
// inheritance 

class Hero{
    #health;

    constructor(name, health, attack) {

        this.name = name;
        this.#health = health;
        this.attack = attack;
    

    }
getHealth(){
    return this.#health;
}
    
}


class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses.power Strike!`);
    }
}

class Mage extends Hero{
    constructor(name, health, attack, mana){
        super(name, health, attack);
        this.mana = mana;
    } 
useAbility(){
    console.log(`${this.name} casts Spell!`);
}
} 

const warrior = new Warrior("Black Panther", 100, 50);
warrior.useAbility();

const mage = new Mage("Doctor Strange", 80, 8, 50);
mage.useAbility();