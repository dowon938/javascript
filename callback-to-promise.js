"use strict";
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "dream" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("not found"));
        }
      }, 1000);
    });
  }
}
const userStorage = new UserStorage();
const id = prompt("input your id");
const password = prompt("input your password");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name},${user.role} login success!!`))
  .catch(console.log);

async function lognIn() {
  const loginUser = await loginUser(id, password);
  const getRoles = await getRoles(id);
}
