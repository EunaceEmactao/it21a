//encapsulation =  you declare a private database / cannot easily manipulated  

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
const hero = new Hero("Black Panther", 100, 50);


console.log(hero.getHealth());