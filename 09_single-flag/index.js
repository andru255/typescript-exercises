// el objeto process en un principio no está definido para typescript
// debido a ello debemos instalar el paquete typings globalmente de la siguiente forma:
// > npm install -g typings
// Este paquete nos facilitará descargar definiciones de objetos que en este caso necesitamos
// para nodejs ejecutamos el siguiente comando en la carpeta donde está ubicado este archivo.
// > typings install env~node --global --save
// este comando creará una carpeta con nombre "typings" donde almacenará la definición del objeto "process"
// facilitando a typescript que "process" si existe para él al transpilar este archivo
//La propiedad "argv" retorna los parámetros en un array de cadenas
var parametros = process.argv;
var parametroAtomar = parametros[2];
var numeroAleatorio = Math.random() * 100;
var debeMostrarEntero = false;
console.log("Número aleatorio: ", numeroAleatorio);
if (parametroAtomar == "--integer") {
    debeMostrarEntero = true;
}
else {
    debeMostrarEntero = false;
}
if (debeMostrarEntero) {
    var numeroEntero = parseInt(numeroAleatorio.toString());
    console.log("Número entero: ", numeroEntero);
}
else {
    console.log("Para mostrar un número entero debe pasar el flag --integer");
}
