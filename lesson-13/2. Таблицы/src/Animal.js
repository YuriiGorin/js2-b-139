class Animal {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }

    eat() {
        console.log(`${this.name} пытается поесть`);
        return this;
    }

    sleep() {
        console.log(`${this.name} пытается поспать`);
        return this;
    }
}

export default Animal;
