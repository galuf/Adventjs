function shouldBuyFidelity(times) {
  let normal = 12 * times;
  let fidelity = 250;
  for (let i = 1; i <= times; i++) {
    fidelity += 12 * Math.pow(0.75, i);
  }
  if (normal < fidelity) return false;
  return true;
}

shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
