const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

const almacen2 = {};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

let productosArray = [];

function productos(store) {
  if (store === Object(store)) {
    for (const element in store) {
      productos(store[element]);
    }
  } else {
    productosArray.push(store);
  }
}

function contains(store, product) {
  productosArray = [];
  productos(store);
  console.log(productosArray);
  return productosArray.includes(product);
}

console.log(contains(almacen, "camiseta"));
console.log(contains(otroAlmacen, "gameboy"));
console.log(contains(almacen2, ""));
