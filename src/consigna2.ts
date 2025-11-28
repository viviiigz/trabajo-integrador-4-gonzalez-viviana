// bsado en la funcion de sumar, material

function updateStock(currentStock: number, quantityChange: number): number {
    return currentStock + quantityChange;
}

// para la prueba de la función
const stockActual = 100;
const cantidadVenta = -20;

const stockFinal = updateStock(stockActual, cantidadVenta);

console.log(`Stock actualizado: ${stockFinal}`);