/*
  La propiedad "argv" retorna los parámetros en un array de cadenas
*/
var parametros = process.argv;
var operador = parametros[2];
/*
  Se usa el método **slice** para crear un array a partir del indice 3,
  esto nos indica que tomamos a partir del 3er parámetro hasta el último
  ingresado en consola
*/
var numbersToParse = parametros.slice(3, parametros.length);
var numbersToOperate = [];
var result = 0;
/*
  el método **map** de un array, nos permite recorrer cada elemento de un array,
  en este caso facilita la validación de cada parámetro a operar y
  agregar a un array limpio donde solamente acepta números llamado numbersToOperate
*/
numbersToParse.map(function (numberToParse) {
    var numberParsed = parseInt(numberToParse);
    if (!isNaN(numberParsed)) {
        numbersToOperate.push(numberParsed);
    }
    else {
        console.log("ERROR: El valor ", numberToParse, ", no es un número");
    }
});
/*
  la variable result inicializó con 0, aqui establecemos el 1er valor del array
  de operadores para un resultado mas real
*/
if (numbersToOperate.length) {
    result = numbersToOperate[0];
}
for (var index = 1; index < numbersToOperate.length; index++) {
    var numberToOperate = numbersToOperate[index];
    /*
      Por ejercicio demostrativo se aplica esta estructura de control
      lo ideal es aplicarlo en una función u otra forma, pero se revisará luego
    */
    switch (operador) {
        case "+":
            result += numberToOperate;
            break;
        case "-":
            result -= numberToOperate;
            break;
        /*
          Aqui hay un escenario especial, según el operador * (multiplicación) en consola
          se cruza con el wildcard de busqueda, por esa razón se usa la "x" como referencia
          a esta operación.
        */
        case "x":
            result *= numberToOperate;
            break;
        case "/":
            result /= numberToOperate;
            break;
    }
}
/*

*/
console.log("Números ingresados: ", numbersToOperate);
console.log("TOTAL :", result);
