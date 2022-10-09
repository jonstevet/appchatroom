
<div align="left">


<!-- About the Project -->
## :star2: Acerca del projecto

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Tecnologías usadas</summary>
  <ul>
       <li>Typescript</li>
       <li>Express</li>
       <li>Node.js</li>
       <li>React</li>
       <li>Axios</li>
       <li>Socket.io</li>
       <li>MongoDB</li>
  </ul>
</details>

<!-- Features -->
### :dart: Características

Escenario
Parte I
Se pide realizar un programa de chat que permite que dos usuarios puedan realizar una
conversación mediante el envío de mensajes utilizando la librería Socket.IO para NODE JS.
Al iniciar el programa debe solicitar al usuario un Nick o alias para ser identificado y poder
ser agregado a una lista de usuarios conectados.
Luego del ingreso del Nick o alias de usuario el programa debe presentar en pantalla
dividida usuarios conectados (lado izquierdo de la pantalla) y mensajes enviados y recibidos
(lado derecho de la pantalla) como así también una caja de texto que permita el intercambio
de mensajes entre los usuarios.
En el lado izquierdo tal como se comentó anteriormente se debe listar los usuarios
conectados al sitio de chat, permitiendo así que el usuario logueado pueda seleccionar
haciendo click en el Nick de la persona que quiera comenzar a chatear.
Parte II
● Mostrar una alerta visual si un usuario me envía un mensaje por ejemplo en la lista
de usuario conectado en el Nick de usuario que me envía el mensaje poner la
leyenda (NUEVO MENSAJE).
● Mostrar los mensajes con colores distintos dependiendo de quién envía por ejemplo
gris (Emisor) y azul (Receptor).
● Mostrar fecha hora de cada mensaje.
● Realizar uso de localStorage o SessionStorage para mantener los mensajes
guardados en caso de actualizar la ventana del navegador.
Consideraciones:
● Tener presente los principios SOLID para el desarrollo respectivo.
● Implementar la arquitectura que mejor considere e indicar la razón respecto de su
uso a los patrones utilizados (Creacionales, Estructurales y de Comportamiento).

<!-- Env Variables -->
### :key: Variables de entorno

Para correr este projecto es necesario tener disponible puertos `3000, 3001`

`API_KEY` = 

<!-- Getting Started -->
## 	:toolbox: Antes de empezar

Un poco de como diseñe esta solucion.

La logica que utilice: `necesito un chat para hablar con otros usuarios en tiempo real.`

## 	:toolbox: Usuarios de prueba
```bash
 test 123456 
 test2 123456
 marta 123456
 pablo 123456
```

<!-- Installation -->
### :gear: Requisitos

Este projecto maneja NPM como gestor de paquetes. 
Por favor ejecute los siguientes comandos.

```bash
 npm install 
 npm run build
 npm run start 
```

<!-- Deploy -->
### 🌧️ Despliegue en servidor remoto

Se uso una maquina virtual de la cloud de Azure para subir el projecto y se mantiene activo con PM2 en la ruta.

`http://appchatroom.brazilsouth.cloudapp.azure.com:3000/`

<b>!!estará disponible hasta recibir el feedback!!</b>
