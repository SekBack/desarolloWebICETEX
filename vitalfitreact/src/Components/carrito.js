import { useState } from "react";

function Productos(props) {
    const productConsolidados = {};
    productConsolidados.map => (+)
    return (
        <div className="row itemsCarrito border-bottom">
            <div className="col-2">
                Cantidad
            </div>
            <div className="col-5">
                {props.nombre}
            </div>
            <div className="col-3">
                {Intl.NumberFormat('COP', {
                    style: 'currency',
                    minimumFractionDigits: 0,
                    currency: "COP"
                }).format(555555)}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger btn-sm botonEliminar" onClick={()=>console.log("hola")}>Eliminar</button>
            </div>
        </div>
    )
}

function Carrito(props) {
    return (
        <div className="offcanvas offcanvas-end border-3 border-info" tabIndex="-1" id="ventanaFlotante"
            aria-labelledby="offcanvasScrollingLabel" data-bs-scroll="true" data-bs-backdrop="false">
            <div className="offcanvas-header bg-info">
                <h4 className="offcanvas-title fw-semibold text-white" id="offcanvasExampleLabel">Carrito de compras</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="text-center p-4 ">
                    <div className="row itemsCarrito">
                        <div className="col-2 fw-semibold">
                            Cantidad
                        </div>
                        <div className="col-5 fw-semibold">
                            Nombre
                        </div>
                        <div className="col-3 fw-semibold">
                            Total
                        </div>
                        <div className="col-2 fw-semibold">
                            Eliminar
                        </div>
                        <hr />
                        <div id="carritoHTML">
                        {props.selectedItems.map((item) =>
                        <Productos
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            descripcion={item.descripcion}
                            imagen={item.imagen}
                            add={props.setSelectedItems}>
                        </Productos>)}
                        </div>
                        <hr />
                        <div id="totalProductos"><h4 >Total a pagar:             {Intl.NumberFormat('COP', {
                            style: 'currency',
                            minimumFractionDigits: 0,
                            currency: "COP"
                        }).format(props.total)}</h4>
                            <div className="row justify-content-md-center ">
                                <button className="btn btn-info text-white w-100 mt-2 fw-semibold"
                                    type="submit" onClick={()=>console.log("Holax")}>Realizar compra</button>
                            </div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;