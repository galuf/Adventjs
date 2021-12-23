function repetidos(cad) {
  let array = cad.split("");
  let set = new Set(array);
  return array.length == Array.from(set).length ? false : true;
}

function canReconfigure(from, to) {
  let flag = true;
  let reg = {};
  if (from.length !== to.length && !repetidos(to)) {
    for (const [index, value] of Object.entries(from)) {
      if (!reg[value]) reg[value] = to[index];

      if (reg[value] !== to[index]) {
        flag = false;
      }
    }
  } else {
    flag = false;
  }
  console.log(flag);
  return flag;
}

const from = "BAL";
const to = "LIB";
canReconfigure(from, to); // true
/* la transformación sería así:
B -> L
A -> I
L -> B 
*/

const from1 = "CON";
const to1 = "JUU";
canReconfigure(from1, to1); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from2 = "MMM";
const to2 = "MID";
canReconfigure(from2, to2); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from3 = "AA";
const to3 = "MID";
canReconfigure(from3, to3); // false -> no tiene la misma longitud
