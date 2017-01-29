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

let parametroAtomar:string = parametros[2];
let numeroAComparar:number = parseInt(parametroAtomar);
let numeroAleatorio:number = Math.random() * (0 - 5) + 5;
let numeroDeNode:number = parseInt(numeroAleatorio.toString());
let sonIguales:boolean = false;

console.log("Número que pensó nodejs: ", numeroDeNode);

if(!isNaN(numeroAComparar)){
    console.log("Número que ingresaste: ", numeroAComparar);
    if(numeroDeNode == numeroAComparar){
        sonIguales = true;
    }
} else {
    console.log("El parámetro ingresado no es válido");
}

if(sonIguales){
    console.log("Felicitaciones!");
} else {
    console.log("Intenta de nuevo.");
}