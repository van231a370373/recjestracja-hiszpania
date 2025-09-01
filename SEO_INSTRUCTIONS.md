
# INSTRUCCIONES SEO PARA LA WEB (Firebase/Next.js)

## Titles y meta-description únicos

En cada página, define atributos únicos:

```xml
<title>Rejestracja samochodu w Hiszpanii – Kompleksowa obsługa po polsku | RejestracjaHiszpania.com</title>
<meta name="description" content="Sprawdź, jak szybko i bezpiecznie przerejestrować auto z Polski w Hiszpanii. Kompleksowa obsługa, konsultacje po polsku, wycena w 48h, całość online.">
```
Cambia título y descripción según el contenido de cada subpágina.

## Etiquetas semánticas

- Solo un `<h1>` por página: `Rejestracja samochodu w Hiszpanii`.
- Usa `<h2>` para pasos (“Krok 1”, “FAQ”, “Kontakt”).
- Usa `<h3>` para detalles en pasos, preguntas y respuestas.

## URLs amigables

Configura rutas limpias para las secciones principales:

- `/polityka-prywatnosci`
- `/nota-prawna`
- `/faq`
- `/kontakt`
etc.

## Atributos `alt` en imágenes

Todos los `<img>` deben llevar `alt` adecuado, por ejemplo:

```xml
<img src="/auto.png" alt="Samochód do rejestracji w Hiszpanii" />
```

## Performance

- Usa imágenes comprimidas y formatos modernos (webp).
- Aprovecha la optimización de Next.js (`next/image`).

## Sitemap y robots.txt

- Añade un archivo `/public/sitemap.xml` con la estructura de tu web.
- Añade `/public/robots.txt` básico:

```text
User-agent: *
Allow: /
Sitemap: https://tudominio.com/sitemap.xml
```

## Open Graph para redes sociales

En cada página relevante, añade:

```xml
<meta property="og:title" content="Rejestracja samochodu w Hiszpanii – Kompleksowa obsługa po polsku" />
<meta property="og:description" content="Przerejestruj auto szybko, tanio i legalnie. Wycena w 48h, całość online." />
<meta property="og:image" content="https://tudominio.com/og_image.jpg" />
```

## SEO local

Añade al pie de página:

```text
Polska Grupa Konsultingowa S.L · CIF: B22682827 · Calle de Amaniel, 3, 28015 Madrid · info@bizneswhiszpanii.com
```
(Opcional: usar Schema.org `LocalBusiness` para remarcar esos datos para Google).
