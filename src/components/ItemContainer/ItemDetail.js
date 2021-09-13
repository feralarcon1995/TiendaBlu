import { useState } from "react";
import Button from "../Button/Button";
import './Styles/ItemDetail.css'
import './Styles/ItemCount.css'

const ItemDetail = ({item, setCartItem}) =>{

    const [count, setCount] = useState(0);

    const aumentar = (stock) => {
        if (count >= item.stock){
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
return(
<div>
    <div key={item.id} className="ItemContainerDetail">
            <img src={item.img} alt={item.alt}/>
            <div className="ItemContenido">
            <h3 className="ItemDetail">{item.nombre}</h3>
            <h4 className="ItemDetail">Descripcion:</h4>
            <p className="ItemDetail">{item.descripcion}</p>
            <b className="ItemDetail">Precio: ${item.precio} {item.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>   }</b>
            <hr/>
            <div className="item-contador">
              <Button function={decrementar} className="btn-red" label="-">-</Button>
              <p className="itemCount">{count}</p>
              <Button function={aumentar} className="btn-blue" label="+">+</Button>
            </div>
            <p className="ItemDetail">Stock Disponible : {item.stock}</p>
            <p className="ItemDetail">{count >= item.stock ? 'Stock Maximo' : ''}</p>
              <Button function={() => setCartItem(count)} className="btnAddCart" label='Agregar al carrito' ></Button>
            </div>
    </div>
</div>

)

}

export default ItemDetail