console.log("task-1.js");

const user = {};

user.userName = "dmytro";
user.age = 45;
user.showUserName = function () {
  return this.userName;
};
user.updateAge = function () {
  return (this.age += 1);
};

console.log(user.updateAge());
console.log(user.updateAge());
console.log(user.updateAge());
console.log(user.updateAge());
console.log(user.updateAge());
console.log(user.updateAge());
console.log(user.updateAge());

console.log(user.showUserName());
