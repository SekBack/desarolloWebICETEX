function NavHome(props) {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="/index.html" className="navbar-brand ">
                    <strong>VitalFit</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarHeader">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Catálogo</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Usuario</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li className="">
                                    <a href="#" className="dropdown-item fw-semibold">Perfil</a>
                                </li>
                                <li className="">
                                    <a href="#" className="dropdown-item">Historial de compras</a>
                                </li>
                                <li className="">
                                    <a href="#" className="dropdown-item">Configuración</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="dropdown-item text-danger">Cerrar sesión</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                        <a data-bs-toggle="offcanvas" href="#ventanaFlotante"
                            className="btn btn-info btn-sm text-white fw-semibold me-2" role="button"
                            aria-controls="offcanvasScrolling">Carrito de compras</a>
                    </div>
                    <div className="form-floating ">
                        <input className="form-control-sm" type="text" name="busqueda" id="busqueda" placeholder="Buscar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavHome;