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

- Las paginas basica no dependen de contenido externo
- Nextjs tiene un routing basado en file system dependen de los archivos que hay en el directorio pages