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
