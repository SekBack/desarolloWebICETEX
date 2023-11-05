function BodyIndex() {
    return (
        <div>
            <div className="container my-3">
                <div className="p-5 text-center rounded-3">
                    <h1 className="text-body-emphasis">VitalFit</h1>
                    <h4>Aliado de tu cuerpo</h4>
                    <div className="d-inline-flex gap-2 mb-4 mt-2">
                        <button onClick={console.log("Index")} className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                            type="button">
                            Ingresar
                        </button>
                        <button onClick={console.log("Index")} className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                            Registrate
                        </button>
                    </div>
                    <div id="quienSomos">
                        <h4 className="text-secondary pt-5 pb-2 text">¿QUIENES SOMOS?</h4>
                        <p id="quienSomosText" className="col-lg-8 mx-auto fs-5 text-secondary">

                            Somos una compañia dedicada a la distribución ONLINE de suplementos e implementos para
                            deportistas.
                            <br /><br />
                            VitalFit cuenta con un grupo de colaboradores capacitados para conseguir la excelencia en la
                            experiencia de su visita en nuestra tienda. Estaremos atentos(as) a dar respuesta oportuna a las
                            inquietudes que puedan surgir durante y después de su compra, orientado a la mejora del servicio
                            que nuestros clientes se merecen y según sus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyIndex;