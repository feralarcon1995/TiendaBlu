import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';


const CartWidget = () => {

    return (
        <div className="CartWidget">
                <a href="" className="CartWidget-link" > <FontAwesomeIcon icon={faShoppingCart} /></a>
        </div>
    )
}

export default CartWidget