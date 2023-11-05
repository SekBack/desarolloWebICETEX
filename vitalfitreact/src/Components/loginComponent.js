import icon from "../icon/user-octagon-svgrepo-com.svg";

function LoginComponent() {
    return (
        <body class="bg-info d-flex justify-content-center align-items-center vh-100">

            <div id="box" class="container bg-white p-5 col-sm-8 col-md-6 col-xl-4 rounded-5 ">
                <div id="loginIcon">
                    <img id="imagenLogin" class="position-absolute start-50 translate-middle" src={icon}
                        alt="login-icon" />
                </div>
                <form class="text-secondary " method="POST" action="" id="form">
                    <h5>Bienvenido nuevamente</h5>
                    <h6>Ingresa tus credenciales</h6>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-12 ">
                            <div class="form-floating">
                                <input class="form-control" type="email" name="email" id="email" placeholder="Correo electrónico" />
                                <label for="email">Correo electrónico</label>
                            </div><div class="form-floating">
                                <input class="form-control" type="password" name="password" id="password" placeholder="Contraseña" />
                                <label for="password">Contraseña</label>
                            </div>
                            <p class="text-center text-danger" id="mensajeErrorHTML"></p>
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
                        <a class="btn btn-danger btn-sm text-white mt-2 fw-semibold" href="/index.html">Regresar</a>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LoginComponent;