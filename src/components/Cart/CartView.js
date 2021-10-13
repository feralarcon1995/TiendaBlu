import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import ItemCheck from './ItemCheck';
import Button from '../Button/Button';
import './Cart.css'

const CartView = () => {

    const { carrito, clearCart, precioTotal, talleProduct, cantidadElementosDelCarrito } = useContext(CartContext);

    const ContenidoCarrito = () => {

        return (

            <div className="cart">
                <h2 className="cart-titulo">Sus compras</h2>
                <hr />
                <div className="total-contenedor">
                    <h3>Precio Total de Compra: </h3>
                    <p>$ {precioTotal()}</p>
                    <Link to={'/checkout'}><Button className="btn-compra" label="Comfirmar compra"></Button></Link>
                </div>

                <div className="producto-contenedor">
                    <div className="cart-contenedor">
                        {carrito.map((products) => (
                            <div key={products?.id} className="product-cart">
                                <ItemCheck
                                    products={products}
                                    talle={talleProduct}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btns">
                    <Link to={'/tienda'}>
                        <Button className="btn-seguir" label="Seguir Comprando" />
                    </Link>
                    <Button function={clearCart} className="btn-borrar" label="Limpiar Carrito" />
                </div>

            </div>
        )

    }

 const CarritoVacio = () => {

        return (

            <div className="cart">
                <h2 className="cart-titulo">Carrito Vacio</h2>
                <hr />
                <p className="cart-titulo">¿Porque no visitas nuestra tienda?</p>
                <Link to={'/tienda'}>
                    <Button className="contenedor-btn" label="Ir a Tienda" />
                </Link>

            </div>

        )
    }

    return (
        <>
            {(cantidadElementosDelCarrito() === 0) ? <CarritoVacio /> : <ContenidoCarrito />}
        </>
    )
}

export default CartView