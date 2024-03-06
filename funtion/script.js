//what is the funtion 
//function declaretion
//type one
function sayMyName(){
    console.log("My Name is gogul");
    console.log("execution don");
}

sayMyName();
sayMyName();

//type two
function sayMyName(){
var name = "sanjay";
    console.log("My Name is",name);
    console.log("execution don------");
}

console.log("program done");


//adding parameters and arguments
function addTwoNumbers(num1 , num2){
    //params (num1,num2)
    const value = num1 + num2;
    console.log(value);
}
//arguments
addTwoNumbers(25 , 25);


//divisible
function isDivisible(num, diviser) {
    if (num % diviser === 0){
        return true;
    } else {
     return false;
    }
}
//getting values in aconsole
console.log(true);
const result = true;
console.log(result);

isDivisible();//true
console.log(isDivisible(5, 2));
const divresult = isDivisible(9, 3);
console.log(divresult);


//ES-6 (anonymous function)

let anon_func = function (param) {
    console,log("i'm anonymous function" , param);
};
anon_func("new param");

//arrow function
// we dont need to have any return key word insingle line 
let arrow_func = (a + b) => a + b;
console.log("function value" , arrow_func(30, 10)); //20

//IIFE (immediatly invoked function)
(function callMe(name) {
   console.log("i'm called", name);
})("immediate";)