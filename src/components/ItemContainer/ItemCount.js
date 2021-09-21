import {useState} from 'react';
import{Link} from 'react-router-dom';
import Button from '../Button/Button';

import './Styles/ItemCount.css'

const ItemCount = ({ setCartItem,products}) => {


    const [count, setCount] = useState(0);

    const aumentar = () => {
        if (count >= products?.stock) {
            console.log('ya no sumo mas')
        }
        else {
            setCount(count + 1);
        }
    }
    const decrementar = () => {
        if (count <= 0) {
            console.log('no hago nada')
        }
        else {
            setCount(count - 1);
        }
    }
    const onAdd = () => {
           setCartItem(count)
           
        }
    


    return (

      
         <div className="item-stock">
           
            <div className="item-contador">
              <Button function={decrementar} className="btn-red" label="-">-</Button>
              <p className="itemCount">{count}</p>
              <Button function={aumentar} className="btn-blue" label="+">+</Button>
            </div>
            <p>{count >= products?.stock ? 'Stock Maximo' : ''}</p>
              <Link to={'/cart'}><Button function={onAdd} className="btnAddCart" label='Agregar al carrito' ></Button></Link>
         </div>
             

    )
}
export default ItemCount