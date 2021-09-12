import {useState} from 'react';
import Button from './Button.js';

import './ItemCount.css'

const ItemCount = ({stock, setCartItem}) => {
    const stock = 10;
    const [count, setCount] = useState(0);

    const aumentar = () => {
        if (count >= stock){
           console.log('ya no sumo mas')
        }
        else {
            setCount(count + 1);
        }
    }
    const decrementar = () => {
        if (count <= 0){
            console.log('no hago nada')
        }
         else{
             setCount(count - 1);
         }
    }
    const addToCart = () => {
        console.log('agregar al carrito')
    }

    return (

        <div className="item-container">
         <div className="item-stock">
              <h3>Remera deportiva azul</h3>
            <div className="item-contador">
              <Button function={decrementar} className="btn-red" label="-">-</Button>
              <p className="itemCount">{count}</p>
              <Button function={aumentar} className="btn-blue" label="+">+</Button>
            </div>
            <p>{count >= 10 ? 'Stock Maximo' : ''}</p>
              <Button onClick={() => setCartItem(count)} className="btnAddCart" label='Agregar al carrito' ></Button>
         </div>
             
              
        </div>
    )
}
export default ItemCount