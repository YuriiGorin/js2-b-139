export const numbers = [10, 20, 30, 14, -2, 4];
export const names = ["John", "Samantha", "Mary", "Garfield"];
export const students = [
    { name: "John", sex: "m", age: 17 },
    { name: "Samantha", sex: "f", age: 19 },
    { name: "Mary", sex: "f", age: 20 },
    { name: "Garfield", sex: "m", age: 13 },
];

// средний возраст студентов
const sum = (acc, { age }) => acc + age;
const avg = students.reduce(sum, 0) / students.length;
console.log(avg);


students.forEach(({ name }) => console.log(name));


students.map(({ name }) => name.toUpperCase());
