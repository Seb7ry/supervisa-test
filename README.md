# Supervisa Test - Prueba Técnica Desarrollador Jr

Este proyecto corresponde a la prueba técnica para el cargo de Ingeniero en Formación. Consiste en una aplicación full stack que permite gestionar tareas a través de una interfaz web, con persistencia en base de datos. Permite crear, actualizar, listar y eliminar tareas.

##  Tecnologías utilizadas

### Backend
- **Lenguaje**: Java 21
- **Framework**: Spring Boot
- **Base de datos**: MongoDB (local, puerto por defecto 27017)
- **Puerto por defecto del servicio**: `http://localhost:8080`

### Frontend
- **Lenguaje**: JavaScript (ES6+)
- **Framework**: React
- **Gestor de paquetes**: Node.js v22.15 + npm

---

## 📁 Estructura del repositorio

```
supervisa-test
 ┣ 📂backend           → Proyecto en Java con Spring Boot
 ┣ 📂frontend          → Proyecto en React con Tailwind
 ┣ 📄README.md         → Este documento
 ┣ 📄.gitignore
```

---

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Seb7ry/supervisa-test.git
cd supervisa-test
```

### 2. Backend (Java + Spring Boot)

> Asegúrate de tener Java 21 instalado y MongoDB ejecutándose en local.

```bash
cd backend
./mvnw spring-boot:run
```

Esto inicia el backend en `http://localhost:8080`.

### 3. Frontend (React)

> Asegúrate de tener Node.js 22.15 y npm instalados.

```bash
cd frontend
npm install
npm run dev
```

Esto inicia el frontend en `http://localhost:5173`.

---

## Funcionalidades principales

- Ver lista de tareas filtradas por estado y prioridad
- Crear nuevas tareas con validaciones
- Editar tareas existentes
- Eliminar tareas con confirmación
- Métricas globales de tareas
- Alertas en pantalla para errores
- UI responsive y clara

---

## Notas adicionales

- La aplicación no requiere configuración adicional para ejecutarse.
- El backend y frontend están integrados vía peticiones HTTP REST.
- Todo se ejecuta localmente, sin dependencias externas.

---

## Autor

**Juan Sebastián Murillo Méndez**  
Prueba técnica - Supervisa Test  
GitHub: [https://github.com/Seb7ry](https://github.com/Seb7ry)
