function getLength(type) {
  if (type && type.length) {
      console.log(type.length)
  } else {
      console.log(0)
  }
}

// Первое решение со сложностью О(n), где n - кол-во узлов наименьшего дерева.
/*function compare(node1, node2) {
  const arr1 = [node1];
  const arr2 = [node2];

  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
      if (!arr1[i] || !arr2[i] || arr1[i].value !== arr2[i].value) {
          return false
      }
      if (arr1[i].left) arr1.push(arr1[i].left);
      if (arr1[i].right) arr1.push(arr1[i].right);
      if (arr2[i].left) arr2.push(arr2[i].left);
      if (arr2[i].right) arr2.push(arr2[i].right);
  }
  return true
}*/

// Второе решение со сложностью О(1).При создании строк неопределённые узлы теряются, но проверке это не мешает.
function compare(node1, node2) {
  return JSON.stringify(node1) === JSON.stringify(node2)
}