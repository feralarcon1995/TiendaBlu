import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';


const CartWidget = ({cartItem}) => {

    return (
        <div className="CartWidget">
                <a href="" className="CartWidget-link" > <FontAwesomeIcon icon={faShoppingCart} /></a>
                <span>{cartItem}</span>
        </div>
    )
}

export default CartWidget