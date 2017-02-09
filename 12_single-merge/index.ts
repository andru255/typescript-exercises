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
let paramAnio:string   = parametros[3];

//la forma básica de declarar un tipo de dato Object
//con valores estáticos
let objetoBase:Object = {
    "name": "jhon",
    "year": 20
};

//Creamos una referencia de nuestro objeto base
//Ahora como un tipo **any** porque en la especificación de un
//tipo Object nativo en typescript no permite extenderle propiedades de forma dinámica.
//Ejemplo: MiObjeto.miNuevaPropiedad = "xD"; 
//eso no es válido si MiObjeto es un tipo **Object**,
//si es **any** si sería válido.

let referenciaObjetoBase:any = objetoBase;

if(typeof paramNombre !== "undefined"){
    referenciaObjetoBase.name = paramNombre;
}
if(typeof paramAnio !== "undefined"){
    referenciaObjetoBase.year = paramAnio;
}

//la referencia también altera al objeto base, ya que no es un clon del objetoBase
//para clonar un objeto es mediante otra sintaxis.
console.log("objetoBase", JSON.stringify( objetoBase , null, 2));
console.log("referenciaObjetoBase", JSON.stringify( referenciaObjetoBase , null, 2));