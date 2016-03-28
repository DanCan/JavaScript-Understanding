// #1
// Show the power of closures
console.log("Build 1");

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

// #2
// Tells you only what the value is in memory of its parent context right now (when we execute the function),
// not at the time we created the function.

//Can I say that '3' is our building block of this function? That, in fact, this context is like a prototype?
console.log("Build 2");

function buildFuncitons(){

    var arr = [];

    for(var i = 0; i < 3; ++i){

        arr.push(
            function(){
                console.log(i);
             }
        )
    }

    return arr;
}

var fs = buildFuncitons();

fs[0](); // outputs: 3
fs[1](); // outputs: 3
fs[2](); // outputs: 3

// #3 ES6
console.log("Build 3");

function buildFuncitons2(){

    var arr = [];

    for(var i = 0; i < 3; ++i){
        let j = i;
        arr.push(
            function(){
                console.log(j);
            }
        )
    }

    return arr;
}

var fs2 = buildFuncitons2();

fs2[0](); // outputs: 0
fs2[1](); // outputs: 1
fs2[2](); // outputs: 2


// #4 ES5

console.log("Build 4");

function buildFuncitons3(){

    var arr = [];

    for(var i = 0; i < 3; ++i){
        arr.push(
            (   //pushes the result of this function, and when it runs
                // it results in a function.
                function(j) {
                    return function() {
                        console.log(j);
                    }
                }
            (i))
        )
    }

    return arr;
}

var fs3 = buildFuncitons3();

fs3[0](); // outputs: 0
fs3[1](); // outputs: 1
fs3[2](); // outputs: 2

// #5 Simple but better example of Usage
function makeGreeting(language){

    return function (firstname, lastname){

        if(language === 'en'){
            console.log('Hello', firstname, lastname);
        }

        if(language === 'es'){
            console.log('Hola', firstname, lastname);
        }
    }

}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Dan', 'Can');
greetSpanish('Dan', 'Can');