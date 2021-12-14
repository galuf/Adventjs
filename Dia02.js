const carta = "bici coche balón _playstation bici coche peluche";
const array = carta.split(" ");
const validos = array.filter((e) => e !== "" && e[0] !== "_");

const res = {};

for (elemnt of validos) {
  res[elemnt] ? res[elemnt]++ : (res[elemnt] = 1);
}

console.log(res);
