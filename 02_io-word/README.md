# IO word

Ejercicio en donde se debe crear un archivo y correrlo bajo la consola de node.

Debe constar de la siguiente funcionalidad:

- Mostrar en consola la palabra que ingrese seguido de mi archivo a ejecutarlo con nodejs. Un ejemplo:

> node index.js hola!

al ejecutar esa linea debe mostrar:

> Escribiste la palabra: hola!

## Objetivos

- **Uso de tipos de dato básicos**, Usamos el tipo de dato string y el uso de un Array que solamente contiene strings.
- **Obtener parametros en consola**, Obtener el parámetro que pasamos por consola para que el programa compilado lo lea.
- **instalando algo nuevo.. typings**, Conocemos cómo se instala el paquete **typings** que nos facilita a que typescript defina de que tipo es el objeto process y qué contiene
- **Uso de TypeScript en consola**, transpilar vía comando.

## Qué se necesita

- Tener la última versión de nodejs instalado
- Tener instalado globalmente el paquete de TypeScript
- Tener instalado globalemente el paquete typings

## Cómo transpilarlo

> npm install -g typescript typings

> cd 02_io-word

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

> node index.js hola!

## Compatibilidad

- Solamente se puede aplicar en consola de nodejs (CMD u otra interfaz shell)
