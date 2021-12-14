const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

// Lista con todas la ovejas de color rojo y q devuleva las que contengan "n" y "a", SIN IMPORTAR MAYUSCULAS

const contarOvejas = (ovejas) => {
  const ovejasRed = ovejas.filter((oveja) => oveja.color === "rojo");
  return ovejasRed.filter((oveja) => {
    const { color, name } = oveja;
    const nameLower = name.toLowerCase();
    return (
      color === "rojo" && nameLower.includes("n") && nameLower.includes("a")
    );
  });
};

console.log(contarOvejas(ovejas));
