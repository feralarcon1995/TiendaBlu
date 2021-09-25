import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';


const CartWidget = () => {

    const { numElemCart } = useContext(CartContext);
    return (
        <div className="CartWidget">
            <Link to={'/cart'} >
                <FontAwesomeIcon icon={faShoppingCart} className="CartWidget-link" />
                <span> {numElemCart()} </span>
            </Link>
        </div>
    )
}

export default CartWidget