'use strict';

const add = (a,b) => a+b;
console.log(add(1,2));

const multiply = (a,b) => a*b;

const fivefive = (operator) => {
    const result = operator(5,5);
    console.log(result);
}
fivefive(add);
fivefive(multiply);

let obj = {
    age : 24 ,
    name :'ellie'
}

obj && console.log((obj.name));


class Counter {
    constructor(runEveryThree){
        this.counter = 0;
        this.callback = runEveryThree;
    }
    increase() {
        this.counter++;
        if (this.counter%3 !==0){
            console.log(this.counter);
        } else {
            this.callback && this.callback(this.counter);
        }
    }
}

const coolcounter = new Counter(yo);
function yo(num) {
    console.log(`${num} yo!`);
}
function wow(num) {
    console.log(`${num} wow!`);
}
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();
coolcounter.increase();

const wowcounter = new Counter(wow);
wowcounter.increase();
wowcounter.increase();
wowcounter.increase();
wowcounter.increase();

