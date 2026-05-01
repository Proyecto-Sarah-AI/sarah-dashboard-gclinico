# Etapa 1: build con Node
FROM node:20-alpine AS builder

WORKDIR /app

# Verify Node.js and npm are available
RUN node --version && npm --version

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Etapa 2: servir con Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build de Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional) Configuración custom de nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]