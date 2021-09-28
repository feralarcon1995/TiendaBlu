import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCheck from './ItemCheck';
import Button from '../Button/Button';
import './Cart.css'

const CartView = () => {

    const { carrito, clearCart,precioTotal } = useContext(CartContext);


    const ContenidoCarrito = () => {

        return (

            <div className="cart">
                <h2 className="cart-titulo">Sus compras</h2>
                <hr />
                <div className="cart-contenedor">
                    {carrito.map((products) => (
                        <div key={products?.id} className="product-cart">
                            <ItemCheck
                                products={products}
                            />
                        </div>
                    ))}
                    <div className="total-contenedor">
                        <h3>Precio Total</h3>
                        <p>$ {precioTotal()}</p>
                        <Link to={'/checkout'}><Button className="btn-compra" label="Finalizar la compra"></Button></Link>
                    </div>
                </div>
                <Button function={clearCart} className="btn-delete" label="Eliminar todos los productos del carrito" />
            </div>
        )

    }

    const CarritoVacio = () => {

        return(

            <Link to={'/tienda'}><div className="oops"> </div></Link>

        )
    }

    return (
        <>  
     {carrito ? <ContenidoCarrito /> : <CarritoVacio />}
        </>
    )
}

export default CartView