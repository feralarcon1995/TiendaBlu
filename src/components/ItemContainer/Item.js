import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Item = ({ product, setCartItem }) => {

    return (
        <div className="ItemContainer">
            <img src={product?.img} alt={product?.alt} />
            <h3 className="ItemInfo">{product?.nombre}</h3>
            <b className="ItemInfo">Precio: ${product?.precio} {product?.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>}</b>
            <hr />
            <Link to={`/tienda/detalle/${product?.id}` }>
                <Button className="btnAddCart" label='Ver Producto' id={product?.id} ></Button>
            </Link>
        </div>
    )
}
export default Item