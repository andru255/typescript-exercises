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
var numeroAComparar = parseInt(parametroAtomar);
var numeroAleatorio = Math.random() * (0 - 5) + 5;
var numeroDeNode = parseInt(numeroAleatorio.toString());
var sonIguales = false;
console.log("numero de nodejs: ", numeroDeNode);
if (!isNaN(numeroAComparar)) {
    console.log("numeroIngresado: ", numeroAComparar);
    if (numeroDeNode == numeroAComparar) {
        sonIguales = true;
    }
}
else {
    console.log("el parametro ingresado no es válido");
}
if (sonIguales) {
    console.log("Felicitaciones!");
}
else {
    console.log("Intenta de nuevo.");
}
