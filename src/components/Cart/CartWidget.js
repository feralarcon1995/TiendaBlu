import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';


const CartWidget = ({ cartItem }) => {

    return (
        <div className="CartWidget">
            <FontAwesomeIcon icon={faShoppingCart} className="CartWidget-link" />
            <span>{cartItem}</span>
        </div>
    )
}

export default CartWidget