import Cat from "./Cat";
import "./events";

const test = new Cat("test", 2);
// попробовать выполнить код
try {
    test.eat().meow().kill().kill().kill().kill().kill().kill().kill().kill().kill();
    console.log(test.livesCount);

    test.eat();
    test.eat();
    test.eat();
} catch(e) {
    // этот блок выполняется только если возникла ошибка
    alert(e);
}

console.log(typeof Cat);
console.log(test.__proto__ === Cat.prototype);

const parent = {
  eat() {
      console.log("parent eat");
  }
};
const mock = {
    _checkStatus() {
        console.log("check из mock");
        return true;
    },
    name: "mock",
};

Object.setPrototypeOf(mock, parent);

// mock.eat = Cat.prototype.eat
mock.eat = test.eat;
mock.eat();

mock.__proto__.eat();
