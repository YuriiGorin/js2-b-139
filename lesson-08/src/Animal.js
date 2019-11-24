class Animal {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }

    eat() {
        console.log(`${this.name} пытается поесть`);
    }

    sleep() {
        console.log(`${this.name} пытается поспать`);
    }
}

export default Animal;
