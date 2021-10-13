import { useState, useContext } from 'react';
import Button from '../Button/Button';
import { CartContext } from '../../context/CartContext';
import './Styles/ItemCount.css';

const ItemCount = ({ product, initial, onAdd,setItemCount }) => {

    const { quantity, changeQuantity, addProduct, carrito, setCarrito } =
        useContext(CartContext);


    const [count, setCount] = useState(initial);

    setItemCount(count);

    const aumentar = () => {
        if (count >= product?.stock) {
            console.log('ya no sumo mas')
        }
        else {
            setCount(count + 1);
            changeQuantity(quantity + 1);

        }
    }
    const decrementar = () => {
        if (count <= 0) {
            console.log('no hago nada')
        }
        else {
            setCount(count - 1);
            changeQuantity(quantity - 1);
        }
    }

    const onAddToCart = () => {
        const cartId = carrito?.map(product => product.id)

        if (cartId?.includes(product.id)) {
            const updateCart = carrito?.map(i => {
                if (i.id === product.id) {

                    let oldQuantity = i.quantity
                    return {
                        ...i,
                        quantity: count + oldQuantity
                    }
                } else {
                    return i
                }
            })
            setCarrito(updateCart)
        } else {
            const newProduct = {
                ...product,
                quantity: count,
            };

            carrito
                ? addProduct([...carrito, newProduct])
                : addProduct([newProduct]);
        }


        onAdd();
    };



    return (


        <div className="item-stock">

            <div className="item-contador">
                <Button function={decrementar} className="btn-red" label="-">-</Button>
                <p className="itemCount">{count}</p>
                <Button function={aumentar} className="btn-blue" label="+">+</Button>
            </div>
            <p>Stock: {product?.stock}</p>
            <p>{count >= product?.stock ? 'Stock Maximo' : ''}</p>
            <Button function={onAddToCart} className="btnAddCart" label='Agregar al carrito' ></Button>

        </div>


    )
}
export default ItemCount