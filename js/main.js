function saludar(){
    alert ("Bienvenida a la tercer preentrega");
}
saludar();

function calcularTotal(precio,cantidad){
    return precio * cantidad;
}

const precio = 18500;
const cantidad = parseInt(prompt("Ingrese la cantidad"));

const stock = 10;

const validarStock = (cantidad, stock) => cantidad <= stock;

if (isNaN(cantidad)){
    alert("Debe ingresar un numero valido");
} else if (validarStock(cantidad, stock)) {
    alert("Hay stock disponible");

    const total = calcularTotal(precio, cantidad);

    console.log(total);
    alert("El total es $" + total);

}else{
    alert("No hay suficiente stock");
}








