# Víctor Suárez — Portfolio

Portfolio personal de Víctor Suárez, especialista en ciberseguridad, sistemas y desarrollo. Es una landing estática, rápida y responsive creada para [`racorp.dev`](https://racorp.dev).

## Destacados

- Interfaz cyber oscura, responsive y accesible.
- Contenido en español e inglés: se adapta al idioma del navegador y permite cambiarlo manualmente.
- Terminal interactiva con perfil, capacidades y estado de homelab.
- Enlaces directos a proyectos de GitHub y perfil profesional de LinkedIn.
- Contacto mediante cliente de correo, sin formularios ni servicios externos.

## Stack

- Next.js con App Router y TypeScript
- Tailwind CSS
- Lucide React
- Exportación estática compatible con GitHub Pages

## Despliegue en GitHub Pages

El sitio es 100% estático y está preparado para funcionar directamente en GitHub Pages con el dominio personalizado [`racorp.dev`](https://racorp.dev):

- **Archivos estáticos en la raíz**: `index.html`, `_next/`, `404.html`, `CNAME` y `.nojekyll`.
- **Sin servidores locales**: no requiere ejecutar servidores Node.js ni procesos locales para funcionar; GitHub Pages sirve los archivos directamente al hacer push al repositorio.
- **Archivo CNAME**: mantiene el dominio personalizado apuntando a `racorp.dev`.
- **Archivo .nojekyll**: asegura que GitHub Pages sirva correctamente los recursos dentro de la carpeta `_next/`.

## Compilación (opcional)

Si en el futuro realizas cambios en el código fuente (`app/`):

```bash
npm run build
```

Esto recompila el sitio estático y actualiza automáticamente los archivos en la raíz del repositorio listos para GitHub Pages.

## Enlaces

- [Sitio web](https://racorp.dev)
- [GitHub](https://github.com/VictorSuarez24)
- [LinkedIn](https://www.linkedin.com/in/victorsuarezcruz/)
