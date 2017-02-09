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
var paramNombre = parametros[2];
var paramAnio = parametros[3];
//la forma básica de declarar un tipo de dato Object
//con valores estáticos
var objetoBase = {
    "name": "jhon",
    "year": 20
};
//creamos una referencia de nuestro objeto base
var referenciaObjetoBase = objetoBase;
//existe una declaración 
if (typeof paramNombre !== "undefined") {
    referenciaObjetoBase.name = paramNombre;
}
if (typeof paramAnio !== "undefined") {
    referenciaObjetoBase.year = paramAnio;
}
console.log("objetoBase", JSON.stringify(objetoBase, null, 2));
console.log("referenciaObjetoBase", JSON.stringify(referenciaObjetoBase, null, 2));
