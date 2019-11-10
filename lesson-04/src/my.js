// т.к. это просто функция, а не метод массива, то массив будем
// просто передавать аргументом
export function map(arr, cb) {
    if (typeof cb !== "function") {
        throw new TypeError("Колбэк должен быть функцией");
    }
    const newArr = [];
    for (const item of arr) {
        // просто добавляем в массив результат вызова колбэка
        const val = cb(item);
        newArr.push(val);
    }
    return newArr;
}

export function filter(arr, cb) {
    if (typeof cb !== "function") {
        throw new TypeError("Колбэк должен быть функцией");
    }
    const newArr = [];
    for (const item of arr) {
        if (cb(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

export function forEach(arr, cb) {
    if (typeof cb !== "function") {
        throw new TypeError("Колбэк должен быть функцией");
    }
    for (let i=0; i<arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

export function some(arr, cb) {
    if (typeof cb !== "function") {
        throw new TypeError("Колбэк должен быть функцией");
    }
    for (let i=0; i<arr.length; i++) {
        // если колбэк вернул true, то дальше и перебирать нет смысла
        if (cb(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

export function reduce(arr, cb, initialValue) {
    if (typeof cb !== "function") {
        throw new TypeError("Колбэк должен быть функцией");
    }

    let start = 1;
    let acc = arr[0];

    if (typeof initialValue !== "undefined") {
        start = 0;
        acc = initialValue;
    }

    for (let i=start; i<arr.length; i++) {
        acc = cb(acc, arr[i]);
    }

    return acc;
}

// как написать map через reduce
export function mapReduce(arr, cb) {
    return arr.reduce((acc, n) => acc.push(cb(n)), []);
}

export function filterReduce(arr, cb) {
    return arr.reduce((acc, n) => {
        if (cb(n)) acc.push(n);
        return acc;
    }, []);
}
