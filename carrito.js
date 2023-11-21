class Carrito {
    constructor(productos) {
        this.productos = productos;
        this.itemsSeleccionados = [];
    }

    AgregarItem(id) {
        this.itemsSeleccionados.push(this.productos[id
        ]);
        let result = this.itemsSeleccionados.reduce((acc, item) => {
            const obj = acc.find(o => o.id === item.id);
            if (obj) {
                obj.cantidad++;
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
        result.forEach((productoCarrito) =>
            productoCarrito.precioTotalProducto = productoCarrito.precio * productoCarrito.cantidad
        ) // se determina el precio total por producto
        result.forEach((productoCarrito) =>
            productoCarrito.cantidadDisponible = productoCarrito.cantidadStock - productoCarrito.cantidad
        ) // reduce la cantidad disponible
        this.itemsSeleccionados = result
        console.log(this.itemsSeleccionados )
        this.MostrarItems();
    }

    EliminarItem(id) {
        this.itemsSeleccionados.forEach((producto, index) => {
            if (producto.id === id) {
                this.itemsSeleccionados.splice(index, 1)
                productos[id - 1].cantidad = 1; //  fue necesario incluir estas variables para resetear el contador de cantidad y precio total del producto
                productos[id - 1].precioTotalProducto = 0;
                productos[id - 1].precioTotalProducto = 15; // para regresar a la cantidad original de productos disponibles
            }
        }
        )

        this.MostrarItems();
    }

    MostrarItems() {
        let productosHTML = ""
        this.itemsSeleccionados.forEach((productoCarrito) =>
            productosHTML += `                        
            <div class="row itemsCarrito border-bottom">
            <div class="col-2">
                ${productoCarrito.cantidad}
            </div>
            <div class="col-5">
                ${productoCarrito.nombre}
            </div>
            <div class="col-3">
            ${Intl.NumberFormat('COP', {
                style: 'currency',
                minimumFractionDigits: 0,
                currency: "COP"
            }).format(productoCarrito.precioTotalProducto)}
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger btn-sm botonEliminar" onclick="eliminarClick(${productoCarrito.id})">Eliminar</button>
            </div>
            </div>`
        )
        document.getElementById("carritoHTML").innerHTML = productosHTML;
        // A continuación es para calcular el valor total 
        const sum = this.itemsSeleccionados.reduce((previous, current) => {
            return previous + current.precioTotalProducto;
        }, 0);
        let valorTotal =
            `<h4 >Total a pagar:             ${Intl.NumberFormat('COP', {
                style: 'currency',
                minimumFractionDigits: 0,
                currency: "COP"
            }).format(sum)}</h4>
        <div class="row justify-content-md-center ">
            <button class="btn btn-info text-white w-100 mt-2 fw-semibold"
                type="submit" onclick="compraDefinitiva()">Realizar compra</button>
        </div>`
        document.getElementById("totalProductos").innerHTML = valorTotal
        console.clear;
    };
}