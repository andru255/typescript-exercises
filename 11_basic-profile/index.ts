// el objeto process en un principio no está definido para typescript
// debido a ello debemos instalar el paquete typings globalmente de la siguiente forma:
// > npm install -g typings
// Este paquete nos facilitará descargar definiciones de objetos que en este caso necesitamos
// para nodejs ejecutamos el siguiente comando en la carpeta donde está ubicado este archivo.
// > typings install env~node --global --save
// este comando creará una carpeta con nombre "typings" donde almacenará la definición del objeto "process"
// facilitando a typescript que "process" si existe para él al transpilar este archivo

//La propiedad "argv" retorna los parámetros en un array de cadenas
let parametros:string[] = process.argv;

let paramNombre:string = parametros[2];
let paramApellido:string = parametros[3];
let paramNickname:string = parametros[4];

//la forma básica de declarar un tipo de dato Object
//con valores estáticos
let perfil:Object = {
    "name"       : paramNombre,
    "second-name": paramApellido,
    "nickname"   : paramNickname 
};

//Pintando el objeto con la ayuda del objeto nativo JSON
//el método **stringify** pinta un objeto con el formato que necesitamos
console.log(JSON.stringify(perfil, null, 2));