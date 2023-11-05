const imagenes = require.context('../producto', true); //se utiliza para traer la ruta de las imagenes a REACT

let productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 15000,
        imagen: imagenes(`./Producto1.webp`),
        descripcion: "Descripción del Producto 1",
        cantidad: 1,  //variable usada para la cantidad de productos a comprar, se modifica mediante el carrito
        precioTotalProducto: 0, //variable usada para calcular el total parcial por producto a comprar, se modifica mediante el carrito
        cantidadDisponible: 0, //variable utilizada para gestionar el inventario
        cantidadStock: 15 // cantidad del producto en stock
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 20000,
        imagen: imagenes(`./Producto2.webp`),
        descripcion: "Descripción del Producto 2",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 120000,
        imagen: imagenes(`./Producto3.webp`),
        descripcion: "Descripción del Producto 3",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 84000,
        imagen: imagenes(`./Producto4.webp`),
        descripcion: "Descripción del Producto 4",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 15000,
        imagen: imagenes(`./Producto5.webp`),
        descripcion: "Descripción del Producto 5",
        cantidad: 1,
        precioTotalProducto: 0,
        cantidadDisponible: 0,
        cantidadStock: 15
    }
]



function Products(props) {
    function addToCart(){

        props.add((arrayOld) => [... arrayOld, {nombre: props.nombre, precio: props.precio, id: props.id, descripcion: props.descripcion},])

    }
    return (
        <div key={props.id} className="col"> {// se usó key para eliminar error en la consola "Each child in a list should have a unique "key" prop."
        }
            <div className="card shadow-sm border-info border-2">
                <img src={props.imagen} className="rounded mx-auto d-block mt-1" />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{Intl.NumberFormat('COP', {
                        style: 'currency',
                        minimumFractionDigits: 0,
                        currency: "COP"
                    }).format(props.precio)}</p>
                    <p className="text-body-secondary"><i>{props.descripcion}</i></p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a className="btn btn-success" onClick={()=>addToCart()}>Agregar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductList(props) {
    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 text-center">
                    {productos.map((item) =>
                        <Products
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            descripcion={item.descripcion}
                            imagen={item.imagen}
                            add={props.setSelectedItems}>
                        </Products>)}
                </div>
            </div>
        </main>
    );
}

export default ProductList;