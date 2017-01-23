'use strict';
//declarando una variable tipo cadena
var titulo = "Node says...";
//1era forma (conociendo strings y números unicamente)
//usando strings y numbers
//creando una variable que acepta UNICAMENTE cadenas
var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
var rangoMinimo = 5;
var rangoMaximo = 10;
//calculando el rango aleatorio (entre 5 y 10) de longitud
var longitudAleatoria = Math.random() * (rangoMinimo - rangoMaximo) + rangoMaximo;
var longitudPalabra = parseInt(longitudAleatoria.toString());
var autoPalabra = "";
for (var i = 0; i < longitudPalabra; i++) {
    var indiceAleatorio = Math.random() * (0 - letras.length) + letras.length;
    var indiceEnLetras = parseInt(indiceAleatorio.toString());
    autoPalabra += letras[indiceEnLetras];
}
//Gracias a nuestra configuración en el archivo tsconfig.json "noImplicitAny"
// En caso lo establecemos a 'true', hará que cuando transpilemos debemos ser implicito con los parametros
// En caso sea 'false', lo ignorará
/* Aplicando una pequeña funcion para mostrar los mensajes,
   teniendo en cuenta que nuestro archivo tsconfig.json tiene como "true" la propiedad "noImplicitAny"
 */
function output(longitudPalabraGenerada, palabraGenerada) {
    console.info(titulo);
    console.info("======");
    //mostramos la longitud
    console.info("longitud de la nueva palabra: ", longitudPalabraGenerada);
    console.info("palabra generada: ", palabraGenerada);
}
//teniendo como ejemplo la funcion de arriba debemos indicar que el parámetro si o si debe indicar de qué tipo es
//Si lo tubieramos en 'false' esa propiedad, la función sería
/*
function output(longitudPalabraGenerada, palabraGenerada){
    console.info(titulo);
    console.info("======");
    //mostramos la longitud
    console.info("longitud de la nueva palabra: ", longitudPalabraGenerada);
    console.info("palabra generada: ", palabraGenerada);
}
*/
//SALIDA EN CONSOLA
//=================
output(longitudPalabra, autoPalabra);
