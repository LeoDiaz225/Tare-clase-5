document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombreInput = document.getElementById('nombre');
    var apellidoInput = document.getElementById('apellido');
    var emailInput = document.getElementById('email');
    var fechaNacimientoInput = document.getElementById('fechaNacimiento');
    var nombreError = document.getElementById('nombreError');
    var apellidoError = document.getElementById('apellidoError');
    var emailError = document.getElementById('emailError');
    var fechaNacimientoError = document.getElementById('fechaNacimientoError');
    var nombreHelp = document.getElementById('nombreHelp');
    var apellidoHelp = document.getElementById('apellidoHelp');
    var emailHelp = document.getElementById('emailHelp');
    var fechaNacimientoHelp = document.getElementById('fechaNacimientoHelp');

    var isValid = true;

    // Validación para el campo nombre
    if (nombreInput.value.trim() === '') {
        nombreInput.classList.add('error');
        nombreError.textContent = 'El nombre es obligatorio';
        nombreError.style.display = 'inline';
        nombreHelp.style.display = 'none';  // Ocultar mensaje de ayuda
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
        nombreInput.classList.add('error');
        nombreError.textContent = 'El nombre solo puede contener letras';
        nombreError.style.display = 'inline';
        nombreHelp.style.display = 'none';  // Ocultar mensaje de ayuda
        isValid = false;
    } else {
        nombreInput.classList.remove('error');
        nombreError.style.display = 'none';
        nombreHelp.style.display = 'inline';  // Mostrar mensaje de ayuda si es válido
    }

    // Validación para el campo apellido
    if (apellidoInput.value.trim() === '') {
        apellidoInput.classList.add('error');
        apellidoError.textContent = 'El apellido es obligatorio';
        apellidoError.style.display = 'inline';
        apellidoHelp.style.display = 'none';  // Ocultar mensaje de ayuda
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(apellidoInput.value)) {
        apellidoInput.classList.add('error');
        apellidoError.textContent = 'El apellido solo puede contener letras';
        apellidoError.style.display = 'inline';
        apellidoHelp.style.display = 'none';  // Ocultar mensaje de ayuda
        isValid = false;
    } else {
        apellidoInput.classList.remove('error');
        apellidoError.style.display = 'none';
        apellidoHelp.style.display = 'inline';  // Mostrar mensaje de ayuda si es válido
    }

    // Validación para el campo email
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        emailError.textContent = 'El email es obligatorio';
        emailError.style.display = 'inline';
        emailHelp.style.display = 'none';  // Ocultar mensaje de ayuda
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailInput.classList.add('error');
        emailError.textContent = 'El formato es incorrecto';
        emailError.style.display = 'inline';
        emailHelp.style.display = 'none';  // Ocultar mensaje de ayuda
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
        emailHelp.style.display = 'inline';  // Mostrar mensaje de ayuda si es válido
    }

    if (isValid) {
        alert('Formulario enviado correctamente');
    }
});
