# Approved or not

Ejercicio en donde se debe crear un archivo y correrlo bajo la consola de node.

Debe constar de la siguiente funcionalidad:

- Debe generar un número aleatorio que debe estar en un rango del 1 al 20
- Debe mostrar en consola el número generado
- Si el número generado es mayor a 10 debe mostrar en consola "Aprobado", en caso contrario "desaprobado"

## Objetivos

- **Uso de tipos de dato básicos**, Usamos el tipo de dato number y boolean.
- **Uso de TypeScript en consola**, transpilar vía comando.

## Qué se necesita

- Tener la última versión de nodejs instalado
- Tener instalado globalmente el paquete de TypeScript
- Tener instalado globalemente el paquete typings

## Cómo transpilarlo

> npm install -g typescript

> cd 07_approved-or-not

> tsc --init

- Este último comando ejecutado generará un archivo llamado tsconfig.json del cual se debe cambiar el propiedad **noImplicitAny** a **true**

> tsc

## Cómo visualizarlo?

- Una vez que la transpilacion sea satisfactoria, abrir una consola o terminal y ejecutar el siguiente comando:

> node index.js

## Compatibilidad

- Solamente se puede aplicar en consola de nodejs (CMD u otra interfaz shell)