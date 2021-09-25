import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';


const ItemCheck = ({products,deleteProduct,precioTotal}) => {
    return (
        <div className="cart-contenedor">
            <div key={products?.id} className="product-cart">
                <div>
                    <img src={products?.img} />
                </div>
                <div>
                    <h3> Nombre: {products?.nombre} </h3>
                    <h4> Unidades: {products?.stock}</h4>
                    <h5> Precio ${products?.precio * products?.stock}</h5>
                    < FontAwesomeIcon icon={faTrash} onClick={() => deleteProduct(products?.id)} />
                </div>
            </div>

            <div className="total-contenedor">
                <h3>Precio Total</h3>
                <p>$ {precioTotal}</p>
                <Link to={'/checkout'}><Button className="btn-compra" label="Finalizar la compra"></Button></Link>
            </div>
        </div>
    )
}

export default ItemCheck
