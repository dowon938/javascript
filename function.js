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