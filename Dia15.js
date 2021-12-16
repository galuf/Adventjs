function checkSledJump(heights) {
  let cad = "";
  let match = /^s+mb+$/;
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] == Math.max(...heights)) cad += "m";
    cad +=
      heights[i] < heights[i + 1]
        ? "s"
        : heights[i] > heights[i + 1]
        ? "b"
        : "e";
  }
  //return match.test(cad);
  console.log(match.test(cad));
}

checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
checkSledJump([1, 2, 3]); // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
