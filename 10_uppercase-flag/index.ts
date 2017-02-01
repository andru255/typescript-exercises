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

let parametroPalabraAtomar:string = parametros[2];
let parametroFlagAtomar:string = parametros[3];
let debeMostrarMayuscula:boolean = false;

console.log("Palabra ingresada: ", parametroPalabraAtomar);

if(parametroFlagAtomar == "--uppercase"){
    debeMostrarMayuscula = true;
} else{ 
    debeMostrarMayuscula = false;
}

if(debeMostrarMayuscula){
    let palabraMayuscula = parametroPalabraAtomar.toUpperCase();
    console.log("Palabra en mayuscula: ", palabraMayuscula);
} else {
    console.log("Para mostrar en mayuscula debe pasar el flag --uppercase");
}
