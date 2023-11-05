function NavIndex() {
    return (
        <header id="navIndex" className="d-flex flex-wrap justify-content-around py-3 mb-4 border-bottom bg-secondary"
            >
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto ps-3 text-decoration-none">
                <span className="fs-4 text-white"><strong>VitalFit</strong></span>
            </a>
            <div className="form-floating me-3 row align-items-center justify-content-center " >
                <input className="form-control-sm" type="text" name="busqueda" id="busqueda" placeholder="Buscar" />
            </div>

            <ul className="nav nav-pills">
                <li className="nav-item fw-semibold"><a href="/Login.html" className="nav-link active" aria-current="page">Ingresar</a></li>
                <li className="nav-item"><a href="/Logup.html" className="nav-link text-white">Registrate</a></li>

            </ul>

        </header>)
}

export default NavIndex;