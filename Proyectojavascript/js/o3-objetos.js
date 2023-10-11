"use strict"; 

let producto = {   

nombreProducto:"Reloj",
precio: 33,
disponible: true

}

console.log("MI PRIMER OBJETO producto: " ,producto);
console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`);

console.log("USO DE SINTAXIS DE PUNTO producto.precio" ,producto.precio)
console.log(`USO DE SANTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);

console.log("USO DE CORCHETES",producto["precio"]);

// MODIFICAR OBJETOS

producto.categoria = "joyeria";
console.log("ANADIR CATEGORIA a producto: ",producto)

producto.precio = 12;

delete producto.disponible; 
console.log("BORRAR DISPONIBLE a productos: " ,producto);

// MODIFICAR

let precioProducto = producto.precio;
console.log("CREAMOS VARIABLE A PARTIR DE LA PROPIEDAD PRECIO de productos: ",precioProducto);

let nombreProducto = producto.nombreProducto;
console.log("CREAMOS UNA VARIABLE A PARTIR DE LA PROPIEDAD NOMBRE de producto: " ,nombreProducto);

// DESTRUCTURING AL PRECIO

let {precio,categoria} = producto;

console.log(`CREAMOS  VARIABLE ${precio} y categoria CON DESTRUCTURING: ${categoria}`); 


let Playa = {

    nombrePlaya: "Choroni",
    ubicacion: "Maracay",
    recomendable: true,
    temperaturaAgua: 25
}

let {nombrePlaya,ubicacion,recomendable,temperaturaAgua} = Playa
console.log(`en la playa ${nombrePlaya} que esta en ${ubicacion} el agua esta a ${temperaturaAgua} te la recomiendo ${recomendable}`);


Object.freeze(producto);

// producto.congelado = "intentamos congelarlo";

console.log("INTENTO ANADIR UNA PROPIEDAD TRAS FREECE" ,producto);


console.log("ESTA CONGELADO?" ,Object.isFrozen(producto));


let medidas = {
     peso: 80,
     alto: 170,
     ancho: 50,
    profundidad: 1/3,
};

Object.seal(medidas);
medidas.profundidad = 1;

console.log("MOSTRAMOS COMO SE PUEDE MODIFICIAR SON SEAL" ,medidas)

// spread/rest

let nuevoProducto = {...producto,...medidas };
console.log("nuevo objeto con spread operator:" ,nuevoProducto)

