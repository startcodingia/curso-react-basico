import { useContext } from "react";
import { Link } from "react-router-dom";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeContainer = () => {
    const { carrito } = useContext(EcommerceContext);
    return (
        <>
            <button><Link to={'/productos'}>Ver los productos</Link></button>
            <h1>Hola!!! Tenes tantos productos en tu carrito: {carrito.length}</h1>
        </>
    )
}

export default HomeContainer;