# Publicar Pizarra gratis con GitHub Pages

Pizarra es una web estática. En GitHub Pages guarda los datos en el propio navegador de cada dispositivo (aparece "Guardado en este dispositivo"). Haz copia desde la pestaña Datos (Exportar JSON) de vez en cuando.

## Publicar (una sola vez, unos 5 minutos)
1. Crea una cuenta gratuita en github.com.
2. Pulsa "New repository". Nombre: `pizarra`. Público. Crear.
3. En el repositorio vacío, pulsa "uploading an existing file" y arrastra TODO el contenido de esta carpeta: `index.html`, la carpeta `img`, la carpeta `vendor` y el archivo `.nojekyll`. Pulsa "Commit changes".
4. Ve a Settings, Pages. En "Build and deployment" elige "Deploy from a branch", rama `main`, carpeta `/ (root)`. Guardar.
5. En uno o dos minutos tendrás tu app en `https://TU-USUARIO.github.io/pizarra/`.

## Actualizar cuando quieras
1. Pídeme los cambios y te doy un `index.html` nuevo.
2. En tu repositorio pulsa "Add file", "Upload files", arrastra el nuevo `index.html` (sustituye al anterior) y "Commit changes".
3. En 1 o 2 minutos la web está actualizada. Tus datos no se pierden, porque viven en el navegador.

## Usarla en el móvil
Abre la dirección en Chrome o Safari y elige "Añadir a pantalla de inicio". Funciona como una app.

## Guardar los datos en una carpeta del ordenador o de Google Drive
1. Usa Chrome o Edge en el ordenador y abre la dirección de tu web.
2. Ve a la pestaña Datos, apartado "Carpeta de datos en tu ordenador", y pulsa "Elegir carpeta".
3. Para Google Drive: instala Google Drive para ordenador, crea una carpeta dentro de "Mi unidad" (por ejemplo `Pizarra-datos`) y elígela. Drive la sincroniza con la nube.
4. Pizarra escribirá `pizarra-datos.json` en cada cambio y una copia diaria en la subcarpeta `copias` (las últimas 30).
5. Al abrir la app otro día, el navegador pide permiso de nuevo: pulsa el aviso de arriba "Reconectar la carpeta".
6. No funciona en el móvil ni en Safari o Firefox. Usa un solo ordenador a la vez para evitar conflictos de sincronización.

## Guardar en Google Drive desde la web (sin instalar nada)
En la pestaña Datos, apartado "Google Drive", sigue los pasos desplegables para crear tu ID de cliente gratuito en Google Cloud (5 minutos, una sola vez). El origen autorizado es la dirección de tu web, por ejemplo `https://TU-USUARIO.github.io`. Después pulsa "Conectar con Google Drive". Funciona en cualquier ordenador o móvil, y Drive guarda el historial de versiones del archivo `pizarra-datos.json`. Cada hora aproximadamente, o al reabrir la app, puede pedir pulsar el aviso "reconectar".

## Límites a tener en cuenta
- Cada dispositivo y navegador tiene sus propios datos. Para pasar datos del móvil al ordenador: Datos, Exportar JSON, y en el otro Importar.
- Si borras los datos del navegador, se pierden: exporta una copia cada semana.
- No metas datos personales sensibles de menores si el repositorio es público: los datos no se suben al repositorio, solo la app, pero conviene saberlo.

## Si luego quieres datos compartidos entre dispositivos
Cloudflare Pages con base de datos D1 (plan gratuito), Supabase o Firebase. Pídemelo y adapto la app.

## Actualización: icono y modo sin conexión
Sube TODOS los archivos de esta carpeta al repositorio (incluidos icon-*.png, manifest.webmanifest y sw.js). Abre la web una vez con conexión y luego funcionará sin internet. Si cambias algo y no lo ves, cierra y reabre la app (o sube el número 'pizarra-v1' en sw.js).
