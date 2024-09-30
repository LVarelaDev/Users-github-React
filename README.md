<<<<<<< Updated upstream
# Users-github-React
=======
# Users-github-React
## Descripción

Git Users es una aplicación construida con Next.js que permite visualizar datos de usuarios utilizando la API de GitHub. La aplicación utiliza gráficos para representar la distribución de lenguajes de programación en los repositorios de cada usuario.

## Tecnologías Usadas

- **Next.js**: Framework de React para aplicaciones del lado del servidor.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Chart.js**: Biblioteca para crear gráficos interactivos.
- **Axios**: Cliente HTTP para hacer solicitudes a la API.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsivos.

## Requisitos

Asegúrate de tener instalado Node.js (version 14 o superior) y npm.

## Clonar el Repositorio

1. Clona el repositorio utilizando git:

   ```Ejecutar comando en terminal
   git clone https://github.com/tu_usuario/users-app.git
   cd users-app
   
2. Instala las dependencias del proyecto:

    ```Ejecutar comando en terminal
    npm install

4. configura la autorizacion en el archivo axios-config.ts

    configura la llave de acceso de tu github y colocala el siguiente header:
    Authorization: `token TU_KEY`,

4. **Notas Adicionales**: crea el archivo .env y agrega la siguiente llave:
    NEXT_PUBLIC_API_BASE_URL="https://api.github.com/"

5. Levanta el proyecto.

    ```Ejecutar comando en terminal
    npm run dev
>>>>>>> Stashed changes
