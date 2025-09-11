class MathUtils{
    static computeFactorial(n){
if (n<0) throw new Error("Number must be a non-negative");
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *=i;

}
return fact;
} } 