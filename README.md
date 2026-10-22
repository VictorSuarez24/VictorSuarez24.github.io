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

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la página.

## Compilación

```bash
npm run build
```

El sitio estático se genera en `out/`. `next.config.js` usa `output: 'export'` e imágenes sin optimización para mantener compatibilidad total con GitHub Pages.

## Despliegue

El workflow de [GitHub Actions](.github/workflows/deploy.yml) compila y despliega automáticamente al hacer push a `main`. El archivo `public/CNAME` conserva el dominio personalizado en cada publicación.

## Enlaces

- [Sitio web](https://racorp.dev)
- [GitHub](https://github.com/VictorSuarez24)
- [LinkedIn](https://www.linkedin.com/in/victorsuarezcruz/)
