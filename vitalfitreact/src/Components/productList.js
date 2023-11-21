import { useEffect, useState } from "react";

const imagenes = require.context('../producto', true); //se utiliza para traer la ruta de las imagenes a REACT

function Products(props) {
    function addToCart() {
        props.add((arrayOld) => [...arrayOld, { nombre: props.nombre, precio: props.precio, id: props.id },])
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
                    <p className="text-body-secondary"><i>Tipo de Pokemon: {props.descripcion}</i></p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a className="btn btn-success" onClick={() => addToCart()}>Agregar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductList(props) {

    const [products, setProducts] = useState([]);
    let pokemons = ["arbok", "vulpix", "psyduck", "kadabra", "electrode", "koffing", "pikachu", "ponyta"]

    useEffect(() => {
        pokemons.map((pokemon, id) => {
            fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon, {
                headers: {
                    accept: "application/json",
                },
                method: "GET",
                mode: "cors",
            })
                .then((response) => response.json())
                .then((data) => {
                    setProducts((arrayViejito) => [
                        ...arrayViejito,
                        {
                            id: id,
                            nombre: data.name,
                            precio: data.weight * 100,
                            imagen: data.sprites.front_default,
                            descripcion: data.types[0].type.name
                        },
                    ]);
                })
                .catch((e) => console.log(e));
        });
    }, []);

    return (
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 text-center">
                    {products.map((item) =>
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