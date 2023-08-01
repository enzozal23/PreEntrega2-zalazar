const CBU = "00001324567743";
const ALIAS = "serv.ventas.mp";
const salir = 4;
const carrito = [];
const talleColor = [];
let total = 0;
let numComprobante;
const Productos = [
  {
    id: 1,
    tipo: "remera para sublimar ",
    precio: 2500,
    categoria: "remeras",
  },
  {
    id: 2,
    tipo: "remera oversize ",
    precio: 3500,
    categoria: "remeras",
  },
  {
    id: 3,
    tipo: "remera oversize batik ",
    precio: 4900,
    categoria: "remeras",
  },

  {
    id: 4,
    tipo: "buso para sublimar",
    precio: 6000,
    categoria: "busos",
  },
  {
    id: 5,
    tipo: "buso diseño variados",
    precio: 6000,
    categoria: "busos",
  },
  {
    id: 6,
    tipo: "campera para estampar ",
    precio: 7500,
    categoria: "camperas",
  },
  {
    id: 7,
    tipo: "campera con diseño varios ",
    precio: 6340,
    categoria: "camperas",
  },
];

const colores = ["negro", "gris", "blanco"];

const talles = ["s", "m", "l", "xl"];
function financiación(tarjeta) {
  if (tarjeta === 1) {
    let cuotas = parseInt(prompt("Con visa  '3' ,'12' o '18' "));
    let montoFinanciado = 0;
    switch (cuotas) {
      case 3:
        montoFinanciado = total / 3;
        alert(
          "abonó con visa ahora " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 12:
        montoFinanciado = total / 12;
        alert(
          "abonó con visa ahora " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 18:
        montoFinanciado = total / 18;
        alert(
          "abonó con visa ahora " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      default:
        alert("disculpe ,no trabajamos con esa financiación");
        break;
    }
  }
  if (tarjeta === 2) {
    let cuotas = parseInt(prompt("Con americanxpress '3' , '6' o '9' "));
    let montoFinanciado = 0;
    switch (cuotas) {
      case 3:
        montoFinanciado = total / 3;
        alert(
          "abonó con americanxpress " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 6:
        montoFinanciado = total / 6;
        alert(
          "abonó con americanxpress " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      case 9:
        montoFinanciado = total / 9;
        alert(
          "abonó con americanxpress " +
            cuotas +
            " cuotas de $ " +
            montoFinanciado.toFixed(2) +
            " por mes"
        );
        break;
      default:
        alert("disculpe ,no trabajamos con esa financiación");
    }
  } else {
    alert("disculpe ,no trabajamos con esta tarjeta");
  }
}
function agregarACarrito(producto) {
  carrito.push(producto);
}
function agregarInfo(producto) {
  talleColor.push(producto);
}
const mostrarCarrito = () => {
  numComprobante = Math.round(Math.random() * 10000000 + 100000);
  let msjCarrito = "Carrito de compras: \n";
  carrito.forEach((producto) => {
    msjCarrito += `- ${producto.tipo}  ${producto.precio}c/u   X ${cantidad} \n`;
    msjCarrito += `talle: ${talleColor[0]} color : ${talleColor[1]}\n \n`;
    msjCarrito += `total ------------------------------$ ${
      producto.precio * cantidad
    } \n`;
    total = producto.precio * cantidad;
  });

  alert(msjCarrito);
};

const verRemeras = () => {
  let mensaje = "Lista de producto: \n";
  Productos.forEach((el) => {
    if (el.categoria === "remeras") {
      mensaje += `${el.id}-${el.tipo}  $${el.precio} \n`;
    }
  });

  const opcion = parseInt(prompt(mensaje)); // id del objeto a guardar en el carrito esto no se porque me itera el numero de veces del id

  const productoElegido = Productos.find((producto) => producto.id === opcion);
  agregarACarrito(productoElegido);
};

const verBusos = () => {
  let mensaje = "lista de productos : \n";

  Productos.forEach((el) => {
    if (el.categoria === "busos") {
      mensaje += `${el.id}-${el.tipo} $${el.precio} \n`;
    } // crea la lista de productos recorriendo el array filtrado
  });
  const opcionElegida = parseInt(prompt(mensaje));

  const productoElegido = Productos.find(
    (producto) => producto.id === opcionElegida
  );
  agregarACarrito(productoElegido);
};

const verCamperas = () => {
  let mensaje = "Lista de producto: \n";
  Productos.forEach((el) => {
    if (el.categoria === "camperas") {
      mensaje += `${el.id}-${el.tipo}  $${el.precio} \n`;
    }
  });

  const opcionElegida = parseInt(prompt(mensaje)); // id del objeto a guardar en el carrito

  const productoElegido = Productos.find(
    (producto) => producto.id === opcionElegida
  );
  agregarACarrito(productoElegido);
};

const elegirTalle = () => {
  let talle = prompt("Elija un talle: s, m, l, xl");
  if (
    talle.toLowerCase() == "s" ||
    talle.toLowerCase() == "l" ||
    talle.toLowerCase() == "m" ||
    talle.toLowerCase() == "xl"
  ) {
    const talleElegido = talles.find((el) => el === talle);
    agregarInfo(talleElegido);
  } else {
    alert("ese talle no esta disponible por el momento");
    elegirTalle();
  }
};

const elegirColor = () => {
  let color = prompt("Elija un color: negro, blanco, gris");
  if (
    color.toLowerCase() == "negro" ||
    color.toLowerCase() == "blanco" ||
    color.toLowerCase() == "gris"
  ) {
    const colorElegido = colores.find((el) => el === color);
    agregarInfo(colorElegido);
  } else {
    alert("color no disponible por el momento");
    elegirColor();
  }
};

alert("MALAGA 'venta por mayor de ropa'");
const nombre = prompt("Ingrese su nombre completo porfavor !");

const verProductos = () => {
  let opcion = parseInt(
    prompt(
      "Elige un tipo de prenda: \n 1-remeras \n 2-busos \n 3-camperas \n 4-salir"
    )
  );

  if (opcion === salir) {
    alert("");
  } else {
    switch (opcion) {
      case 1:
        verRemeras();
        break;
      case 2:
        verBusos();
        break;
      case 3:
        verCamperas();
        break;

      default:
        opcion = parseInt(
          prompt(
            "Elige un tipo de prenda: \n 1-remeras \n 2-busos \n 3-camperas \n 4-salir"
          )
        );
        alert("Opción inválida");
    }
  }
};
verProductos();
const cantidad = parseInt(prompt(`ingrese la catidad `));

elegirTalle();
elegirColor();
mostrarCarrito();
console.log(carrito);

const metDePago = prompt("pago en efectivo/transferencia o con tarjeta?");
switch (metDePago) {
  case "tarjeta":
    const respuestaUsuario = prompt(" [1]visa  [2] americanexpress");
    financiación(respuestaUsuario);
    break;
  case "transferencia":
    alert(
      `Muchas gracias ${nombre}! \n el monto es $ ${total}  \n CBU: ${CBU} ALIAS: ${ALIAS}`
    );
    break;
  case "efectivo":
    alert(
      `Muchas gracias ${nombre} abonar por rapipago o pagofacil \n ${total}\n num de comprobante: ${numComprobante}`
    );
    break;
  default:
    alert("respuesta invalida, intente nuevamente");
    break;
}
