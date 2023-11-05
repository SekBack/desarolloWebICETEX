import NavHome from "../Components/NavHome";
import ProductList from "../Components/productList";
import Carrito from "../Components/carrito"
import {useState} from "react";

function Eshop () {
    const [productsSelected, setProductsSelected] = useState([]);
    return (
        <><header>
            <NavHome></NavHome>
            <Carrito selectedItems={productsSelected}></Carrito>
        </header><ProductList setSelectedItems={setProductsSelected}></ProductList></>
    )
}

export default Eshop;