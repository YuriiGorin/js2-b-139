import * as test from "./example";
// именованный импорт (т.е. при импорте указано, что именно загрузить из модуля)
import { SOMETHING_ELSE as hello } from "./module2";
// импорт по умолчанию просто загружает в переменную то, что в модуле помечено как export default
import MySuperFunction from "./module3";
import Fn2 from "./module3";

console.log(test);
alert(hello);

// вызываем экспортированную функцию из модуля
test.fn1();

MySuperFunction();
Fn2();
