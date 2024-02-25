//Базовый
//1.
/* Массивы в js являются неправильными, т.к. наследуются от object и потому имеют ряд не типичных для массивов свойств. Они объединяют в себе 
свойства других структур данных. Таких, как связные списки, т.к. при увеличении размера массива не выделяется новая область памяти для всего массива. 
А также хеш-таблиц, т.к. данные в js массиве хранятся как набор пар ключ(целочисленный) - значение, что напоминает хеш-таблицы. */

//2.
const obj = { item: 'some value' }

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.call(obj);
logger.apply(obj);

logger = logger.bind(obj);
logger();

//Продвинутый
//1.
function myBind(func, context) {
  return function(...arg) {
      return func.apply(context, arg)
  }
}