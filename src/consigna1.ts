// usamos string para texto y number para números 
let productName: string = "Notebook Educativa";
let productPrice: number = 450000;

console.log(`Producto: ${productName}, Precio: $${productPrice}`);

// union type
//como el ejemplo de ID del material 
let productId: string | number;

productId = "COD-888"; // Prueba como string
console.log("ID String:", productId);

productId = 888; // Prueba como number
console.log("ID Number:", productId);

// interfaz grafica
// definimos la estructura del objeto 
interface Product {
    name: string;
    price: number;
}

// creamos el objeto usando la interfaz
const myProduct: Product = {
    name: "Mouse Óptico",
    price: 15000
};

console.log("Objeto Producto:", myProduct);