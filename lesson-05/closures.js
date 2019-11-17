"use strict";
let test = 0;

const makeCounter = function() {
  let i = 0;
  // return function() {
  //   i++;
  //   return i;
  //   // return ++i;
  // };

  return () => { test++; console.log(smth); return ++i };
};


var smth = "sdfsdfsdf";

const fn = makeCounter();

fn();
fn();
console.log(fn());

const fn2 = makeCounter();
fn2();
console.log(fn2());

console.log(test);

const sum = function(n) {
    let acc = 0;
    if (typeof n !== "undefined" && !isNaN(n)) {
        acc = n;
        const fn = function(n) {
            if (typeof n !== "undefined" && !isNaN(n)) {
                acc += n;
                return fn;
            }

            return acc;
        };

        return fn;
    }

    throw new TypeError("Аргумент должен быть числом");
};


console.log(sum(5)(2)(3)());

const coords = { x: 100, y: 150 };
delete coords.z;
