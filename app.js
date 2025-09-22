// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array que guarda los nombres de los amigos
let amigos = [];

/**
 * Actualiza el estado visual del botón "Añadir" según el contenido del input.
 * Añade o quita la clase 'active' en .button-add.
 */
function actualizarEstadoBoton() {
    const input = document.getElementById('amigo');
    const botonAdd = document.querySelector('.button-add');
    if (!input || !botonAdd) return;

    const tieneTexto = input.value.trim() !== '';
    if (tieneTexto) {
        botonAdd.classList.add('active');
    } else {
        botonAdd.classList.remove('active');
    }
}

/**
 * Agregar un amigo desde el input al array y actualizar la lista en pantalla.
 * Valida que el nombre no esté vacío.
 */
function agregarAmigo() {
    const input = document.getElementById('amigo');
    if (!input) return;

    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        input.focus();
        return;
    }

    // Añadir al array y actualizar la UI
    amigos.push(nombre);
    input.value = '';
    input.focus();
    actualizarLista();
    actualizarEstadoBoton(); // actualizar estado del botón después de limpiar el input
}

/**
 * Actualiza la lista visible de amigos (<ul id="listaAmigos">).
 * Limpia la lista con innerHTML = "" y agrega <li> por cada amigo.
 */
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    if (!lista) return;

    // Limpiar la lista existente
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        // Usar textContent para evitar inyección de HTML
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

/**
 * Sortea aleatoriamente un amigo del array y muestra el resultado en pantalla.
 * Valida que existan amigos antes de sortear.
 */
function sortearAmigo() {
    const resultadoEl = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Añada al menos un nombre.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreGanador = amigos[indiceAleatorio];

    if (resultadoEl) {
        // Mostrar el resultado como un <li> dentro de la lista resultado
        resultadoEl.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = `¡El amigo secreto es: ${nombreGanador}!`;
        resultadoEl.appendChild(li);
    }
}

/**
 * Mejora de usabilidad: permitir añadir con Enter en el input.
 * y escuchar cambios en el input para actualizar el color del botón.
 */
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('amigo');
    if (!input) return;

    // Permitir agregar con Enter
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            agregarAmigo();
        }
    });

    // Escuchar cambios para actualizar el estado del botón
    input.addEventListener('input', () => {
        actualizarEstadoBoton();
    });

    // Inicializar el estado del botón al cargar la página
    actualizarEstadoBoton();
});