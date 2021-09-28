
import { useState, createContext } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState(undefined);

    const [quantity, setQuantity] = useState(0);


    //FUNCION BORRAR PRODUCTO
    const deleteItem = (itemId) => {
        const newList = carrito.filter((item) => item.id !== itemId);
        setCarrito(newList);
    };

    //FUNCION CAMBIA CANTIDAD DE PRODUCTO
    const changeQuantity = (count) => {
        setQuantity(count);
    };

    //FUNCION LIMPA CARRITO
    const clearCart = () => {
        setCarrito(undefined);
        setQuantity(0);
    };

    //FUNCION AGREGA AL CARRITO
    const addProduct= (item, quantity) => {
        
        setCarrito(item, quantity);
    };
    
    //FUNCION CALCULAR PRECIO TOTAL
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0)
    }
    return (
        <CartContext.Provider
            value={{
                carrito,
                addProduct,
                clearCart,
                changeQuantity,
                quantity,
                deleteItem,
                setCarrito,
                precioTotal
            }}>

            {children}

        </CartContext.Provider>
    )
}



