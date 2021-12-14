function wrapGifts(gifts) {
  if (gifts.length == 0) {
    return [];
  } else {
    let n = gifts[0].length;
    let cadena = "*".repeat(n + 2) + "\n";
    for (const e of gifts) {
      cadena += `*${e}*\n`;
    }
    cadena += "*".repeat(n + 2);
    return cadena.split("\n");
  }
}

wrapGifts(["📷", "⚽️"]);
wrapGifts(["🏈🎸", "🎮🧸"]);
wrapGifts(["📷"]);
