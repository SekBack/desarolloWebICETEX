let productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 15000,
        imagen: "/producto/yogur.webp",
        cantidad: 1,  //variable usada para la cantidad de productos a comprar, se modifica mediante el carrito
        precioTotalProducto: 0, //variable usada para calcular el total parcial por producto a comprar, se modifica mediante el carrito
        cantidadDisponible: 0, //variable utilizada para gestionar el inventario
        cantidadStock: 15 // cantidad del producto en stock
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 20000,
        imagen: "/producto/amino.webp",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 120000,
        imagen: "/producto/D_NQ_NP_858135-MCO70739386175_072023-O.webp",
        cantidad: 1,   
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 84000,
        imagen: "/producto/creatina.webp",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 15000,
        imagen: "/producto/pan.png",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    }
]

function clickComprar(id) {
    event.preventDefault;
    eCommerceShop.AgregarItem(id);
}

function compraDefinitiva() {
    alert("Compra realizada con éxito")
    window.location.reload()
}

function eliminarClick(id){
    eCommerceShop.EliminarItem(id)
}

const productoCatalogoHTML = () => {
    let newHTML = "";
    productos.forEach((infoProducto, i) =>
        newHTML += `
    <div class="col">
    <div class="card shadow-sm border-info border-2">
        <img src="${infoProducto.imagen}" class="rounded mx-auto d-block mt-1">
        <div class="card-body">
            <h5 class="card-title">${infoProducto.nombre}</h5>
            <p class="card-text">${Intl.NumberFormat('COP', {
            style: 'currency',
            minimumFractionDigits: 0,
            currency: "COP"
        }).format(infoProducto.precio)}</p> 
                <p class="text-body-secondary"><i>Descripción del producto</i></p>
                <div class="d-flex justify-content-center align-items-center">
                <a id="botonCompra" class="btn btn-success" onclick="clickComprar(${i});">Agregar</a>
            </div>
        </div>
    </div>
</div>
    `)
    // a través del objeto Intl se le dió formato al precio
    document.getElementById("producto").innerHTML = newHTML;
};
//
productoCatalogoHTML();

let eCommerceShop = new Carrito(productos);
