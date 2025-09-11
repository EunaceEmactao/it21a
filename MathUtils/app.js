console.log("Factorial Application");

const readline = require('readline');

const MathUtils = require("./mathUtils");

const rl= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mainMenu(){

console.log("1. Say Hello");
console.log("2. Compute Factorial");
console.log("3. Exit");

rl.question("Enter your choice (1-3)", choice => {
if(choice === "1"){
    console.log("Hello There");
    backtoMenu();

}else if(choice === "2"){
    computeFactorial();

} else if(choice==="3"){
    console.log("Exit");
    console.log("Exiting program... Goodbye!");

    rl.close();

}else{
    console.log("Invalid choice. Please try again.");
    mainMenu();
} 
})
} 


 function computeFactorial(){
     console.log("Factorial");
    rl.question("Enter a number for factorial: ", (numStr) =>{
    let num = parseInt(numStr);

   try {
    console.log(`Factorial of ${num} is = ${MathUtils.computeFactorial(n)}`);
   } catch (err) {
       console.log(err.message);
   }



    backtoMenu(); 
});
 }

 function backtoMenu(){
    console.log("----------");
    console.log("1. Back to menu");
    console.log("2. Exit");

    rl.question("what would you like to do next (1-2)?: ", (backtoMenuChoice) =>{
        if(backtoMenuChoice === "1"){
            console.clear();
            mainMenu();
        }else if (backtoMenuChoice === "2"){
            console.log("Exiting program... Goodbye!");
            rl.close();
        }else{
            console.log("Invalid choice. Please try again.");
            backtoMenu();
        
        }
    });
 }

 mainMenu();

