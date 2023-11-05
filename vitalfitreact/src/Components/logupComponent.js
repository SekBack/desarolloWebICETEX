import icono from "../icon/register-svgrepo-com.svg";

function LogupComponent() {
    return (
        <body class="bg-info d-flex justify-content-center align-items-center">

            <div id="box" class="container bg-white p-5 col-sm-8 col-md-6 col-xl-4 rounded-5">

                <form class=" " method="POST" action="" id="form">
                    <div>
                        <img src={icono} id="icono" class="card-img-bottom mb-2" alt="" />
                        <h3 class="mb-4">Registro</h3>
                    </div>
                    <div >
                        <h6 class="text-secondary">Diligencia los siguientes campos:</h6>
                        <i>(*) Campos obligatorios</i>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-sm-12 ">
                            <div class="form-floating">
                                <input class="form-control" type="text" name="nombre" id="nombre" placeholder="Nombre" />
                                <label for="nombre">Nombre (*)</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="text" name="apellido" id="apellido" placeholder="Apellido" />
                                <label for="apellido">Apellido</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="email" name="email" id="email"
                                    placeholder="Correo electrónico" />
                                <label for="email">Correo electrónico (*)</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="password" name="password" id="password"
                                    placeholder="Contraseña" />
                                <label for="password">Contraseña (*)</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="password" name="repassword" id="repassword"
                                    placeholder="Confirma Contraseña" />
                                <label for="repassword">Confirma Contraseña (*)</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" type="text" name="direccion" id="direccion" placeholder="Direccion" />
                                <label for="direccion">Dirección de correspondencia</label>
                            </div>
                            <p class="text-center text-danger" id="mensajeErrorHTML"></p>
                            <div class="row justify-content-md-center ">
                                <button class="btn btn-info text-white w-100 mt-2 fw-semibold"
                                    type="submit">Registrarse</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class=" row justify-content-center mb-2">
                    <a class="btn btn-info btn-sm text-white mt-2 fw-semibold" href="/Login.html">Iniciar sesión</a>
                </div>

                <div class=" row justify-content-center">
                    <a class="btn btn-danger btn-sm text-white mt-2 fw-semibold" href="/index.html">Regresar</a>
                </div>

            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
            </script>
            <script src="/Logup.js"></script>
        </body>
    )
}

export default LogupComponent;