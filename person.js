class Person {
    constructor(name, age,occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName() { 
console.log(this.name);
    }

    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("-----------------------");
    }
    
    
}

const person1 = new Person("Barbie", 20,"Fashion Model");

person1.getName(); 
person1.displayInfo();






//utl simplified
/* Person
-----------
+name
+age
+occupation
-----------
+displayInfo() */