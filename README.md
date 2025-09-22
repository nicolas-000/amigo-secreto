# Amigo Secreto

Una pequeña aplicación web para crear una lista de amigos y realizar un sorteo aleatorio para elegir al "amigo secreto". Está construida con HTML, CSS y JavaScript puro (sin frameworks) y pensada como ejercicio de lógica y manipulación del DOM.

## Demo
- Despliegue en GitHub Pages para ver la aplicación en el navegador: `https://nicolas-000.github.io/amigo-secreto/`.

## Características
- Añadir nombres a una lista de participantes.
- Validación del input (no permite nombres vacíos).
- Visualización en tiempo real de la lista de amigos.
- Sorteo aleatorio usando Math.random() y Math.floor().
- Accesibilidad básica (atributos ARIA y soporte para añadir con la tecla Enter).
- Cambio visual del botón "Añadir": el color del botón cambia cuando hay texto válido en el input (mejora de usabilidad).

## Tecnologías
- HTML5
- CSS3
- JavaScript (ES6+)

## Estructura de archivos
- index.html — Interfaz principal.
- style.css — Estilos.
- app.js — Lógica de la aplicación (agregar, renderizar, sortear y estado del botón).
- assets/ — Imágenes e íconos usados por la interfaz.

Ejemplo:
```
/
├─ index.html
├─ style.css
├─ app.js
└─ assets/
   ├─ amigo-secreto.png
   └─ play_circle_outline.png
```

## Instalación y ejecución (local)
No requiere build ni dependencias. Puedes abrir `index.html` directamente en el navegador, pero se recomienda servirlo sobre un servidor local para evitar problemas con políticas de seguridad del navegador.

Opción 1 — Abrir directamente:
- Abrir `index.html` con tu navegador.

Opción 2 — VSCode Live Server:
- Instalar la extensión Live Server y hacer clic en "Go Live".

## Uso
1. Escribe el nombre de un amigo en el campo de texto.
2. Observa que el botón "Añadir" cambia de color cuando hay texto válido.
3. Haz clic en "Añadir" o presiona Enter. El nombre aparecerá en la lista.
4. Repite para todos los participantes.
5. Pulsa el botón "Sortear amigo" para seleccionar aleatoriamente un nombre.
6. El resultado se mostrará en la sección de resultado.

Validaciones:
- No se aceptan entradas vacías. Si se intenta añadir una cadena vacía, se muestra una alerta: "Por favor, inserte un nombre."

## Accesibilidad y ARIA
- El elemento `ul#listaAmigos` utiliza `role="list"` y tiene `aria-labelledby`.
- La sección de resultado usa `aria-live="polite"` para anunciar el resultado del sorteo a tecnologías asistivas.
- Se añade el soporte de teclado: presionar Enter en el input añade el nombre.

Sugerencias de accesibilidad futuras:
- Añadir descripciones más detalladas para imágenes (`alt`) y atributos `aria-label` donde sea necesario.
- Soporte para contraste y modo alto contraste.

## Posibles mejoras
- Evitar nombres duplicados o mostrar advertencia al intentar añadir duplicados.
- Añadir opción para eliminar participantes individuales o limpiar la lista.
- Guardar la lista en localStorage para persistencia entre recargas.
- Animaciones para el sorteo (ruleta, efectos visuales).
- Tests automatizados con herramientas como Jest + JSDOM (si el proyecto se estructura en módulos).

## Contribuir
1. Haz fork del repositorio.
2. Crea una rama: `git checkout -b feature/nombre-de-tu-feature`
3. Realiza cambios y haz commit: `git commit -m "Descripción de los cambios"`
4. Empuja a tu fork: `git push origin feature/nombre-de-tu-feature`
5. Abre un Pull Request describiendo los cambios.

Por favor, mantén las contribuciones simples y documenta los cambios.

#### ¡Gracias por revisar el proyecto!