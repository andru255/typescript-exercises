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
var paramApellido = parametros[3];
var paramNickname = parametros[4];
//la forma básica de declarar un tipo de dato Object
//con valores estáticos
var perfil = {
    "name": paramNombre,
    "second-name": paramApellido,
    "nickname": paramNickname
};
//Pintando el objeto
console.log(JSON.stringify(perfil, null, 2));
var objPerfil = {
    name: paramNombre,
    "second-name": paramApellido,
    nickname: paramNickname
};
var objPerfil2 = {};
objPerfil2.name = "xD";
objPerfil2["second-name"] = ":O";
//interpolamos
console.log("{\n    \"name\": \"" + objPerfil2['name'] + "\"\n    \"second-name\": \"" + objPerfil2['second-name'] + "\"\n    \"nickname\": \"" + objPerfil2['nickname'] + "\"\n}");
