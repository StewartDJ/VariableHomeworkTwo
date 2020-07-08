
//create two variables that have numbers as their values

var itsAMe = 2; 
var mario = 5;

// Create a function that returns the sum of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.
function addTheStuff() {
    return itsAMe + mario;
    }
    var answer = addTheStuff();
    console.log(answer);   
// Create a function that returns the difference of two numbers that are arguments. Then console.log the function with the variables from step two as your two arguments.
function subtractTheStuff() {
    return itsAMe - mario;
    }
    var answer = subtractTheStuff();
    console.log(answer);   


//Create a function that returns two arguments multiplied by each other. Then console.log the function with the variables from step two as your two arguments.
function multiplyThatThing() {
    return itsAMe * mario;
    }
    var answer = multiplyThatThing();
    console.log(answer);   

//Create a function that returns divides the first argument by the second argument and returns the new value. Then console.log the function with the variables from step two as your two arguments.
function divideThatStuff() {
    return itsAMe / mario;
    }
    var answer = divideThatStuff();
    console.log(answer);   

//Declare three new variables and assign arrays as their values.

var beevis = [10, 20, 30];
var asWellAs = [4, 5, 6];
var butthead = [700, 800, 900];

// Create a function that takes an array as the first argument, and a second value as the second argument. The function should return a new array with the second argument pushed to the end of that array. Console.log this function with an array from step seven, and a value of your choosing for the second argument.
beevis.push(3);
console.log(beevis);

// Create a function that takes an array as an argument and uses shift on that array and returns the new array. Console.log this function with an array from step seven as an argument.
butthead.shift();
console.log(butthead);


//^ Repeat step 9, but this time using the pop method inside your function rather than the shift method
asWellAs.pop();
console.log(asWellAs);



