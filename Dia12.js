function getMinJump(obstacles) {
  let salto = 2;
  while (obstacles.some((e) => e % salto == 0)) {
    salto++;
  }
  console.log(salto);
}

const obstacles = [5, 3, 6, 7, 9];
getMinJump(obstacles); // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles2 = [2, 4, 6, 8, 10];
getMinJump(obstacles2); // -> 7
