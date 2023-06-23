# Define la imagen base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /recipes_restaurants

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que se ejecutará tu microservicio
EXPOSE 3001

# Comando para iniciar tu microservicio
CMD [ "npm", "start" ]