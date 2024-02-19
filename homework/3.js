// Базовый
// 1. 
let obj = {};
obj = new Object();
obj = Object.create(null);
obj = Object.assign({}, new Array);

// 2.
const counter = { key: 'value' };
// Не глубокое
let сounterCopy = Object.assign({}, counter);
сounterCopy = {
    ...counter
}
// Глубокое
сounterCopy = JSON.parse(JSON.stringify(counter)) // Подходит только для сериализуемых данных
/* Можно воспользоваться сторонними библиотеками или написать собственный метод */

// 3.
function makeCounter() {
    let counter = 0;

    return function() {
        return counter++;
    }
}

let makeCounter = function() {
    let counter = 0;

    return function() {
        return counter++;
    }
}

makeCounter = () => {
    let counter = 0;

    return () => counter++;
}

makeCounter = new Function('{ let counter = 0; return () => counter++}');

// Продвинутый
// 1.
function reverseStr(str) {
    return str.split('').reverse().join('');
}

// 2.
function deepEqual(obj1, obj2) {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);
  
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (let key of objKeys1) {
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      const isObjects = isObject(value1) && isObject(value2);
  
      if ((isObjects && !deepEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  }
  
function isObject(object) {
    return object !== null && typeof object === "object";
}