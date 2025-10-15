
const readline = require('readline');

const rl=readline.createInterface({

input:process.stdin,
output:process.stdout });



function mainMenu(){

console.log("Eunna's services to bb lester <3");
console.log("1. BB time");
console.log("2. Buko juice");
console.log("3. Toyi");
console.log("4. Exit");

rl.question("Choose what u want", (choice) => {
    if (choice ==="1"){
kissKiss();
    } else if(choice === "2"){
       buKo();
    }else if (choice ==="3"){
        computeFactorial();

    }else if (choice ==="4"){
        console.log("Nagawasan na hawa na");
        rl.close();
    }else{
        console.log("bilat nimo");
        backtoMenu();
    }


    }); }


    function computeFactorial(){

        rl.question("butang og number", (num)=> {
 let nom = parseInt (num);
 if(isNaN (nom)  || nom<0){
console.log("lahi na number");
}else {
    let x = 1;
    for(let i =1; i<=nom;i++){
        fact*=i;
    }console.log(fact);
}
        
        }
    
    
    )
    }
mainMenu();























