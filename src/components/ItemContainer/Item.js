import Button from '../Button/Button';

const Item = ({item}) => {

    return (
        <div key={item.id} className="ItemContainer">
            <img src={item.img} alt={item.alt}/>
            <h3 className="ItemInfo">{item.nombre}</h3>
            <b className="ItemInfo">Precio: ${item.precio} {item.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>   }</b>
            <hr/>
            <p className="ItemInfo">Stock Disponible: {item.stock} </p>   
            <Button className="btnAddCart" label='Ver Producto' id={item.id} ></Button>                        
        </div> 
    )
}
export default Item