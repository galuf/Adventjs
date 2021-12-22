function canCarry(capacity, trip) {
  let llevando = 0;
  let res = [];
  let flag = false;
  trip.forEach((e) => {
    res.push([e[1], e[0]]);
    res.push([e[2], e[0] * -1]);
  });
  res.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < res.length; i += 1) {
    llevando += res[i][1];
    if (llevando > capacity && res[i][0] !== (res[i + 1] && res[i + 1][0])) {
      flag = false;
      break;
    } else {
      flag = true;
    }
  }
  console.log(flag);
  return flag;
}
canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]); // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [
  [1, 1, 5],
  [2, 2, 10],
]); // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]); // true -> nunca supera el máximo de capacidad
canCarry(4, [
  [2, 3, 8],
  [2, 5, 7],
]); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]); // false -> no podría ni con el primer viaje
canCarry(2, [
  [1, 2, 4],
  [2, 3, 8],
]); // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
