# Amigo Secreto

El presente repositorio aloja mi resolución del primer challenge del programa de [Oracle Next Education - Alura Latam G8](https://www.oracle.com/ar/education/oracle-next-education/).

## Contenido

Con el fin de ejercitar lo aprendido en los cursos sobre iniciación en lógica de programación con Javascript, se nos propusó implementar un programa que, definiendo 
una serie de funciones, permitan al usuario listar a sus amigos y elegir uno al azar a través de un template de HTML y CSS provisto, que debemos volver interactivo.

## Requerimientos

Al consistir de sólo un `ìndex.html`, `styles.css` y `app.js` junto algunas imágenes que usa el template, no se necesita más que de un navegador web que permita renderizarlos y 
ejecutar código de Javascript.

## Ejecución

### De manera remota

Basta acceder a la versión [deployada](https://martincalsina.github.io/one-challenge-amigo-secreto-js/) por GitHub Pages.

### De manera local

Cóloquese sobre el directo en el que quiere descargar el proyecto y ejecute el comando de git:

```
git clone https://github.com/martincalsina/one-challenge-amigo-secreto-js.git
```

A continuación, debe abrirse en un navegador el archivo `ìndex.html`. De preferencia, úsese [Visual Studio Code](https://code.visualstudio.com/)
con una extensión como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para ello.

## Uso 

El usuario puede ingresar los nombres de sus amigos en el input ofrecido para ello y apretando el botón de `àñadir` para confirmar esta operación.

No es posible añadir nombres en blanco.

Cada uno de los nombres que vaya ingresando se irán mostrando uno tras otro a manera de lista debajo.

Para seleccionar un amigo aleatorio de los que se encuentran al momento en la lista basta apretar el botón de `sortear amigo`, que elige a alguno de éstos con igual
probabilidad.
