function saludar() {
    alert ("Bienvenida a la tercera preentrega");
}

function calcularTotal(precio,cantidad) {
    return precio * cantidad;
}

const validarStock = (cantidad, stock) => cantidad <= stock;


const precio = 18500;
const stock = 10;

let cantidad;

saludar();

do {
    cantidad = parseInt(prompt("Ingrese la cantidad"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert ("Debe ingresar un numero valido");
    } else if (!validarStock(cantidad, stock)) {
        alert("No hay suficiente stock.Intene nuevamente.");
    }
  

} while (
    isNaN(cantidad) ||
    cantidad <= 0 ||
    !validarStock(cantidad, stock)
);

const total = calcularTotal(precio, cantidad);

alert("Hay stock disponible");
alert("El total es $" + total);

console.log(total);








    








