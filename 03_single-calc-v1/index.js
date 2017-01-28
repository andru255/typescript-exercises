/*
  La propiedad "argv" retorna los parámetros en un array de cadenas
*/
var parametros = process.argv;
var sumandoA = parseInt(parametros[2]);
var sumandoB = parseInt(parametros[3]);
if (!isNaN(sumandoA) && !isNaN(sumandoB)) {
    console.log("A: ", sumandoA);
    console.log("B: ", sumandoB);
    console.log("TOTAL: ", sumandoA + sumandoB);
}
else {
    console.error("ERROR: Uno de los parámetros no es un número");
}
