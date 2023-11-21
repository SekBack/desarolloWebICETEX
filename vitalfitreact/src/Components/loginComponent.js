import icon from "../icon/user-octagon-svgrepo-com.svg";
import { useState } from "react";

function LoginComponent() {

    const [errormsj, setErrormsj] = useState();


    function enviarLogin(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!validacionInputs(email, password)) {
            fetch("/login", {
                method: "post",
                headers: {
                    "Content-type": "Application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            alert("Acceso correcto")
            window.location = '/home'
        }
    }

    function validacionInputs(email, password) {
        let mensajeError = "";
        let errores = false;
        let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if (email === "" || password === "") {
            mensajeError += "- Debe diligenciar todos los campos \n";
            errores = true;
        }
        if (password.length < 9) {
            mensajeError += "- La contraseña debe contener más de 8 caracteres \n";
            errores = true;
        }
        if (!regexEmail.test(email)) {
            mensajeError += "- El correo electrónico no es valido, asegurese de que escribe el formato correcto (ejemplo@proveedor.com) \n";
            errores = true;
        }
        if (errores) {
            setErrormsj(mensajeError);
        } else {
            errores = false;
            setErrormsj("");
        }
        return errores
    }

    function Validacion(props) {
        return props.msjError
    }

    return (
        <div className="bg-info d-flex justify-content-center align-items-center vh-100">
            <div id="box" class="container bg-white p-5 col-sm-8 col-md-6 col-xl-4 rounded-5 ">
                <div id="loginIcon">
                    <img id="imagenLogin" class="position-absolute start-50 translate-middle" src={icon}
                        alt="login-icon" />
                </div>
                <form class="text-secondary " action="" id="form" onSubmit={enviarLogin}>
                    <h5>Bienvenido nuevamente</h5>
                    <h6>Ingresa tus credenciales</h6>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-12 " >
                            <div class="form-floating">
                                <input class="form-control" type="email" name="email" id="email" placeholder="Correo electrónico" />
                                <label for="email">Correo electrónico</label>
                            </div><div class="form-floating">
                                <input class="form-control" type="password" name="password" id="password" placeholder="Contraseña" />
                                <label for="password">Contraseña</label>
                            </div>
                            <p class="text-center text-danger" id="mensajeErrorHTML">
                                <Validacion msjError={errormsj}></Validacion>
                            </p>
                            <a href="" id="lostPassword"
                                class=" row justify-content-center text-decoration-none fst-italic fw-semibold text-info"
                            >¿Olvidaste tu Contraseña?</a>
                            <div class="row justify-content-md-center ">
                                <button class="btn btn-info text-white w-100 mt-2 fw-semibold"
                                    type="submit">Iniciar sesión</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="d-flex gap-1 justify-content-center mt-1">
                    <p class="text-secondary">¿No tienes aún una cuenta? </p>
                    <a href="/Logup.html" class="text-decoration-none text-info fw-semibold">Registrate</a>
                </div>
                <div class="">
                    <div class=" row justify-content-center">
                        <a class="btn btn-danger btn-sm text-white mt-2 fw-semibold" href="/">Regresar</a>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default LoginComponent;