'use strict';

//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//funcion name (param1, param2) { body... return; }
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in Js//

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');


//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj,b) {
    obj.name = 'b';
}
const ellie = {name: 'ellie'};
changeName(ellie,'yona');
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`)
}
showMessage('hi!');
//same code::
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('hi!');


//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg)=> console.log(arg));
}
printAll('dream', 'coding', 'ellie')


//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
        console.log(childMessage);
    }
    printAnother();
}
printMessage();

//6. Return a value
function sum(a, b) {
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic....
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function(){
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,4));

//2. Callback function using function expresstion
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
};
//anonymous function
const printYes = function() {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('love you', printYes, printNo);
randomQuiz('like you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrintArrow = () => console.log('simplePrint!');
const add = (a,b) => a+b;
console.log(add(1,3))
const simpleMultiply = (a,b) => {
    //do something more
    return a*b;
};

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

//Fun quiz time
//function calculate(command, a, b,)
//command: add, substract, divide, multiply, remainder

const calculate = (command, a, b,) => {
    switch (command) {
        case 'add':
            return a+b;
            break;
        case 'substract':
            return a-b;
            break;    
        case 'divide':
            return a/b;
            break;    
        case 'multiply':
            return a*b;
            break;    
        case 'remainder':
            return a%b;
            break;    
        default:
            console.log('wrong command');
            throw Error('unkown command');
            break;
    }
};
console.log(calculate('multiply', 6,2,));
