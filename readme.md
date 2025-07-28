# Actividad: Aplicación Node.js con Dockerfile

Este repositorio contiene el código base para una aplicación web simple escrita en Node.js utilizando el framework Express.

## 🎯 Objetivo

Construir una imagen Docker personalizada que permita ejecutar esta aplicación web montando el código fuente desde el host mediante un volumen.

## 🛠️ Tareas

1. Completa el contenido del archivo `Dockerfile` para que:

   - Use la imagen oficial de Node.js
   - Establezca un directorio de trabajo
   - Copie los archivos necesarios y ejecute `npm install`
   - Exponga el puerto 3000
   - Use `npm start` para arrancar la app

2. Construye la imagen:

```bash
docker build -t miapp-node .
