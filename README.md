## 🚀 Inicio rápido

Sigue estos pasos para configurar el proyecto localmente:

1. **Clona el repositorio:**

2. **Accede a la carpeta del proyecto:**

3. **Instala las dependencias de PHP:**

    ```bash
     composer install
    ```

4. **Copia la configuración de `.env`:**

```bash
   cp .env.example .env
```

5. **Genera la clave de la aplicación:**

````bash
  php artisan key:generate
  ```

6. **Configura la base de datos en el archivo `.env`** con tus credenciales locales.

7. **Ejecutar las migraciones de la base de datos e inicializar los datos de ejemplo:**

```bash
  php artisan migrate:fresh --seed
  ```

8. **Enlazar el almacenamiento para los archivos multimedia:**

```bash
  php artisan storage:link
  ```

9. **Instalar las dependencias de JavaScript y CSS:**

```bash
  npm install && npm run dev
  ```

10. **Iniciar el servidor de desarrollo de Laravel:**

```bash
  php artisan serve
  ```

````
