# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

Para mejorar el rendimiento del servidor se podría implementar la técnica denominada "Sprite CSS":

1. El propósito de esta técnica es ganar velocidad durante la carga de imágenes/iconos de la aplicación.
2. Consiste en montar una sola imagen con todas las imágenes o iconos que se van a descargar desde el cliente.
3. Posteriormente, a través de CSS podemos identificar y extraer las imágenes.

Además, las imágenes que obtenemos de la api se podrían codificar en base 64 en el servidor.

Otra técnica también conocida, es la compilación de los ficheros javascript y css en un único fichero minimizado.

Server Side Rendering vs Client Side Rendering:
1. Server side rendering (SSR) significa que los scripts pueden ser ejecutados en un servidor para que cuando un usuario abra la página estén ya cargados, aumentando el rendimiento. 
2. La otra opción, la más habitual, es 'client side rendering', simplemente significa que el propio usuario carga los scripts en su ordenador.
3. La desventaja principal de 'server side rendering' es que se realizan más llamadas a servidor, y por tanto, navegar por la web es un poco más lento, pero la carga inicial es mucho más rápida que 'client side rendering'.

No olvidarse de compilar la app con: `ng build --prod`
Al finalizar la compilación, se genera una carpeta llamada 'dist' que contiene todos los archivos que debemos subir a nuestro hosting.


# Tests

`npm run test` to run tests


# Pasos que he seguido durante el desarrollo de la prueba:

1. Create project on Firebase.
2. Generate config variables.
3. Enable email/password authentication on Firebase Authentication.
4. Set firebase config on enviroment files.
5. Install AngularFire to authenticate users: `ng add @angular/fire`
6. Add interface for user access credentials: `ng g interface interfaces/credentials`
7. Add authentication service: `ng g service services/auth/auth`
8. Install Ant Design: `ng add ng-zorro-antd`
9. Add password field to register form.
10. Add local storage service: `ng g service services/storage/local-storage`
11. Add interface for user local storage: `ng g interface interfaces/user-local-storage`
12. Set current user on sign in.
13. Set current user to null and redirect to login page on logout.
14. Add authentication guard on ships/login component.
15. Problem on linux mint: system limit for number of file watchers reache.
    1. Solution: `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
16. Add interfaces for ship: `ng g interface interfaces/ship` | `ng g interface interfaces/ships`
17. Add pagination on ships module.
18. Add image to each ship.
19. Install ngrx store library: `ng add @ngrx/store@latest`
20. Install ngrx effects library: `ng add @ngrx/effects@latest`
21. Install ngrx store-devtools library: `ng add @ngrx/store-devtools@latest`
22. Install ngrx schematics library: `ng add @ngrx/schematics@latest`
23. Run the following at the root of the project to change the CLI to use theNgRx Schematics: `ng config cli.defaultCollection @ngrx/schematics`
24. Generate a feature set containing an actions, effects, reducer, and selectors file for ships: `ng g feature components/ships/store/ship --module=app.module.ts --no-flat --creators`
25. Generate spin container component: `ng g component components/ng-zorro/nzSpinInside`