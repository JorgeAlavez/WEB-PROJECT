$(document).ready(() => {
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
            {
                rule: "contains",
                params: {
                    contain: ["lowercase", "uppercase", "digit", "special"]
                },
                errorMessage: "La contraseña debe incluir al menos una letra minúscula, una letra mayúscula, un dígito y un carácter especial"
            }
            
        ])
        .onSuccess((evt) => {
            evt.preventDefault();
            let email = $("#loginEmail").val();
            let contrasena = $("#loginPassword").val();
            $.ajax({
                url: "./php/index_AX.php",
                type: "POST",
                data: { email: email, contrasena: contrasena },
                cache: false,
                success: (respAX) => {
                    let objRespAX = JSON.parse(respAX);
                    let mensaje = "";
                    if (objRespAX.cod == 1) mensaje = objRespAX.msj + " " + objRespAX.data;
                    else mensaje = objRespAX.msj;
                    Swal.fire({
                        title: "TDAW-2024",
                        text: mensaje,
                        icon: objRespAX.icono,
                        didDestroy: () => {
                            if (objRespAX.cod == 1) {
                                sessionStorage.setItem("email", email);
                                window.location.href = "./php/privado.php";
                            } else {
                                window.location.reload();
                            }
                        }
                    });
                }
            });
        });
});
