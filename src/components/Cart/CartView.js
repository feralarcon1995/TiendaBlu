import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import './Cart.css'

const CartView = () => {

    const { cart, deleteProduct, numElemCart, clearCart, precioTotal } = useContext(CartContext)

    return (
        <>
            {(numElemCart() !== 0)
                ? <div className="cart">
                    <h2 className="cart-titulo">Sus compras</h2>
                    <hr />
                    <div className="cart-contenedor">
                    {cart.map(products => (
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
                    ))}
                    <div className="total-contenedor">
                        <h3>Precio Total</h3>
                        <p>$ {precioTotal}</p>
                        <Link to={'/checkout'}><Button className="btn-compra" label="Finalizar la compra"></Button></Link>
                    </div>
                    </div>
                    <Button function={clearCart} className="btn-delete" label="Eliminar todos los productos del carrito" />
                </div>
                :
                <Link to={'/tienda'}><div className="oops"> </div></Link>

            }


        </>
    )
}

export default CartView