// E26

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3]));
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile([1, 2, 3]));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.splice(1, list.length));
}
console.log(sumRecursion([1, 2, 3]));

function sumTheSimpleWay(list) {
  return _.reduce(list, function sum(a, b) {
    return a + b;
  });
}
console.log(sumTheSimpleWay([1, 2, 3]));

