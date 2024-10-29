# Crea una red para los componenetes:

## `docker network create mired`


# Construcción de una Imagen Docker

## `sudo docker build -t miapp:1 .`
Construye una imagen Docker a partir del `Dockerfile` y le asigna una etiqueta específica.

- **Acciones:**
  - `sudo`: Ejecuta el comando con permisos de superusuario.
  - `docker build`: Inicia la construcción de una imagen Docker.
  - `-t miapp:1`: Etiqueta la imagen como `miapp` y asigna la versión `1`.
  - `.`: Especifica el directorio actual como la ubicación del `Dockerfile`.


# Comandos de Docker Compose

## `sudo docker compose build`
Construye o reconstruye las imágenes de los servicios definidos en el archivo `docker-compose.yml`.

- **Acciones:**
  - Lee el `Dockerfile` y crea una nueva imagen de Docker para cada servicio.
  - Si no hay cambios en el `Dockerfile`, no vuelve a construir las imágenes existentes.

---

## `sudo docker compose up --build`
Levanta los servicios definidos en el archivo `docker-compose.yml`, construyendo imágenes si es necesario.

- **Acciones:**
  - Construye las imágenes de los servicios usando el `Dockerfile`.
  - Inicia los contenedores definidos en el archivo.
  - Muestra los logs de salida de los contenedores en la consola.

---

## `sudo docker compose start`
Inicia los contenedores previamente creados que están detenidos.

- **Acciones:**
  - Inicia los contenedores en estado detenido, sin reconstruir imágenes.

---

## `sudo docker compose stop`
Detiene los contenedores en ejecución de los servicios definidos.

- **Acciones:**
  - Detiene los contenedores activos, sin eliminarlos.

---

## `sudo docker compose logs`
Muestra los logs de salida de los contenedores de los servicios.

- **Acciones:**
  - Muestra los registros de todos los contenedores en ejecución.
  - Puedes especificar un servicio para ver sus logs únicamente.

---

## `sudo docker compose up -d`
Inicia los contenedores definidos en el archivo `docker-compose.yml` en modo "detached".

- **Acciones:**
  - Inicia los contenedores en segundo plano, permitiendo el uso continuo de la terminal.

---

## `sudo docker compose logs -f`
Muestra los logs de los contenedores en tiempo real después de haber hecho `docker compose start`.

- **Acciones:**
  - El `-f` (follow) permite seguir los logs de los contenedores en tiempo real, mostrando nuevas entradas a medida que se generan.

---

# Comandos de PostgreSQL

## `psql -h localhost -p 5434 -U usuario -d Idiomas`
Conecta a una base de datos PostgreSQL utilizando el cliente de línea de comandos.

- **Acciones:**
  - `psql`: Inicia el cliente de PostgreSQL para realizar consultas.
  - `-h localhost`: Especifica el host de conexión (en este caso, `localhost`).
  - `-p 5434`: Define el puerto de conexión, aquí `5434` en lugar del predeterminado `5432`.
  - `-U usuario`: Define el usuario que se usará para acceder a la base de datos.
  - `-d Idiomas`: Especifica la base de datos a la que se conecta, en este caso `Idiomas`.

---
