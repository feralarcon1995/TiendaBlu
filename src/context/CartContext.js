
import { useState, createContext } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    //FUNCION QUE AGREGA CARRITO
    const addCart = (products) => {
        setCart([
            ...cart,
            products
        ])
    }

    //FUNCION ELIMINAR PRODUCTO
    const deleteProduct = (id) => {
        setCart(cart.filter(products => products.id !== id))
    }

    //FUNCION ELEMENTOS DEL CARRITO
    const numElemCart = () => {
        return cart.reduce((suma, products) => suma + products.stock, 0)
    }

    //FUNCION VACIAR CARRITO
    const clearCart = () => {
        setCart([])
    }

    //FUNCION PARA NO DUPLICAR ELEMENTOS DEL CARRITO
    const isInCart = (id) => {
        return cart.some(element => element.id === id);
    }

    //FUNCION PARA CALCULAR PRECIO TOTAL
    const precioTotal = () => {
        return cart.reduce((acc, products) => acc + products.precio * products.cantidad, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addCart, deleteProduct, numElemCart, clearCart, isInCart, precioTotal }}>
            {children}
        </CartContext.Provider>
    )
}



