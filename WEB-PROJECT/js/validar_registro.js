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
        
    ])
    .addField("#registerEmail", [
        {
            rule: 'required',
            errorMessage: "Ingresa un correo electrónico",
            
        },
        {
            rule: 'email',
            errorMessage: "Formato de email inválido",
            
        },
        
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
            url: "https://localhost/tienda_virtualv2/WEB-PROJECT/php/registro_usuario_be.php",
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
                let objRespAX = respAX;
                let mensaje = "";
                if (objRespAX.cod == 1) mensaje = objRespAX.msj + " " + objRespAX.data;
                else mensaje = objRespAX.msj;
                Swal.fire({
                    title: "Registro",
                    text: mensaje,
                    icon: objRespAX.icono,
                    didDestroy: () => {
                        if (objRespAX.cod == 1) {
                            window.location.href = "https://localhost/tienda_virtualv2/index.php";
                        } else {
                            window.location.reload();
                        }
                    }
                });
            }
        });
    });