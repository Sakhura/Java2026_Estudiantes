const usuarioValido = "admin";
const contrasenaValida = "12345";

const formulario = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    const usuarioGuardado = localStorage.getItem("usuarioGuardado");
    if (usuarioGuardado){
        usuario.value = usuarioGuardado;
        console.log("Usuario cargado desde localStorage:", usuarioGuardado);
    }

const btnOlvidar = document.getElementById("btnOlvidar");
btnOlvidar.addEventListener("click", function() {
    localStorage.removeItem("usuarioGuardado");
    usuario.value = "";
    console.log("Usuario olvidado y eliminado de localStorage");

    mensaje.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Usuario olvidado.</strong> El campo de usuario ha sido limpiado.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

});


    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        console.log("Inicio de sesión exitoso");
        console.log("Usuario:", usuario);

        localStorage.setItem("usuarioGuardado", usuario);
        console.log("Usuario guardado en localStorage:", usuario);

        mensaje.innerHTML = `<div class="alert alert-success" role="alert">
            <strong>¡Inicio de sesión exitoso!</strong> Bienvenido.
            <small>Usuario guardado para futuras visitas.</small>
        </div>`;

        formulario.reset();
    } else {
        console.log("Error de inicio de sesión");
        console.log("Usuario ingresado:", usuario);
        console.log("Contraseña ingresada:", contrasena);

        mensaje.innerHTML = `<div class="alert alert-danger" role="alert">
            Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.
        </div>`;
    }
});


console.log("Sistema inicializado");
console.log("Esperando interacción del usuario");
console.log("Usuario válido: " + usuarioValido);
console.log("Contraseña válida: " + contrasenaValida);
