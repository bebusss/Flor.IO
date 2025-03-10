// Obtener el formulario y el contenedor de errores
var formulario = document.getElementById('formulario');
var error = document.getElementById('error');

// Función para validar el nombre
function validarNombre(e) {
    var nombre = formulario.nombre;
    if (nombre.value.trim() === '') {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, ingresa tu nombre</li>';
        e.preventDefault(); // Evita que el formulario se envíe
    }
}

// Función para validar el correo electrónico
function validarEmail(e) {
    var correo = formulario.correo;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo.value)) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, ingresa un correo electrónico válido</li>';
        e.preventDefault();
    }
}

// Función para validar el género
function validarGenero(e) {
    var genero = formulario.genero;
    var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    if (!generoSeleccionado) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, selecciona tu género</li>';
        e.preventDefault();
    }
}

// Función para validar los términos y condiciones
function validarTerminos(e) {
    var terminos = formulario.terminos;
    if (!terminos.checked) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor, acepta los términos y condiciones</li>';
        e.preventDefault();
    }
}

// Función principal que valida todo el formulario
function validarForm(e) {
    // Reiniciar el mensaje de error
    error.innerHTML = '';
    error.style.display = 'none';

    // Validar cada campo
    validarNombre(e);
    validarEmail(e);
    validarGenero(e);
    validarTerminos(e);
}

// Asignar la función de validación al evento "submit" del formulario
formulario.addEventListener('submit', validarForm);