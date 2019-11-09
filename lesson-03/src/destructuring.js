const coords = { x: 100, y: 200, z: 300 };

// объявить переменные x и y, присвоив им значения свойств объекта coords с такими же именами
// запись z: c означает, что свойство z нужно сохранить в переменную c
// запись a = 100 означает, что если в объекте нет свойство a, то нужно присвоить переменной не undefined, а указанное значение (100)
// т.е. это значение по умолчанию
// а запись d: b = 200 означает, что нужно извлечь значение свойства d и сохранить его в переменную b, но если
// свойство d не определено, то использовать значение 200
let { x, y, z: c, a = 100, d: b = 200 } = coords;

console.log(x + y, c, a, b);

const user = {
   name: "John Doe",
   age: 22,
   address: {
       country: "USA",
       city: "Washington D.C.",
   },
};

// let { address } = user;
// console.log(address); // объект

let { city } = user.address;
console.log(city);

// объявить переменную country, присвоить ей свойство country объекта address из объекта user
let { address: { country } } = user;
console.log(country);
//  console.log(address);

delete user.address;

// объявить переменную ulitsa, в которую сохранить значение свойства street объекта address из объекта user
// если объекта address нет, то будет использован пустой объект, а если в адресе нет свойства street,
// то будет использовано значение "нет улицы"
let {address: { street: ulitsa = "нет улицы" } = {}} = user;

console.log(ulitsa);

const numbers = [5, 3, 1, 5, 0];

let [e, f, ...list] = numbers;

console.log(e + f);
console.log(list);
// объявляем переменные g и h, где g = первому элементу массива, а h = четвертому
let [g,,,h] = numbers;
console.log(g * h);

let [,,,i] = numbers;
console.log(i);

const processUser = function({ name, age } = { name: "Без имени", age: 0 }) {
    console.log(name, age);
};


processUser(user);
processUser();

/*
    el.addEventListener("click", function({ pageX, pageY }) {
        console.log(pageX + pageY);
    });

* */
