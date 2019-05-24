*/There are three types of functions 

- Named Functions (Executed when called by name) 
- Anonymous functions (Once they are triggered by a spcific event) 
- Immediately invoked function expressions (Run the moment the browser encounters them) 

why are anonymous functions useful? 

Not having to set a name for an anonymous function is just a convenience thing since in most cases 
the name of the function doesn’t really matter. Most of the time anonymous functions and named 
functions will both do any job perfectly well.

*/

//Regular function, called by name: 

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

function findBiggestFraction(){
  a>b ? console.log("a: ",a) : console.log("b: ",b);
}

var a = 3/4;
var b = 5/7;

findBiggestFraction();


  
