import icono from "../icon/register-svgrepo-com.svg";
import { useState } from "react";


function LogupComponent() {

    const [errormsj, setErrormsj] = useState();

    function enviarLogup(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const direccion = document.getElementById("direccion").value;
        const repassword = document.getElementById("repassword").value;

        if (!validacionInputs(nombre, email, password, repassword)) {
            fetch("/logup", {
                method: "post",
                headers: {
                    "Content-type": "Application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password,
                    direccion: direccion
                })
            })
            alert("Cuenta creada con exito")
            window.location = '/'
        }

    }

    function validacionInputs(nombre, email, password, repassword) {
        let errores = false;
        let mensajeError = "";
        let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if (nombre === "" || email === "" || password === "" || repassword == null) {
            mensajeError += "- Debe diligenciar todos los campos obligatorios \n";
            errores = true;
        }
        if (password.length < 9) {
            mensajeError += "- La contraseña debe contener más de 8 caracteres\n";
            errores = true;
        }
        if (!regexEmail.test(email)) {
            mensajeError += "- El correo electrónico no es valido, asegurese de que escribe el formato correcto (ejemplo@proveedor.com)\n";
            console.log(mensajeError)
            errores = true;
        }
        if (password != repassword) {
            mensajeError += "- Las contraseñas no coinciden";
            errores = true;
        }
        if (errores) {
            setErrormsj(mensajeError);
        } else {
            errores = false;
            setErrormsj("")
            
        }
        return errores
    }

    function Validacion(props) {
        return props.msjError
    }

    return (
        <div className="bg-info d-flex justify-content-center align-items-center">
            <div id="box" className="container bg-white p-5 col-sm-8 col-md-6 col-xl-4 rounded-5">

                <form className=" " action="" id="form" onSubmit={enviarLogup}>
                    <div>
                        <img src={icono} id="icono" className="card-img-bottom mb-2" alt="" />
                        <h3 className="mb-4">Registro</h3>
                    </div>
                    <div >
                        <h6 className="text-secondary">Diligencia los siguientes campos:</h6>
                        <i>(*) Campos obligatorios</i>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 ">
                            <div className="form-floating">
                                <input className="form-control" type="text" name="nombre" id="nombre" placeholder="Nombre" />
                                <label htmlFor="nombre">Nombre (*)</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" type="text" name="apellido" id="apellido" placeholder="Apellido" />
                                <label htmlFor="apellido">Apellido</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" type="email" name="email" id="email"
                                    placeholder="Correo electrónico" />
                                <label htmlFor="email">Correo electrónico (*)</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" type="password" name="password" id="password"
                                    placeholder="Contraseña" />
                                <label htmlFor="password">Contraseña (*)</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" type="password" name="repassword" id="repassword"
                                    placeholder="Confirma Contraseña" />
                                <label htmlFor="repassword">Confirma Contraseña (*)</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" type="text" name="direccion" id="direccion" placeholder="Direccion" />
                                <label htmlFor="direccion">Dirección de correspondencia</label>
                            </div>
                            <p className="text-center text-danger">
                                <Validacion msjError={errormsj}></Validacion>
                            </p>
                            <div className="row justify-content-md-center ">
                                <button className="btn btn-info text-white w-100 mt-2 fw-semibold"
                                    type="submit" >Registrarse</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className=" row justify-content-center mb-2">
                    <a className="btn btn-info btn-sm text-white mt-2 fw-semibold" href="/login">Iniciar sesión</a>
                </div>
                <div className=" row justify-content-center">
                    <a className="btn btn-danger btn-sm text-white mt-2 fw-semibold" href="/">Regresar</a>
                </div>
            </div>
        </div>
    )
}

export default LogupComponent;