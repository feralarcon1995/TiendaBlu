import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';


const CartWidget = () => {

    const { cantidadElementosDelCarrito } = useContext(CartContext);
    return (

        <>
            {(cantidadElementosDelCarrito() !== 0)
                ? <div className="CartWidget">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="CartWidget-link" />
                        <span>{cantidadElementosDelCarrito()}</span>
                    </Link></div>
                :
                <p><FontAwesomeIcon icon={faShoppingCart} className="CartWidget-link" /></p>
            }
        </>

    )
}

export default CartWidget