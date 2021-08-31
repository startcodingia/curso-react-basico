import { Link } from "react-router-dom";

const InfoBarComponent = ({ carrito, handleKeyUp, children }) => {

    return (
        <div className="bg-white py-4">
            <div>
                <input type="text" onInput={handleKeyUp} placeholder="Buscar por nombre" />
            </div>
            <Link to={'/'}>Ir a la home</Link>
            <br />
            Elementos en el carrito: {carrito.length}
            {children}
        </div>
    )
}

export default InfoBarComponent;