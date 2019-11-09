import fn from "./module3";

export const fn1 = function() {
   console.log("функция f1");
   fn();
};

export const user = {
  name: "John",
  age: 15,
};

let a = 100;

fn1();
