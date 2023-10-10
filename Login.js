const email = document.getElementById("email");
const password = document.getElementById("password");
let mensajeErrorHTML = document.getElementById("mensajeErrorHTML");
const form = document.getElementById("form")

form.addEventListener("submit", e => {
    e.preventDefault()
    let mensajeError = "<hr>";
    let errores = false;
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    mensajeErrorHTML.innerHTML = "";
    if (email.value === "" ||password.value === "" ) {
        mensajeError += "Debe diligenciar todos los campos<hr>";
        errores = true;
    }
    if (password.value.length < 9) {
        mensajeError += "La contraseña debe contener más de 8 caracteres <hr>";
        errores = true;
    }
    if (!regexEmail.test(email.value)) {
        mensajeError += "El correo electrónico no es valido, asegurese de que escribe el formato correcto - <i>ejemplo@proveedor.com</i> <hr>";
        errores = true;
    }
    if (errores) {
        mensajeErrorHTML.innerHTML = mensajeError;
    }else{location.href="/Home.html";
    }
}
)
