import Animal from "./Animal";
const countSym = Symbol();

class Cat extends Animal {
    constructor(...args) {
        // super() - вызов родительского конструктора
        super(...args);
        this[countSym] = 9;
    }

    // свойство livesCount только для чтения
    get livesCount() {
        return this[countSym];
    }

    get isAlive() {
        return this[countSym] > 0;
    }

    meow() {
        this._checkStatus();
        console.log(`${this.name} говорит ммяяяяууу!`);
        return this;
    }

    kill() {
        this._checkStatus("Что мертво умереть не может");
        this[countSym]--;
        return this;
    }

    eat() {
        this._checkStatus();
        return super.eat();
    }

    sleep() {
        this._checkStatus();
        return super.sleep();
    }

    _checkStatus(msg = "Некромантия запрещена") {
        if (!this.isAlive) {
            throw new Error(msg);
        }
    }
}

export default Cat;
