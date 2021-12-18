function countPackages(carriers, carrierID) {
  let first = carriers.filter((e) => e[0] === carrierID)[0] || [0, 0, 0];
  let suma = first[1];

  if (!(first[2].length === 0)) {
    first[2].forEach((e) => {
      suma += countPackages(carriers, e);
    });
    return suma;
  }
  return suma;
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];
//console.log(countPackages(carriers, "dapelu"));
//countPackages(carriers, "dapelu"); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

//console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15

console.log(countPackages(carriers, "dapelu")); // 9
console.log(countPackages(carriers, "midu")); // 2
console.log(countPackages(carriers, "jelowing")); // 2
console.log(countPackages(carriers2, "lolivier")); // 27
console.log(countPackages(carriers2, "camila")); // 15
console.log(countPackages(carriers2, "jesuspoleo")); // 4
console.log(countPackages(carriers2, "sergiomartinez")); // 4
console.log(countPackages(carriers2, "conchaasensio")); // 6
console.log(countPackages(carriers2, "facundocapua")); // 2
console.log(countPackages(carriers2, "faviola")); // 1
