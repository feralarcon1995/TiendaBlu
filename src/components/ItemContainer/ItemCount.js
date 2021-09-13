import {useState} from 'react';
import Button from '../Button/Button';

import './Styles/ItemCount.css'

const ItemCount = ({stock, setCartItem}) => {
    
    const [count, setCount] = useState(0);

    const aumentar = () => {
        if (count === stock){
            return setCount(count + 1);
        }
    }
    const decrementar = () => {
        if (count === 0){
            return setCount(count - 1);
        }  
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
            <p>{count >= stock ? 'Stock Maximo' : ''}</p>
              <Button function={() => setCartItem(count)} className="btnAddCart" label='Agregar al carrito' ></Button>
         </div>
             
              
        </div>
    )
}
export default ItemCount