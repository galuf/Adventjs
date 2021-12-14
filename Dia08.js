const resta = (lista, num) => {
  return lista.map((e) => e - num);
};

const maxProfit = (pricesBtc) => {
  let ganancias = [];
  for (const [index, value] of Object.entries(pricesBtc)) {
    let lista = pricesBtc.slice(Number(index) + 1);
    ganancias = [...ganancias, ...resta(lista, value)];
  }
  return Math.max(...ganancias) > 0 ? Math.max(...ganancias) : -1;
};

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)
