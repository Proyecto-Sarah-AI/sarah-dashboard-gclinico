# Sarah: Asistente Clínico Conversacional para tratamientos contra la Obesidad

**Sarah** es una plataforma diseñada para **enfrentar** la baja adherencia a los tratamientos farmacológicos para la obesidad. El sistema **consiste** en un asistente inteligente que **acompaña** al paciente diariamente para **identificar** riesgos de abandono y **proporcionar** datos estructurados al equipo médico.

##  Métricas de Efectividad (Dashboard del Gestor)

El éxito del asistente se **mide** mediante los siguientes indicadores clave que se **mostraran** en el dashboard clínico:

| Métrica | Objetivo|
| :--- | :--- |
| **Nivel de adherencia promedia** | La adherencia diaria y acumulada|
| **Evolución del IMC** | El índice de masa corporal de los pacientes debe **mostrar** una tendencia a la baja. |
| **Nivel de participación** | Los pacientes deben **mantener** interacciones frecuentes y positivas con Sarah. |
| **Tasa de alertas** | La frecuencia de alertas por riesgo de abandono debe **disminuir** o **mantenerse** baja. |
| **Cumplimiento de citas** | Los pacientes deben **mejorar** o **mantener** un alto cumplimiento de sus eventos médicos. |
| **Comparación con grupo control** | Los usuarios de Sarah deben **presentar** mejor progreso de IMC y cumplimiento que el grupo estándar. |

##  Actores del Sistema

El sistema **gestiona** los siguientes roles de usuario:

* **Paciente**: Usuario principal que **recibe** el acompañamiento.
* **Red de Apoyo**: Personas autorizadas para **motivar** al paciente.
* **Médico / Equipo clínico**: Profesionales que **supervisan** la evolución clínica.
* **Gestor Clínico**: Responsable de **monitorear** el desempeño global y KPIs del programa.
* **Administrador del sistema**: Encargado de la gestión técnica y operativa de la plataforma.

##  Arquitectura Técnica

El sistema se **divide** en los siguientes subsistemas principales:

1.  **Aplicación paciente (web/móvil)**.
2.  **Asistente conversacional** (Agentes de interpretación y respuesta).
3.  **Almacenamiento de datos** .
4.  **Dashboards** para médicos, gestores y administradores.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- **Node.js** versión 20 o superior
- **Docker** y **Docker Compose** para el despliegue en contenedores

## Instalación y Desarrollo

Para instalar las dependencias y ejecutar el proyecto en modo desarrollo:

```bash
npm install
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite en `http://localhost:5173` (por defecto).

Para construir la aplicación para producción:

```bash
npm run build
```


## Despliegue

Este proyecto está en contenedores con Docker para facilitar el despliegue. Para desplegar la aplicación:

1. **Construir y ejecutar con Docker Compose:**

   ```bash
   docker-compose up --build
   ```

   Esto construirá la imagen del contenedor, iniciará el servicio y expondrá la aplicación en `http://localhost:8080`.

2. **Despliegue en producción:**

   - Asegúrate de que el puerto 8080 esté disponible o modifica el mapeo de puertos en `docker-compose.yml`.
   - La aplicación se sirve mediante Nginx dentro del contenedor para un rendimiento óptimo.

3. **Configuración personalizada:**

   - Si necesitas configuración personalizada de Nginx, modifica el archivo `nginx.conf` y descomenta la línea correspondiente en el `Dockerfile`.

## Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript, Vite
- **UI Components:** Base UI, Lucide React
- **Charts:** Recharts
- **Containerización:** Docker, Nginx
- **Desarrollo:** TypeScript
