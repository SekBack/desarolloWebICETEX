function Contact() {
    return (
        <div className="container mt-auto text-white-50" id="contacto">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 pb-5">
                    <div id="contactStyle" className="card rounded-0 bg-secondary">
                        <div className="card-header p-0 ">
                            <div className="text-white text-center p-2">
                                <h3>Contactanos</h3>
                                <p className="m-0">Escribe la siguiente información y te responderemos prontamente</p>
                            </div>
                        </div>
                        <div className="card-body p-3 ">
                            <div className="form-group">
                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="nombre" name="nombre"
                                        placeholder="Nombre y Apellido" required />
                                    <label htmlFor="nombre">Nombre y Apellido</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="email" name="email"
                                        placeholder="ejemplo@gmail.com" required />
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-floating mb-2">
                                    <textarea className="form-control" placeholder="Envianos tu Mensaje"
                                        required></textarea>
                                    <label>Envianos tu mensaje</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Enviar" className="btn btn-info rounded-0 py-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact;