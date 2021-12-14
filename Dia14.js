function missingReindeer(ids) {
  let maximo = Math.max(...ids);
  let res = -1;
  for (let i = 0; i <= maximo; i++) {
    if (!ids.includes(i)) {
      res = i;
      break;
    }
  }
  console.log(res == -1 ? maximo + 1 : res);
  return res == -1 ? maximo + 1 : res;
}

missingReindeer([1]); // -> 0
missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
