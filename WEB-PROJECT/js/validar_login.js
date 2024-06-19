const validarFormLogin = new JustValidate("#loginForm", {
    tooltip: { position: "bottom" }
});

validarFormLogin
    .addField("#loginEmail", [
        {
            rule: 'required',
            errorMessage: "Ingresa un correo electronico"
        },
        {
            rule: 'email',
            errorMessage: "Formato de email invalido"
        },
    ])
    .addField("#loginPassword", [
        {
            rule: "required",
            errorMessage: "Ingresa una contraseña"
        },
        // {
        //     // rule: "customRegexp",
        //     // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        //     // errorMessage: "La contraseña debe incluir al menos una letra minúscula, una letra mayúscula, un dígito y un carácter especial"
        // }
    ])
    .onSuccess((evt) => {
        evt.preventDefault();
        let correo_electronico = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        console.log("Email:", correo_electronico);
        console.log("Contraseña:", password);

        $.ajax({
            url: "https://localhost/tienda_virtualv2/WEB-PROJECT/php/login_usuario_be.php",
            type: "POST",
            data: { correo_electronico: correo_electronico, password: password },
            cache: false,
            success: (respAX) => {
                let objRespAX = respAX;
                let mensaje = "";
                if (objRespAX.cod == 1) mensaje = objRespAX.msj + " " + objRespAX.data;
                else mensaje = objRespAX.msj + " " + objRespAX.data;
                Swal.fire({
                    title: "TDAW-2024",
                    text: mensaje,
                    icon: objRespAX.icono,
                    didDestroy: () => {
                        if (objRespAX.cod == 1) {
                            // sessionStorage.setItem("email", email);
                            window.location.href = "https://localhost/tienda_virtualv2/index.php";
                        } else {
                            window.location.reload();
                        }
                    }
                });
            }
        });
    });