# Proyecto FullStack - +alcance Logs

<img src="https://i.ibb.co/2KwzNN6/01c11b1d-2d5e-4bdf-9f67-c6d5b7eff4c0.jpg" alt="logo" width="200"/>

¡Bienvenido al proyecto! Este repositorio contiene tanto el código backend como frontend para un sistema de gestión de usuarios, publicaciones y álbumes. A continuación, encontrarás instrucciones detalladas sobre cómo configurar y ejecutar la aplicación.

[![DeepSource](https://app.deepsource.com/gh/devchrisar/Mas_AlcanceAppTest.svg/?label=active+issues&show_trend=true&token=UwA9rTiO7ejR8w07iqwSr8Gn)](https://app.deepsource.com/gh/devchrisar/Mas_AlcanceAppTest/) [![DeepSource](https://app.deepsource.com/gh/devchrisar/Mas_AlcanceAppTest.svg/?label=resolved+issues&show_trend=true&token=UwA9rTiO7ejR8w07iqwSr8Gn)](https://app.deepsource.com/gh/devchrisar/Mas_AlcanceAppTest/)

## Configuración del Backend

### Paso 1: Instalación de Paquetes

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

`{bash}
npm install
`

### Paso 2: Configuración de Variables de Entorno

Abre el archivo .env y actualiza las siguientes variables de entorno:

```
PORT={Coloca_un_puerto}
MONGO_URL=mongodb://localhost:27017/{tu_base_de_Datos} //si tienes problemas
de conexion intenta colocando de esta forma: mongodb://127.0.0.1:27017/{tu_base_de_Datos}
JWT_SECRET={Coloca_Aqui_una_contraseña_A_eleccion}

```

Asegúrate de personalizar el puerto, la URL de MongoDB y la contraseña JWT según tus preferencias.

### Paso 3: Configuración de MongoDB

Instala MongoDB siguiendo el tutorial específico para tu sistema en la [página oficial de MongoDB.](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/ "página oficial de MongoDB.")
Ejecuta el daemon de MongoDB usando el siguiente comando:
`{bash} mongod
`
Crea una base de datos con el nombre +alcance usando mongo shell o cualquier otra interfaz grafica:

```{bash}
mongo
use +alcance
```

Ejecuta las siguientes sentencias para crear las colecciones necesarias:

Colección de Usuarios:

```shell
db.createCollection("users")
db.users.createIndex({ "id": 1 }, { unique: true })

# Documento de ejemplo
db.users.insertOne({
  email: "christopherariasar@amigo.edu.co",
  password: "12345",
  name: "christopher henry",
  lastName: "arias arcia"
})

```

Colección de Publicaciones

```shell
db.createCollection("posts")
db.posts.createIndex({ "userId": 1 })

```

Colección de Álbumes

```shell
db.createCollection("albums")
db.albums.createIndex({ "userId": 1 })

```

### creada la base de datos la cual puedes visualizar a travez del siguiente esquema:

[![diagrama base de datos](https://i.ibb.co/C2Yf4K0/diagram-drawio.png "diagrama base de datos")](https://i.ibb.co/C2Yf4K0/diagram-drawio.png "diagrama base de datos")

con los siguientes datos:

[![esquema base de datos](https://i.ibb.co/g4FmFXj/alcance.png "esquema base de datos")](https://i.ibb.co/g4FmFXj/alcance.png "esquema base de datos")

### Paso 4: Iniciar el Backend

Ejecuta el siguiente comando dentro de la carpeta backend:
`{bash} npm start
`
O, para ejecutarlo en modo de desarrollo:
`{bash} npm run dev
`
Deberías ver la siguiente salida en la consola:

```shell
Server running on port {tu_puerto_seleccionado}
Conexión a MongoDB establecida

```

## Configuración del Frontend

### Paso 1: (Por desarrollar)....

# English version

## Backend Configuration

### Step 1: Package Installation

Run the following command to install all necessary dependencies:

`{bash}
npm install
`

### Step 2: Environment Variable Configuration

Open the .env file and update the following environment variables:

```
PORT={Place_a_port}
MONGO_URL=mongodb://localhost:27017/{your_database} // If you encounter connection issues, try using: mongodb://127.0.0.1:27017/{your_database}
JWT_SECRET={Place_Your_Custom_Password_Here}

```

Make sure to customize the port, MongoDB URL, and JWT password according to your preferences.

### Step 3: MongoDB Configuration

Install MongoDB following the specific tutorial for your system on the [official MongoDB page](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/ " official MongoDB page")

Run the MongoDB daemon using the following command:
`{bash} mongod
`

Create a database named +alcance using mongo shell or any other graphical interface:

```{bash}
mongo
use +alcance
```

Run the following statements to create the necessary collections:

Users Collection:

```shell
db.createCollection("users")
db.users.createIndex({ "id": 1 }, { unique: true })

# Example Document
db.users.insertOne({
  email: "christopherariasar@amigo.edu.co",
  password: "12345",
  name: "Christopher Henry",
  lastName: "Arias Arcia"
})

```

Posts Collection:

```shell
db.createCollection("posts")
db.posts.createIndex({ "userId": 1 })

```

Albums Collection:

```shell
db.createCollection("albums")
db.albums.createIndex({ "userId": 1 })

```

### Database Schema Overview:

[![diagrama base de datos](https://i.ibb.co/C2Yf4K0/diagram-drawio.png "diagrama base de datos")](https://i.ibb.co/C2Yf4K0/diagram-drawio.png "diagrama base de datos")

With the following data:

[![esquema base de datos](https://i.ibb.co/g4FmFXj/alcance.png "esquema base de datos")](https://i.ibb.co/g4FmFXj/alcance.png "esquema base de datos")

### Step 4: Start the Backend

Run the following command inside the backend folder:
`{bash} npm start
`
Or, to run it in development mode:
`{bash} npm run dev
`
You should see the following output in the console:

```shell
Server running on port {tu_puerto_seleccionado}
Conexión a MongoDB establecida

```

## Frontend Configuration

### Step 1: (To be developed)....
