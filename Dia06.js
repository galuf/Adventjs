const resultado = 10;
let lista = [3, 5, 7, 2];

function sumPairs(numbers, result) {
  let pair = [];
  for (const [index, value] of numbers.entries()) {
    let subLista = numbers.slice(index + 1);
    if (subLista.includes(result - value)) {
      pair.push(value);
      pair.push(result - value);
      break;
    }
  }

  if (pair.length) {
    return pair;
  } else {
    return null;
  }
}
console.log(sumPairs([3, 5, 7, 2], 10));
console.log(sumPairs([-3, -2, 7, -5], 10));
console.log(sumPairs([2, 2, 3, 1], 4));
console.log(sumPairs([6, 7, 1, 2], 8));
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
