# Usa una imagen de Node.js como base
FROM node:20

# Crea un directorio de trabajo
WORKDIR /home/app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de tu código fuente
COPY . .

# Instala nodemon como dependencia de desarrollo
RUN npm install -g nodemon

# Expone el puerto de la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["nodemon", "--config", "nodemon.json"]
