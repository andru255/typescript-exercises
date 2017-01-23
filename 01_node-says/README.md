# Node says

Ejercicio en donde se debe crear un archivo y correrlo bajo la consola de node.

Debe constar de la siguiente funcionalidad:

- Mostrar en consola una palabra hecha letras aleatorias, las letras son de la **a** a la **k**
- La palabra debe tener una longitud aleatoria pero debe estar dentro de un rango entre 5 a 10 letras

## Objetivos

- **Uso de tipos de dato básicos**, Usamos numbers y strings, adicional a un array que acepta sólo cadenas.
- **Opciones del archivo tsconfig.json**, Conociendo el noImplicitAny
- **Declaración de una funcion**, Conocemos cómo se declara una función y que relación tiene con la opción **noImplicitAny**
- **Uso de TypeScript en consola**, transpilar vía comando.

## Qué se necesita

- Tener la última versión de nodejs instalado
- Tener instalado globalmente el paquete de TypeScript

## Cómo transpilarlo

> npm install -g typescript

> cd 01_node-says

> tsc --init

- Este último comando ejecutado generará un archivo llamado tsconfig.json del cual se debe cambiar el propiedad **noImplicitAny** a **true**

> tsc

## Cómo visualizarlo?

- Una vez transpilado, abrir una consola o terminal y ejecutar el siguiente comando:

> node index.js


## Compatibilidad

- Solamente se puede aplicar en consola de nodejs (CMD u otra interfaz shell)