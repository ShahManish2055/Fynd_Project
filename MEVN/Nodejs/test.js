// One module calling the other 
// const http=require('http');
// require('./taskserver1');
// http.createServer(function(req,res){

//     res.writeHead(200,{'content-Type':'text/html'});
//     res.write("taskserver1");

// res.end();
// }).listen(8803);
// '''''''''''''''''''''''''''''''''



// Performing Closure
function outerFunction(outerParam) {
    // Define a variable within the outer function
    const outerVar = "Hello, ";
    // Define the inner function within the outer function
    function innerFunction(innerParam) {
      // Use the outer variable within the inner function
      console.log(outerVar + innerParam + outerParam);
    }
    // Return the inner function
    return innerFunction;
  }
  // Call the outer function with a parameter
  const myClosure = outerFunction("world!");
  myClosure("How are you today?"); 
  
// Accessing the FilesStream module to read contents of a text file
// var dt=require('./ownModule');
// http.createServer(function(req,res){
  
//     res.writeHead(200,{'content-Type':'text/html'});
//     res.write("The date and time are currently:" + dt.getCurrentDate());

// res.end();
// }).listen(7800);

// compound interest
const calculateCompoundInterest = require('./compoundInterest');

const principal = 1000;
const interestRate = 0.05;
const time = 10;
const compoundsPerYear = 12;

const compoundInterest = calculateCompoundInterest(principal, interestRate, time, compoundsPerYear);

console.log(`The compound interest is ${compoundInterest}`);
