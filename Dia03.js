const msj = [
  "bici coche (balón) bici coche peluche",
  "(muñeca) consola bici",
  "bici coche (balón bici coche",
  "peluche (bici [coche) bici coche balón",
  "(peluche {) bici",
  "() bici",
  "(muñeca) consola bici",
  "(()) bici",
  "(a() bici (a)",
];

const CorrectOrNot = (letter) => {
  let parentesis = 0;
  letter.split("").forEach((e) => {
    if (e === "(") parentesis++;
    if (e === ")") parentesis--;
  });

  if (parentesis == 0) {
    if (letter.includes("{") || letter.includes("[")) {
      return false;
    } else {
      const match = /.*\((.+)\).*/;
      const res = match.exec(letter);
      if (res) {
        const [, into] = res;
        if (!into.includes("(") && !into.includes(")")) {
          return true;
        }
      }
    }
  }
  return false;
};

//console.log(CorrectOrNot("(holas a todos csmrs {{{{{{)"));

for (m of msj) {
  console.log(CorrectOrNot(m));
}
