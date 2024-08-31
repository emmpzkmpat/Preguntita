// Función para activar el mensaje de advertencia al intentar salir de la página
function confirmarSalida(event) {
    event.preventDefault();
    event.returnValue = '';
}

// Añade el evento 'beforeunload' al cargar la página
window.addEventListener('beforeunload', confirmarSalida);

// Función para permitir la salida después de 5 segundos
function mostrarMensaje() {
    alert('¡Ya lo sabía :)!');
    
    // Remueve el evento 'beforeunload' para permitir la salida
    window.removeEventListener('beforeunload', confirmarSalida);
    
    // Retrasa la salida por 5 segundos
    setTimeout(function() {
        window.close(); // Cierra la ventana (en algunos navegadores esto puede no funcionar por políticas de seguridad)
    }, 2000);
}

//JS para el botón "No"
// Selecciona el botón "No" usando su id
const noBtn = document.getElementById('noBtn');

// Añade un evento que hace que el botón se mueva al azar cuando el mouse pasa sobre él
noBtn.addEventListener('mouseover', function() {
    // Calcula una posición aleatoria dentro del área visible de la ventana
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    // Asegura que el botón no se salga de la ventana visible
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.max(0, randomX)}px`;
    noBtn.style.top = `${Math.max(0, randomY)}px`;
});

