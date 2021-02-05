"use strict";

const ellie = {
  name: "Ellie",
  age: "18",
};
const name = "ellie";
const age = "18";
const ellie2 = {
  name: name,
  age: age,
};
const ellie3 = { name, age };
console.log(ellie, ellie2, ellie3);
