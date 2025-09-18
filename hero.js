//encapsulation =  you declare a private database / cannot easily manipulated  
// inheritance 
//composition = mixture of methods from different classes 

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
//inheritance example 
    getStats()  {
        console.log("\n");
        console.log("Name:" + this.name);
        console.log("Health:" + this.#health);
        console.log("Attack:" + this.attack);
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



const BlackPanther = new Warrior("Black Panther", 100, 50);
//BlackPanther.useAbility();
BlackPanther.getStats();    

const DoctorStrange = new Mage("Doctor Strange", 80, 8, 50);
//DoctorStrange.useAbility();
DoctorStrange.getStats();


//abstraction example
function performAbility(hero){
console.log("\n");
    hero.useAbility();

}
performAbility(BlackPanther);
performAbility(DoctorStrange);

