//encapsulation =  you declare a private database / cannot easily manipulated  
// inheritance 
//composition = mixture of methods from different classes 

class Hero{
    #health;

    constructor(name, health, attack) {

        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];
    

    }
getHealth(){
    return this.#health;
}

getAttack(){
    console.log(this.attack);

}
 getName(){
    console.log(this.name);
 }


//inheritance example 
    getStats()  {
        console.log("\n");
        console.log("Name:" + this.name);
        console.log("Health:" + this.#health);
        console.log("Attack:" + this.attack);
    }


addItem(item){
    this.items.push(item);

}
//return: ibalik ang actual nga value 
totalAttack(){
    return this.attack + this.items.reduce((sum, item) => sum + item.bonusAttack, 0);
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

class Item{
constructor(name, bonusAttack) {
    this.name = name;
    this.bonusAttack = bonusAttack; 
}
}

const sword = new Item("Sword", 5);
const staff = new Item("Staff", 3); 



const BlackPanther = new Warrior("Black Panther", 100, 50);
//BlackPanther.useAbility();
//BlackPanther.getStats();    

BlackPanther.getName(); 
BlackPanther.getAttack();



BlackPanther.addItem(sword);
console.log(BlackPanther.totalAttack());
BlackPanther.addItem(sword);
console.log(BlackPanther.totalAttack());


const DoctorStrange = new Mage("Doctor Strange", 80, 8, 50);
//DoctorStrange.useAbility();
//DoctorStrange.getStats();


//abstraction example; ginagamit for security purposes
function performAbility(hero){
console.log("\n");
    hero.useAbility();

}
performAbility(BlackPanther);
performAbility(DoctorStrange);

