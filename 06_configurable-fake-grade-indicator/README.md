# Configurable fake grade indicator 

Ejercicio en donde se debe mostrar en el navegador.

Debe constar de la siguiente funcionalidad:

- Mostrar un número aleatorio de rango de 0 y 100
- También debe contar con una interfaz que me permita ingresar un rango determinado para mostrar el número aleatorio en base a ese rango que se ingrese

## Objetivos

- **Uso de tipos de dato básicos**, Usamos el tipo de dato string y number
- **Uso de TypeScript en consola**, transpilar vía comando.

## Qué se necesita

- Tener la última versión de nodejs instalado
- Tener instalado globalmente el paquete de TypeScript

## Cómo transpilarlo

> npm install -g typescript

> cd 06_configurable-fake-grade-indicator

> tsc --init

- Este último comando ejecutado generará un archivo llamado tsconfig.json del cual se debe cambiar el propiedad **noImplicitAny** a **true**

> tsc

- Si no muestra error es porque todo está bien, en caso contrario favor de crear un issue en este repo.

## Cómo visualizarlo?

- Una vez transpilado, abrir el index.html en el navegador.

## Compatibilidad

- Se testea en navegadores Mozilla Firefox y Chrome ( Perdóname IE y Edge)
