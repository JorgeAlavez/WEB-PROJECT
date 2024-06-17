$(document).ready(()=>{
  const validarFormRegistro = new JustValidate("#registerForm",{
    tooltip:{position:"bottom"}
  });
  const validarFormLogin = new JustValidate("#loginForm",{
    tooltip:{position:"bottom"}
  });

  validarFormRegistro
  .addField("#registerName",[
    {
      rule:"required",
      errorMessage:"Ingresa tu nombre"
    },
    {
      rule:"maxLength",
      value:30,
      errorMessage:"A lo más 30 dígitos"
    }
  ])
  .addField("#registerLastName",[
    {
      rule:"required",
      errorMessage:"Ingresa tus apellidos"
    },
    {
      rule:"maxLength",
      value:30,
      errorMessage:"A lo más 30 dígitos"
    }
  ])
  .addField("#registerEmail",[
    {
      rule: 'required',
      errorMessage:"Ingresa un correo electronico"
    },
    {
      rule: 'email',
      errorMessage:"Formato de email invalido"
    },
  ])
  .addField("#registerUser",[
    {
      rule:"required",
      errorMessage:"Ingresa un nombre de usuario"
    },
    {
      rule:"maxLength",
      value:15,
      errorMessage:"A lo más 15 dígitos"
    }
  ])
  .addField("#registerPassword",[
    {
      rule:"required",
      errorMessage:"Ingresa una contraseña"
    },
    {
      rule: "contains",
      params: {
          contain: ["lowercase", "uppercase", "digit", "special"]
      },
      errorMessage: "La contraseña debe incluir al menos una letra minúscula, una letra mayúscula, un dígito y un carácter especial"
    }
  ])






  validarFormLogin
  addField("#loginEmail",[
    {
      rule: 'required',
      errorMessage:"Ingresa un correo electronico"
    },
    {
      rule: 'email',
      errorMessage:"Formato de email invalido"
    },
  ])
  .addField("#loginPassword",[
    {
      rule:"required",
      errorMessage:"Ingresa una contraseña"
    },
    {
      rule:"strongPassword",
      errorMessage:"8 caracteres (1 minus, 1 mayus, 1 dígito)"
    }
  ])
  
  .onSuccess((evt)=>{
    evt.preventDefault();
    let email = $("#loginEmail").val();
    let contrasena = $("#loginPassword").val();
    $.ajax({
      url:"./php/index_AX.php",
      type:"POST",
      data:{email:email, contrasena:contrasena},
      cache:false,
      success:(respAX)=>{
        let objRespAX = JSON.parse(respAX);
        let mensaje = "";
        if(objRespAX.cod == 1) mensaje = objRespAX.msj + " " + objRespAX.data;
        else mensaje = objRespAX.msj;
        Swal.fire({
          title:"TDAW-2024",
          text: mensaje,
          icon:objRespAX.icono,
          didDestroy:()=>{
            if(objRespAX.cod == 1){
              sessionStorage.setItem("email",email);
              window.location.href = "./php/privado.php";
            }else{
              window.location.reload();
            }
          }
        });
      }
    });
  });
})