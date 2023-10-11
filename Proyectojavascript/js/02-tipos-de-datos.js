const producto1 = "juegos de mesa EL PUEBLO DUERME";  /*LA MAS UTILIZADA */
const producto2 = String("DOOBLE"); 
const producto3 = new String("UNO"); /*SON OBJETOS, LO VEREMOS */

console.log("PRODUCTO:",producto1);
console.log("PRODUCTO2 CON STRING",producto2);
console.log("PRODUCTO3 CON NEW STRING",producto3);

console.log("typeof producto1",typeof producto1,producto1);
console.log("typeof producto2",typeof producto2);
console.log("tipoof producto3",typeof producto3);

let numero100 = "100"
let numero200 = "200"

numero100 = 100
numero200 = "200"


console.log("TIPO DE DATOS NUMERO100", typeof numero100);
console.log("TIPO DE DATOS NUMERO200", typeof numero200);

// METODOS PARA LOS STRINGS
// SON FUNCIONES QUE PUEDES UTILIZAR PARA VARIAR EN FUNCION DEL TIPO DE DATOS


console.log("METODO LENGTH",producto1.length); /*ME DICE LA LONGITUD DE LAS VARIABLES*/

// INDEXOF PARA BUSCAR SI UNA PALABRA EXISTE EN UNA TEXTO Y ME DA LA POSICION SI LO ENCUENTRA -1

console.log("METODO INDEXOF:", producto1.indexOf("DUERME"));

// INCLUDES RETORNA TRUE O FALSE

console.log("METODO INCLUDES:",producto1.includes("DUERME"));


// EJERCICIOS

let string1 = "ejericiostring1";
let string2 = String("la casa de papel");
const string3 = "ejerciciostring3";

console.log("LENGTH METODO",string1.length);
console.log("INDEXOF METODO",string2.indexOf("papel"));
console.log("INCLUDES METODO",string3.includes("papel"));



let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200"; /*tipo string*/
let numero4 = 2/3


console.log("NUMERO 1:", numero1, numero1, typeof numero1);
console.log("NUMERO 2:", numero2, numero2, typeof numero2);
console.log("NUMERO 3:", numero3, numero3, typeof numero3);


console.log("NUMERO 1+2:", numero1+numero2);
console.log("NUMERO 1-2:", numero1+numero2);
console.log("NUMERO 1*2:", numero1+numero2);
console.log("NUMERO 1/2:", numero1+numero2);
console.log("NUMERO 1%2:", numero1+numero2);


// let Resultado = Math.random();

// console.log("uso de metodo random()" ,resultado);



let resultado = Math.round(Math.random()*30);

console.log("NUMERO ALEATORIO ENTERO ENTRE 0 Y 30",resultado)

let diametro
let area;

area= Math.PI*Math.pow(diametro/2,2)

console.log("resultado variable" ,resultado)


// crear un dado

let dado = Math.round(1+Math.random()*5);
console.log("Resultado dado");




let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES, resultadoOrden");

let resultadoOrden2 = (20 + 30) * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES 2" ,resultadoOrden2);


// EJERCICIO CALCULAR EL DESCUENTO Y EL TOTAL A PAGAR



let prenda1 = 120
let prenda2 = 85
let prenda3 = 24

let descuento =40;
let importe;
let ahorro;
let total;

descuento=40; //40% es lo mismo que 0,4 
//100% es lo mismo que 1
//10% es lo mismo que 0,1
// conclusion X% es X/100// 

//calculamos el importe sin descuento

importe= prenda1 + prenda2 + prenda3;
console.log("importe sin descuento" ,importe);


//calculamos el ahorro
ahorro= importe * descuento / 100;
console.log("descuento total del carrito" ,ahorro);


//importe total co descuento incluido
total= importe - ahorro;
console.log("total con descuento incluido" ,total);



// incremento/decrementos

let meGusta=0

meGusta+=15;
meGusta-=6
console.log("incremento", meGusta)


// let nombre= jesusgomez;
// let email = jesusgomez.s@hotmail.com; 

// console.log(nombre + email);
// console.log(nombre + "  " + email);
// console.log(nombre )




let nombreJG = "Jesus Gomez";
let emailJG= "jesusgomez@jesusJG.es";

console.log("ESTE ES EL NOMBRE" ,nombreJG);
console.log('ESTE ES EL NOMBRE' ,nombreJG);



// BOOLEANOS

let boolean1 = true;
let boolean2 = false;
let boolean3 = "true";

console.log("TIPO DATO BOOLEAN1:" , typeof boolean1);
console.log("TIPO DE DATO BOOLEAN2:" ,typeof boolean2);
console.log("TIPO DE DATO BOOLEAN3:" ,typeof boolean3 )

let boolean4 = new Boolean(true);
console.log("TIPO DATO BOOLEAN4:" , typeof boolean4)


