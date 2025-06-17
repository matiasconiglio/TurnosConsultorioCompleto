TurnosConsultorio

Este proyecto demuestra una migración arquitectónica desde una **aplicación monolítica en ASP.NET Core MVC** hacia una **API RESTful en .NET** con frontend desacoplado construido con **Next.js**. Se trata de un sistema de gestión de turnos médicos.

Tecnologías utilizadas

- **Backend monolítico:** ASP.NET Core MVC + MongoDB
- **Backend RESTful:** .NET Web API + MongoDB
- **Frontend:** Next.js + React + Bootstrap
- **Base de datos:** MongoDB
- **Control de versiones:** Git + GitHub
- **CI/CD (planificado):** GitHub Actions

Módulos desarrollados

- Gestión de Pacientes (CRUD)
- Gestión de Turnos (CRUD)
- Navegación y diseño responsive

Estructura de ramas

- `main`: versión final migrada (REST)
- `monolith`: versión inicial (ASP.NET MVC)

Instrucciones de instalación

1. Clonar el repo
2. Instalar dependencias (`dotnet restore`, `npm install`)
3. Ejecutar backend: `dotnet run`
4. Ejecutar frontend: `npm run dev` desde `turnosconsultorio-frontend`

Estado del proyecto

✔️ Funcionalidad completa migrada  
✔️ API documentada con Swagger  
✔️ Separación de frontend y backend  
🔜 CI/CD automatizado (planificado)
