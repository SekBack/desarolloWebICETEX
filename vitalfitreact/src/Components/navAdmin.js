function NavAdmin() {
    return (
        <header>
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
                            <li className="nav-item ps-2">
                                <a href="#" className="nav-link active">Inventario</a>
                            </li>
                            <li className="nav-item ps-2">
                                <a href="#" className="nav-link active">Historial de compras</a>
                            </li>
                            <li className="nav-item ps-2">
                                <a href="#" className="nav-link active">Generar registro de ventas</a>
                            </li>
                        </ul>
                        <a onClick={console.log("admin")} className="btn btn-danger text-white fw-semibold text-center">Cerrar sesión</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavAdmin;