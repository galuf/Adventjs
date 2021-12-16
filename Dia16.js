/*
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
*/

function decodeNumbers(symbols) {
  const values = { ".": 1, ",": 5, ":": 10, ";": 50, "!": 100 };
  let result = 0;
  const s = symbols.split("");
  for (let i = 0; i < symbols.length; i++) {
    if (!Object.keys(values).includes(s[i])) {
      result = NaN;
      break;
    } else {
      if (values[s[i + 1]] > values[s[i]]) {
        result += -1 * values[s[i]];
      } else {
        result += values[s[i]];
      }
    }
  }
  console.log(result);
  // ¡No olvides compartir tu solución en redes!
  return false;
}

decodeNumbers("..."); // 3
decodeNumbers(".,"); // 4 (5 - 1)
decodeNumbers(",."); // 6 (5 + 1)
decodeNumbers(",..."); // 8 (5 + 3)
decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers(".;"); // 49 (50 - 1)
decodeNumbers("..,"); // 5 (-1 + 1 + 5)
decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumbers(".;!"); // 49 (-1 -50 + 100)
decodeNumbers("!!!"); // 300
decodeNumbers(";!"); // 50
decodeNumbers(";.W"); // NaN
