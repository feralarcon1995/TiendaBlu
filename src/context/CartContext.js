
import { useState, createContext } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([]);

    const [quantity, setQuantity] = useState(0);

    const [talle, setTalle] = useState('');

    const talleProduct = (e) => {
        setTalle(e.target.value)
        console.log(talle)
    }


    //FUNCION BORRAR PRODUCTO
    const deleteItem = (itemId) => {
        const newList = carrito.filter((item) => item.id !== itemId);
        setCarrito(newList);
    };

    //FUNCION PARA LA CANTIDAD DE ELEMENTOS DEL CARRITO,TANTO PARA SUMAR COMO RESTAR
    const cantidadElementosDelCarrito = () => {
        return carrito.reduce((suma, product) => suma + product.quantity, 0)
    }


    //FUNCION CAMBIA CANTIDAD DE PRODUCTO
    const changeQuantity = (count) => {
        setQuantity(count);
    };

    //FUNCION LIMPA CARRITO
    const clearCart = () => {
        setCarrito([]);
        setQuantity(0);
    };

    //FUNCION AGREGA AL CARRITO
    const addProduct = (item, quantity) => {
        
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
                precioTotal,
                cantidadElementosDelCarrito ,
                talleProduct,
                talle
            }}>

            {children}

        </CartContext.Provider>
    )
}



