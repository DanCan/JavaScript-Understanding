//Show the power of closures

function greet(whattosay){
    //Function returning function
    return function(name){
        console.log(whattosay+ ' ' + name);
    }

}

greet('Hi')('Tony');

//Closure;
var sayHi = greet('Hi'); //After creating this Execution Context and popping back to global.
sayHi('Dan');   //'Hi' is still in memory in the outer lexical environment.

//Any function created inside other functions will have references to what is in memory space.
// The Execution context is 'closed in' its outer variables. The variables it would normally have
// reference to anyways, even thought the execution context is gone.