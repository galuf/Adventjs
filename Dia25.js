function canMouseEat(direction, game) {
  let x, y;
  game.forEach((e, indice) => {
    if (e.includes("m")) {
      x = indice;
      y = e.indexOf("m");
    }
  });
  if (direction === "up") {
    if (game[x - 1]) {
      if (game[x - 1][y] === "*") return true;
    }
  }
  if (direction === "down") {
    if (game[x + 1]) {
      if (game[x + 1][y] === "*") return true;
    }
  }
  if (direction === "left") {
    if (game[x][y - 1] === "*") return true;
  }
  if (direction === "right") {
    if (game[x][y + 1] === "*") return true;
  }
  return false;
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false
