/*There are three types of functions 

- Named Functions (Executed when called by name) 
- Anonymous functions (Triggered by a specific event) 
- Immediately invoked function expressions (Run the moment the browser encounters them) 

Why are Anonymous Functions useful? 

Not having to set a name for an anonymous function is just a convenience thing since in most cases 
the name of the function doesn’t really matter. Most of the time anonymous functions and named 
functions will both do any job perfectly well.

For me function expressions express the true nature of functions,  they are objects that can be passed around 
and stored in variables. It also forces my code to be better organized because a function expression is not hoisted; 
so I must define the function before I use it.

https://www.youtube.com/watch?v=gjLn95skIKE
*/

//Regular function, called by name

function multiply(){
  var result = 3 * 4;
  console.log("3 multiplied by 4 is", result);
}

multiply();


//Anonymous function stored in variable, invoked by calling the vaiable as a function.
var divided = function() {
  var result = 3 / 4;
  console.log("3 divided by 4 is ", result); 
}

divide();

//immediately invoked function expressions, runs as soon as the browser finds it.
(function(){
  var result = 12 / 0.75;
  console.log("12 divided by 0.75 is ", result);
}())



function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");

  
/* 

Immediately invoked function expressions, runs the function when it's encountered. 
value is going to be stored inside theBiggest variable.

What are the benefits of this immediately invoked function expression?
It runs immediately where it's located in the code and produces direct output.

That means on the first run, it is uneffected by code which appears further down in the script.
These functions are great for quickly populating a variable or argument in a larger function or a property in an object. 
These are often hooked to event listeners. 
*/

var firstFraction = 7/9;
var secondFraction = 13/25;
var theBiggest = (function(a,b){
 a>b ? result = ["a",a] : result = ["b",b]; 
})(firstFraction,secondFraction)

console.log(theBiggest);


/*
ES6 Two types of variables 
const - constant
Can't be changed once defined  

let - 
block scope variable
Smaller scope than var

const MYCONSTANT = 5; 
*/

// Difference between let and var.
// The value of var will change inside the nested if statement permenantly. 

function logScope(){
  let localVar = 2; 
  
  if (localVar){
     let localVar = "I'm different!";
     console.log("nested localVar:", localVar);
  }
 console.log("logScope localVar:", localVar); 
}

// output nested localVar: I'm different!
// logScope localVar: 2



function logScope(){
  var localVar = 2; 
  
  if (localVar){
     var localVar = "I'm different!";
     console.log("nested localVar:", localVar);
  }
 console.log("logScope localVar:", localVar); 
}

// output nested localVar: I'm different!
// logScope localVar: I'm different!


