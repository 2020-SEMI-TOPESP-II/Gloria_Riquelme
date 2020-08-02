/*1. Declarar dos variables con la palabra reservada "var", 
     imprimir el resultado de las operaciones de "Suma", "Resta", 
     "Multiplicación" y "División" en la consola. 
     Las variables pueden ser estáticas.*/

var g = 612;
var j = 104;

//Suma
console.log("Suma: ", g + j); 
//Resta
console.log("Resta: ", g + j); 
//Multiplicación
console.log("Multiplicación: ", g * j); 
//División
console.log("División: ", g / j);
console.log("\n");

/*2. Declarar dos variables con la palabra reservada "let", 
imprimir la concatenación de ellas*/

let c1 = 'Here comes';
let c2 = 'the sun';
console.log(c1, '\t' + c2);
console.log("\n");

/*3. Declarar dos variables con la palabra reservada "const", 
imprimir cuál es el tipo de dato de esa variable.*/

const gato = 'Fausto';
const edad = 2;
console.log(typeof gato);
console.log(typeof edad);
console.log("\n");

/*4. Declarar una variable tipo Objecto, colocar 4 llaves 
dentro de él que contengan un entero, un string, un booleano 
y un objeto vacío, en ese mismo orden.*/

var cosas = new Object();
cosas ["numero"] = 6;
cosas ["cadena"] = "Spiel mit mir"
cosas ["bulean"] = false;
cosas ["empty"] = null;
console.log(cosas.cadena);