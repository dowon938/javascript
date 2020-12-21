'use strict';

//synchronous callback
function printImmediately(print) {
    print();
};
function csl() {
    console.log('hi');
};

//Asynchronous callback
function prinWithDelay(print,timeout) {
    setTimeout(print,timeout);
};


//Javascript is synchronous.
//Execute the code block by order after hoisting.
//hoisting: var, function declaration
// console.log('1');
// setTimeout(()=>console.log('1seconds'),1000);
// console.log('2');
// console.log('3');
// printImmediately(csl);
// prinWithDelay(csl,2000);

//callback Hell example
class UserStorage {
    loginUser(id,password,onSuccess,onError){
        // var i = 0;
        // const processing = setInterval(() => {
        //     console.log(`processing...${i}`);
        //     i=i+0.5;
        //     if (i>1.5) {
        //         clearInterval(processing);
        //     };
        // }, 500);
        setTimeout(()=>{
            if (
                (id==='ellie'&& password==='dream')||
                (id==='dream'&& password==='academy')
                ){
                onSuccess();
            } else {
                onError(new Error('not found'));
            }
        },2000);
    };
    getRoles(user, onSuccess, onError) {
        setTimeout(()=>{
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('not found'));
            }
        },1000);
    };

};
const useStor = new UserStorage();
const id = prompt('input your id');
const password = prompt('input your password');
UserStorage.loginUser(id,password,()=>{
    alert('hi');
},()=>{
    console.log('error');
});
