# Usa una imagen de Node.js como base
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de dependencias del frontend
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente del frontend
COPY . .  

# Expone el puerto de Vite (por defecto, 5173)
EXPOSE 5173

# Construye la aplicación (si es producción) o ejecuta el servidor de desarrollo (para desarrollo)
CMD ["npm", "run", "dev"]
