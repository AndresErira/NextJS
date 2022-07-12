# NEXT.JS
Framework creado por vercel para mejorar el ambiente de desarrollo eliminando las decisiones que teniamos que tomar con react webpack babel etc. Para enfocarnos solo en el desarrollo.

- Inicializamos proyecto con npm init y git init
## Instalacion de nextjs
1. Opcion 1 : forma automatica que genera una estructura

        yarn create next-app

2. Opcion 2 (recomendada): de forma manual

        yarn add next react react-dom

- creamos un nuevo script en el package.json
- Nota: Para instalar yarn desde node ejecutamos 

        npm install --global yarn
```json
"scripts":{
    "build" : "next build",
    "dev" : "next",    
    "start" : "next start"
}
```
- Creamos un directorio pages para que no nos genere           
ejecutamos en el siguiente orden

        yarn build
        yarn dev
        yarn start

# Routing
Formas de enrutamiento en NextJs puede ser dinamico o estatico.
- Se crea el archivo index.js dentro del directorio pages.

```js
import React from 'react';

const Home = () =>{
    return(
        <div>
            <h1>Hola platzi!!!</h1>
        </div>
    )
}
export { Home }
```

- Las paginas basica o rutas estaticas no dependen de contenido externo
- Nextjs tiene un routing basado en file system dependen de los archivos que hay en el directorio pages
- Cualquier componente que este en el directorio pages NextJS lo entendera como ruta y se puede acceder desde la url

## Rutas Dinamicas
Para crear una pagina o ruta dinamica lo unico que tenemos que hacer es crear su nombre de archivo entre corchetes [] y su extension. 

Ejemplo: [Users].js
en este caso al usar la ruta en el servidor se le puede pasar una query
/servidor/Users/id <------Tomara lo que vaya en id como argumento en lugar de Id podria ser uno o mas parametros(o queries) el componente o pagina debe ir dentro de un directorio que sera la raiz del query.
- Para hacer uso de este recurso importamos el hook useRouter de 'next/router'

Ejemplo:/product/[productId].js
```js
import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = ()=>{
    const router = useRouter();
    return <div>esta es la pagina el producto: {router.query.productId}</div>
}

export default ProductItem;
```
- Ejemplo con una query mas completa
```js
import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () =>{
    const router = useRouter();
    console.log(router);
    console.log(router.query);
    return (
        <div>{
            //En este caso se recibiria una query como la siguiente
            //http://localhost:3000/product/66910?age=25&rank=50
            }
            <h1>Pagina del producto: {router.query.productId}</h1>
            <p>Rango: {router.query.rank}</p>
            <p>edad:{router.query.age}</p>
        </div>
    );
}
export default ProductItem;
```
-Desctructurando el query
```jsx
import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () =>{
    const {query:{productId, rank,age}}= useRouter();
    return (
        <div>{
            //En este caso se recibiria una query como la siguiente
            //http://localhost:3000/product/66910?age=25&rank=50
            }
            <h1>Pagina del producto: {productId}</h1>
            <p>Rango: {rank}</p>
            <p>edad:{age}</p>
        </div>
    );
}
export default ProductItem;
```

# OPTIMIZACIONES OCULTAS
Lo que hace NextJS por debajo.
El script build nos construye el proyecto para produccion
Y el start inicia el servidor node de nextjs para produccion 
Cuando se contruye con build NextJS crea archivos js con diferentes hasshes como strategia para los assets y solucionar el problema de cache(code spliting)
- Los chunks son piezas de codigo minimo que se asignan a cada pagina en especifico.