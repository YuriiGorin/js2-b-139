import Cat from "./Cat";

const test = new Cat("test", 2);
test.eat();
test.meow();

console.log(typeof Cat);
console.log(test.__proto__ === Cat.prototype);
