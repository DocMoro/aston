//Базовый
//1.
/*
  Виды сортировок n^2: Вставкой, выбором, пузырьковая, шейкерная, расчёской;
  Виды сортировок n*log(n): Быстрая(при неудачном выборе опорного эллемента Big O увеличивается до n^2), слиянием.
*/

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
