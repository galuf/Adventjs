function createXmasTree(height) {
  const base = height * 2 - 1;
  const tronco = "_".repeat((base - 1) / 2) + "#" + "_".repeat((base - 1) / 2);
  const inf = tronco + "\n" + tronco;

  let sup = "";
  for (let i = 1; i <= height; i++) {
    let asterisco = [(base - 1) / 2 - i + 2, 2 * i - 1];
    for (let j = 1; j <= base; j++) {
      if (j == asterisco[0]) {
        sup += "*".repeat(asterisco[1]);
        j += asterisco[1] - 1;
      } else {
        sup += "_";
      }
    }
    sup += "\n";
  }

  return sup + inf;
}

console.log(createXmasTree(5));
