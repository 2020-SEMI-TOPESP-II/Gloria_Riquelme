/*1. Declarar dos variables con la palabra reservada "var", 
     imprimir el resultado de las operaciones de "Suma", "Resta", 
     "Multiplicaci�n" y "Divisi�n" en la consola. 
     Las variables pueden ser est�ticas.*/

var g = 612;
var j = 104;

//Suma
console.log("Suma: ", g + j); 
//Resta
console.log("Resta: ", g + j); 
//Multiplicaci�n
console.log("Multiplicaci�n: ", g * j); 
//Divisi�n
console.log("Divisi�n: ", g / j);
console.log("\n");

/*2. Declarar dos variables con la palabra reservada "let", 
imprimir la concatenaci�n de ellas*/

let c1 = 'Here comes';
let c2 = 'the sun';
console.log(c1, '\t' + c2);
console.log("\n");

/*3. Declarar dos variables con la palabra reservada "const", 
imprimir cu�l es el tipo de dato de esa variable.*/

const gato = 'Fausto';
const edad = 2;
console.log(typeof gato);
console.log(typeof edad);
console.log("\n");

/*4. Declarar una variable tipo Objecto, colocar 4 llaves 
dentro de �l que contengan un entero, un string, un booleano 
y un objeto vac�o, en ese mismo orden.*/

var cosas = new Object();
cosas ["numero"] = 6;
cosas ["cadena"] = "Spiel mit mir"
cosas ["bulean"] = false;
cosas ["empty"] = null;
console.log(cosas.cadena);