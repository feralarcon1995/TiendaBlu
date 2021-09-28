import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ItemCheck = ({ products}) => {


    const { deleteItem } = useContext(CartContext)


    return (
        <>
            <div key={products?.id} className="product-cart">
                <div className="product-img">
                    <img src={products?.img} />
                </div>
                <div className="product-info">
                    <h3> Nombre: {products?.nombre} </h3>
                    <h4> Unidades: {products?.quantity}</h4>
                    <h5> Precio ${products?.precio}</h5>
                    <p>Talle : {products.valor}</p>
                    < FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(products?.id)} />
                </div>
                <div className="total-contenedor">
                    <h3>Precio Total</h3>
                    <p>$ {Number(products.precio) * Number(products.quantity)}</p>
                </div>
            </div>


        </ >
    )
}

export default ItemCheck
