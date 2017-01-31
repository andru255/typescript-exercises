# Single Flag

Ejercicio en donde se debe crear un archivo y correrlo bajo la consola de node.

Debe constar de la siguiente funcionalidad:

- Generar en entero un número aleatorio flotante.

- Ingresar en consola como parámetro un **--integer**. Un ejemplo:

> node index.js --integer

al ejecutar debe mostrar:

> número aleatorio: 4.89289

> número aleatorio en integer: 4

en caso contrario:

> número aleatorio: 4.89289

> Para mostrar un número entero debe pasar el flag --integer 


## Objetivos

- **Uso de tipos de dato básicos**, Usamos el tipo de dato number y boolean
- **Obtener parametros en consola**, Obtener el parámetro que pasamos por consola para que el programa compilado lo lea.
- **instalando algo nuevo.. typings**, Conocemos cómo se instala el paquete **typings** que nos facilita a que typescript defina de que tipo es el objeto process y qué contiene
- **Uso de TypeScript en consola**, transpilar vía comando.

## Qué se necesita

- Tener la última versión de nodejs instalado
- Tener instalado globalmente el paquete de TypeScript
- Tener instalado globalemente el paquete typings

## Cómo transpilarlo

> npm install -g typescript typings

> cd 09_single-flag

> tsc --init

- Este último comando ejecutado generará un archivo llamado tsconfig.json del cual se debe cambiar el propiedad **noImplicitAny** a **true**

> tsc

- Al ejecutar este último comando probablemente muestre un error ya que typescript al leer el code muestre "process" no existe o no está definido, entonces realizamos lo siguiente:

> typings install env~node --global --save

- Este comando al ejecutarlo guardará la definición del objeto "process" para que al correr el comando **tc** lo comprenda, aparecerá una carpeta **typings** creada en la carpeta del ejercicio, esa carpeta contiene la definición del objeto **process** de node, ejecutamos de nuevo:

> tsc

- Si no muestra error es porque todo está bien, en caso contrario favor de crear un issue en este repo.

- Otra observación a este punto es que se creará un archivo llamado **typings.json**.

- Bajo GIT podemos actualizar el archivo .gitignore y agregar **typings** indicando que dicha carpeta no sea agregada en tu repo, como ya tenemos ese archivo llamado **typings.json**, nos dirigimos a la carpeta del ejercicio y se aplica este comando.

> typings install

## Cómo visualizarlo?

- Una vez que la transpilacion sea satisfactoria, abrir una consola o terminal y ejecutar el siguiente comando:

> node index.js --integer

## Compatibilidad

- Solamente se puede aplicar en consola de nodejs (CMD u otra interfaz shell)
