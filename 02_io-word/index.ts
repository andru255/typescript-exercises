// el objeto process en un principio no está definido para typescript
// debido a ello debemos instalar el paquete typings globalmente de la siguiente forma:
// > npm install -g typings
// Este paquete nos facilitará descargar definiciones de objetos que en este caso necesitamos
// para nodejs ejecutamos el siguiente comando en la carpeta donde está ubicado este archivo.
// > typings install env~node --global --save
// este comando creará una carpeta con nombre "typings" donde almacenará la definición del objeto "process"
// facilitando a typescript que "process" si existe para él al transpilar este archivo

//La propiedad "argv" retorna los parámetros en un array de cadenas
var parametros:string[] = process.argv;

//Tomo el indice 2 ya que en esa posición se encuentra el parámetro que necesito imprimir
var miPalabraParaImprimir:string = parametros[2];

console.log("Escribiste la palabra: ", miPalabraParaImprimir);
