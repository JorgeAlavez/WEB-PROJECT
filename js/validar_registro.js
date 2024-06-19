const validarFormRegistro = new JustValidate("#registerForm", {
  tooltip: { position: "bottom" }
});

validarFormRegistro
  .addField("#registerName", [
      {
          rule: "required",
          errorMessage: "Ingresa tu nombre"
      },
      {
          rule: "maxLength",
          value: 30,
          errorMessage: "Máximo 30 caracteres"
      },
      {
        submitFormAutomatically: true,
      }
  ])
  .addField("#registerLastName", [
      {
          rule: "required",
          errorMessage: "Ingresa tus apellidos"
      },
      {
          rule: "maxLength",
          value: 30,
          errorMessage: "Máximo 30 caracteres"
      },
      {
        submitFormAutomatically: true,
      }
  ])
  .addField("#registerEmail", [
      {
          rule: 'required',
          errorMessage: "Ingresa un correo electrónico",
          submitFormAutomatically: true,
      },
      {
          rule: 'email',
          errorMessage: "Formato de email inválido",
          submitFormAutomatically: true,
      },
      {
        submitFormAutomatically: true,
      }
  ])
  .addField("#registerUser", [
      {
          rule: "required",
          errorMessage: "Ingresa un nombre de usuario",
          
      },
      {
          rule: "maxLength",
          value: 15,
          errorMessage: "Máximo 15 caracteres"
      },
      {
        submitFormAutomatically: true,
      }
  ])
  .onSuccess((evt) => {
      evt.preventDefault();
      let nombre = $("#registerName").val();
      let apellidos = $("#registerLastName").val();
      let email = $("#registerEmail").val();
      let usuario = $("#registerUser").val();
      let contrasena = $("#registerPassword").val();

      console.log("Nombre:", nombre);
      console.log("Apellidos:", apellidos);
      console.log("Email:", email);
      console.log("Usuario:", usuario);
      console.log("Contraseña:", contrasena);

      $.ajax({
          url: "./php/register_AX.php",
          type: "POST",
          data: {
              nombre: nombre,
              apellidos: apellidos,
              email: email,
              usuario: usuario,
              contrasena: contrasena
          },
          cache: false,
          success: (respAX) => {
              let objRespAX = JSON.parse(respAX);
              let mensaje = "";
              if (objRespAX.cod == 1) mensaje = objRespAX.msj + " " + objRespAX.data;
              else mensaje = objRespAX.msj;
              Swal.fire({
                  title: "Registro",
                  text: mensaje,
                  icon: objRespAX.icono,
                  didDestroy: () => {
                      if (objRespAX.cod == 1) {
                          window.location.href = "./php/privado.php";
                      } else {
                          window.location.reload();
                      }
                  }
              });
          }
      });
  });
