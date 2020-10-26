# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Descripción del proyecto](#3-descripción-del-proyecto)
* [4. Desplegado en NPM](#4-desplegado-en-npm)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## 2. Resumen del proyecto

Este proyecto tiene la finalidad de verificar los links, que se encuentran en archivos de formato `Markdown`,
reportando estadísticas si son válidos, únicos o están rotos. Utilizando [Node.js](https://nodejs.org/) 
el entorno de desarrollo de Javascript.

## 3. Descripción del proyecto

### Diagrama de Flujo

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/diagramaFlujoMDLINKS.png)

### Actividades cumplidas 

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/done.png)

### Especificaciones técnicas

Las herramientas y dependencias implementadas para la construción de esta librería fueron las siguientes:

| Ejecución    | Descripción |
| ------       | ------ |
| Node.js      | Entorno de desarrollo de Javascript|

| Dependencia  | Descripción |
| ------       | ------ |
| chalk        | Anida y encadena estilos|
| node-fetch   | Permite utilizar el método fetch en Node.js |
| eslint       | Herramienta para identificar sobre patrones encontrados en código ECMAScript / JavaScript |
| babel-cli    | Convierte el código ECMAScript 2015+ en una versión compatible de JavaScript en navegadores o entornos actuales y antiguos. |
| jest         | Framework de Javascript para pruebas |

| Módulos      | Descripción |
| ------       | ------ |
| fs           | Permite manejar los archivos del sistema |
| path         | Proporciona trabajar con rutas de archivos y directorios.|
| process      | Proporciona información y control sobre el proceso de Node.js actual |


### Instalación de la librería

La librería se instala con el siguiente comando desde el terminal:
  `npm install dianaiso-md-links`

Y de forma global con 
  `npm install --global dianaiso-md-links`

### Guía de Uso

La librería se ejecuta desde la terminal: `md-links <path-to-file> [options]`

Por ejemplo:

En caso de que el usuario solo introduce en la terminal 
`md-links <path-to-file>`

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/sinopciones.png)

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/validate.png)

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/stats.png)

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/mix.png)

#### Mensajes de errores

Cuando la ruta ingresada no existe 

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/noExiste.png)

Cuando no existen archivos `Markdown` en la ruta ingresada

![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/noMd.png)

#### Testing 
![Error al cargar la imagen](https://raw.githubusercontent.com/DianaSanchezOrdonez/LIM013-fe-md-links/master/src/img/test.png)

## 4. Desplegado en NPM
[dianaiso-md-links](https://www.npmjs.com/package/dianaiso-md-links)