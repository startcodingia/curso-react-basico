import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import CardComponent from "../component/CardComponent"
import InfoBarComponent from "../component/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
    const { products, carrito, setCarrito, fetchData, setProducts } = useContext(EcommerceContext);
    const { busqueda } = useParams();

    useEffect(() => {
        fetchData(busqueda);
        return () => {
        }
    }, [busqueda]);

    const AgregarAlCarrito = (event, product) => {
        carrito.push(product);
        setCarrito([...carrito]);
        console.log(carrito);
    }

    const handleKeyUp = (e) => {
        const productsFilter = products.filter(element => {
            if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
                return true;
            }
            return false;
        })
        setProducts(productsFilter);
    }

    return (
        <div className="container bg-warning">
            <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />
            <div className="row px-2 py-2">
                {products.map((element, index) => {
                    return (
                        <div key={index} className="col-4">
                            <CardComponent product={element} agregarAlCarrito={AgregarAlCarrito} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductsContainer;