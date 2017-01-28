# Single Calc v1.0

Ejercicio en donde se debe crear un archivo y correrlo bajo la consola de node.

Debe constar de la siguiente funcionalidad:

- Mostrar en consola la suma de 2 números, los 2 números se ingresan en consola separado por un espacio. Ejemplo:

> node index.js 5 10

al ejecutar esa linea debe mostrar:

> A : 5
> B : 10
> TOTAL : 15

en caso un parámetro no sea un número, deberá mostrar en consola:

> ERROR: Uno de los parámetros no es un número

## Objetivos

- **Uso de tipos de dato básicos**, Usamos el tipo de dato string, el uso de un Array que solamente contiene strings, también conocer la función isNaN y usamos una estructura de control.
- **Obtener parametros en consola**, Obtener el parámetro que pasamos por consola para que el programa compilado lo lea.
- **instalando algo nuevo.. typings**, Conocemos cómo se instala el paquete **typings** que nos facilita a que typescript defina de que tipo es el objeto process y qué contiene
- **Uso de TypeScript en consola**, transpilar vía comando.

## Qué se necesita

- Tener la última versión de nodejs instalado
- Tener instalado globalmente el paquete de TypeScript
- Tener instalado globalemente el paquete typings

## Cómo transpilarlo

> npm install -g typescript typings

> cd 03_single-calc-v1

> tsc --init

- Este último comando ejecutado generará un archivo llamado tsconfig.json del cual se debe cambiar el propiedad **noImplicitAny** a **true**

> tsc

- Al ejecutar este último comando probablemente muestre un error ya que typescript al leer el code muestre "process" no existe o no está definido, entonces realizamos lo siguiente:

> typings install env~node --global --save

- Este comando al ejecutarlo guardará la definición del objeto "process" para que ts lo comprenda, aparecerá una carpeta **typings** creada en la carpeta del ejercicio, esa carpeta contiene la definición del objeto **process** de node, ejecutamos de nuevo:

> tsc

- Si no muestra error es porque todo está bien, en caso contrario favor de crear un issue en este repo.

## Cómo visualizarlo?

- Una vez que la transpilacion sea satisfactoria, abrir una consola o terminal y ejecutar el siguiente comando:

> node index.js 5 10

## Compatibilidad

- Solamente se puede aplicar en consola de nodejs (CMD u otra interfaz shell)
