document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario hasta que sea validado

        // Obtener los valores de los campos
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        // Validar los campos
        let isValid = true;
        if (!validateEmail(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            isValid = false;
        }
        if (password === "") {
            alert("El campo de contraseña es obligatorio.");
            isValid = false;
        }

        // Si todos los campos son válidos, enviar el formulario
        if (isValid) {
            loginForm.submit();
        }
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
