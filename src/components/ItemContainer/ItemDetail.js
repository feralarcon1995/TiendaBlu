import { useState } from "react";
import Button from "../Button/Button";


const ItemDetail = ({item, setCartItem}) =>{

    const [count, setCount] = useState(0);

    const aumentar = (stock) => {
        if (count === stock){
           setCount(count + 1)
        }
        
    }
    const decrementar = () => {
        if (count === 0){
            setCount(count -1)
        }
      
    }
return(
<div>
    <div key={item.id}>
            <img src={item.img} alt={item.alt}/>
            <h3 className="ItemInfo">{item.nombre}</h3>
            <h4>Descripcion:</h4>
            <p>{item.descripcion}</p>
            <b className="ItemInfo">Precio: ${item.precio} {item.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>   }</b>
            <hr/>
            <p className="ItemInfo">Stock Disponible: {item.stock} </p>   
            <div className="item-contador">
              <Button function={decrementar} className="btn-red" label="-">-</Button>
              <p className="itemCount">{count}</p>
              <Button function={aumentar} className="btn-blue" label="+">+</Button>
            </div>
            <p>{count >= item.stock ? 'Stock Maximo' : ''}</p>
              <Button function={() => setCartItem(count)} className="btnAddCart" label='Agregar al carrito' ></Button>
    </div>
</div>

)

}

export default ItemDetail