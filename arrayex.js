'use strict';

const array1 = [ 0, 1, 2, 3, 4, 5, 6,];
console.log(array1);

array1.push(1,2);
console.log(array1);
console.log(array1.toString());
console.log(array1.toLocaleString());

const array2 = [7,8,9];
console.log(array2);

array1.concat(array2);
console.log(array1);
console.log(array1.concat(array2));
const array3 = array1.concat(array2);
console.log(array3);
console.clear();

console.log(array1);
console.log(array1.concat(1,2,3));
console.log(array1.join(',1'));
const array4 = [array1.join(',1')];
console.log(array4);
console.log(array1.slice(7,9));
console.log(array1.lastIndexOf(2));