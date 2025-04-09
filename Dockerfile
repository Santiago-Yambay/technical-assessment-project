# Usa imagen base de Node
FROM node:18

# Crea directorio de trabajo
WORKDIR /app

# Copia dependencias y las instala
COPY package*.json ./
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
