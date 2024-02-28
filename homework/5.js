//Базовый
//1.
/*
  Виды сортировок n^2: Вставкой, выбором, пузырьковая, шейкерная, расчёской;
  Виды сортировок n*log(n): Быстрая(при неудачном выборе опорного эллемента Big O увеличивается до n^2), слиянием.
*/

//2
let Person = {
  name: 'Иван'
};
Person = Object.create(null, { name: { value: 'Иван' } });
let AnotherPerson = {
  name: 'Николай',
  __proto__: Person
};
//Вместо __proto__ можем использовать Object.setPrototypeOf(AnotherPerson, Person) или создать объект через Object.create(Person)
Person.logInfo = function() {
  console.log(`Меня зовут ${this.name}`)
};

//3.
class SuperPerson {
  constructor(...arg) {
    arg.forEach(value => {
        this[value] = value;
    })
  }

  set name(value) {
    this.name = value;
  }

  get name() {
    return this.name;
  }
}

class HyperPerson extends SuperPerson {
  constructor(...arg) {
    super(...arg)
  }
}

//Продвинутый
//1.
function firstSum(arr, total) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          if (j === i) {
              continue;
          }
          if (arr[i] + arr[j] === total) {
              return [ arr[i], arr[j] ]
          }
      }
  }
  return []
}

//2.
/*
  В худшем случае алгоритм отрабатывает n^2 операций, т.к. мы имеем дело с вложенными циклами.
  Если бы массив приходил в отсортированном виде, я бы использовал метод "двух указатей", что позволило бы
  улучшить время выполнения до O(n). Реализацию метода оставил ниже.

  function firstSum(arr, total) {
    let i = 0;
    let j = arr.length - 1;
    
    while (i !== j) {
        const currSum = arr[i] + arr[j];
        
        if (currSum === total) {
            return [ arr[i], arr[j] ]
        }
        if (currSum < total) {
            i++;
        } else {
            j--;
        }
    }
    return []
  }
*/
