document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario hasta que sea validado

      // Obtener los valores de los campos
      const name = document.getElementById('registerName').value.trim();
      const lastName = document.getElementById('registerLastName').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const username = document.getElementById('registerUser').value.trim();
      const password = document.getElementById('registerPassword').value.trim();

      // Validar los campos
      let isValid = true;
      if (name === "") {
          alert("El campo de nombres es obligatorio.");
          isValid = false;
      }
      if (lastName === "") {
          alert("El campo de apellidos es obligatorio.");
          isValid = false;
      }
      if (!validateEmail(email)) {
          alert("Por favor, introduce un correo electrónico válido.");
          isValid = false;
      }
      if (username === "") {
          alert("El campo de usuario es obligatorio.");
          isValid = false;
      }
      if (password === "") {
          alert("El campo de contraseña es obligatorio.");
          isValid = false;
      }

      // Si todos los campos son válidos, enviar el formulario
      if (isValid) {
          registerForm.submit();
      }
  });

  // Función para validar el formato del correo electrónico
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
