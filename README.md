📚 Alberto Acosta - Sitio Web del Autor

Un sitio web moderno y multiidioma para el autor Alberto Acosta, presentando sus libros y biografía con soporte completo para 4 idiomas.

🌟 Características
🌍 Multiidioma: Soporte completo para Español, Inglés, Francés y Portugués
📱 Responsive: Diseño adaptable para todos los dispositivos
🎨 Moderno: Interfaz elegante con Tailwind CSS y componentes Shadcn/ui
⚡ Rápido: Construido con Vite y React para máximo rendimiento
🔗 Enlaces directos: Botones de compra que llevan directamente a Amazon
📖 Libros Destacados
El Buen Vivir - Una propuesta de desarrollo alternativo
La Maldición de la Abundancia - Análisis de la economía extractivista
Salida de la Crisis Global - Propuestas para un mundo post-capitalista
Post-Crecimiento y Buen Vivir - Hacia una nueva economía
🚀 Tecnologías Utilizadas
Frontend: React 18 + TypeScript
Styling: Tailwind CSS + Shadcn/ui
Build Tool: Vite
Internacionalización: React i18next
Icons: Lucide React
Deployment: Vercel/Netlify ready
📁 Estructura del Proyecto
src/
├── components/           # Componentes React
│   ├── AuthorHero.tsx   # Sección héroe del autor
│   ├── BooksSection.tsx # Showcase de libros
│   ├── Footer.tsx       # Pie de página
│   └── LanguageSelector.tsx # Selector de idiomas
├── i18n/                # Sistema de traducción
│   └── index.ts         # Configuración i18next
├── lib/                 # Utilidades
└── pages/               # Páginas principales
    └── Index.tsx        # Página principal
🛠️ Instalación y Desarrollo
Prerrequisitos
Node.js 18+
pnpm (recomendado) o npm
Instalación
# Clonar el repositorio
git clone https://github.com/tu-usuario/alberto-acosta-website.git

# Navegar al directorio
cd alberto-acosta-website

# Instalar dependencias
pnpm install
Desarrollo
# Iniciar servidor de desarrollo
pnpm run dev

# Construir para producción
pnpm run build

# Vista previa de la build
pnpm run preview

# Linting
pnpm run lint
🌐 Despliegue
Vercel (Recomendado)
Conecta tu repositorio de GitHub a Vercel
Vercel detectará automáticamente la configuración de Vite
Deploy automático en cada push a main
Netlify
Conecta tu repositorio a Netlify
Configuración de build:
Build command: pnpm run build
Publish directory: dist
Manual
# Construir el proyecto
pnpm run build

# Los archivos estáticos estarán en la carpeta 'dist'
# Subir el contenido de 'dist' a tu servidor web
🌍 Idiomas Soportados
Idioma	Código	Estado
Español	es	✅ Completo
English	en	✅ Completo
Français	fr	✅ Completo
Português	pt	✅ Completo
📝 Personalización
Agregar un nuevo idioma
Edita src/i18n/index.ts
Agrega las traducciones en el objeto resources
Actualiza el componente LanguageSelector.tsx
Modificar libros
Edita las traducciones en src/i18n/index.ts en la sección books.

Cambiar información del autor
Modifica las traducciones en la sección author del archivo de i18n.

🎨 Diseño
Colores: Esquema moderno con tonos azules y grises
Tipografía: Fuentes del sistema optimizadas para legibilidad
Layout: Grid responsivo con breakpoints móvil-first
Componentes: Biblioteca Shadcn/ui para consistencia
📊 Métricas de Build
JavaScript: ~406KB (gzipped: ~132KB)
CSS: ~65KB (gzipped: ~11KB)
HTML: ~1KB
Tiempo de build: ~5 segundos
🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor:

Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/nueva-caracteristica)
Commit tus cambios (git commit -m 'Agregar nueva característica')
Push a la rama (git push origin feature/nueva-caracteristica)
Abre un Pull Request
📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

📞 Contacto
Alberto Acosta

Email: contacto@albertoacosta.com
Website: albertoacosta.com
Twitter: @AlbertoAcosta
Desarrollado con ❤️ para promover el pensamiento crítico y el Buen Vivir
```
