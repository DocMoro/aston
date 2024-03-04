//Базовый
//№1
console.log('1'); //1
setTimeout(() => console.log('2'), 1); //6
let promiseNew = new Promise((resolve) => {
  console.log('3'); 
  resolve();
}); //2
promiseNew.then(() => console.log('4')); //4
setTimeout(() => console.log('5')); //5
console.log('6'); //3
// В консоле 1, 3, 6, 4, 5, 2

//№2
let promiseTree = new Promise((resolve, reject) => {
  resolve("a"); //Последующий код игнорируется
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3");
});
// Промисс перейдёт в fulfilled со значение 'a', в консоле будет пусто

//№3
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a"); //'a'
});
promiseTwo
  .then((res) => {
    return res + "b"; //'ab'
  })
  .then((res) => {
    return res + "с"; //'abc'
  })
  .finally((res) => {
    return res + "!!!!!!!"; //Не влияет на цепочку
  })
  .catch((res) => {
    return res + "d"; //Никакой ошибки не было, не отрабатывает
  })
  .then((res) => {
    console.log(res); //Выведет в консоль 'abc'
  });

//№4
function doSmth() {
  return Promise.resolve("123");
}
doSmth() // Вернули успешный промис с значением '123'
  .then(function (a) {
    console.log("1", a); // '1', '123'
    return a;
  })
  .then(function (b) {
    console.log("2", b); // '2', '123'

    return Promise.reject("321"); //Вернули ошибку с значением '321'
  })
  .catch(function (err) {
    console.log("3", err); // '3', '321'
  })
  .then(function (c) {
    console.log("4", c); // catch нам ничего не вернул, будет '4', undefined
    return c;
  });

//№5
console.log("1"); //1
setTimeout(function () {
  console.log("2");
}, 0); //4
Promise.resolve().then(() => console.log("3")); //3
console.log("4"); //2
// В консоле 1, 4, 3, 2

//Продвинутый
/*
Сначала я написал такой вариант, но потом подумал, что забить очередь макрозадач может быть плохой идеей.
В таком случае пока функция не закончит работу, новые макрозадачи будут ждать, что может привести к зависанию всего приложения.
Кроме того таким образом можно переполнить очередь.(Я в этих утверждениях не уверен, хочется получить комментарий на счёт данной реализации)
function displayIndexesWithDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
          console.log(i)
      }, i * 3000)
  }
}
*/

function setDelay(ms) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve()
      }, ms)
  });
}

function displayIndexesWithDelay(arr) {
  if (arr.length < 1) {
      return
  }
  let i = 0;
  function displayIndexes() {
      setDelay(3000)
          .then(() => {
              console.log(i);
              i++;
              if (i < arr.length ) {
                  displayIndexes()
              }
          });
  }
  displayIndexes()
}