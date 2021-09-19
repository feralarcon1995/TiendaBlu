import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Item = ({id,stock,nombre,alt,img,precio  }) => {

    return (
        <div key={id} className="ItemContainer">
            <img src={img} alt={alt} />
            <h3 className="ItemInfo">{nombre}</h3>
            <b className="ItemInfo">Precio: ${precio} {stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>}</b>
            <hr />
            <Link to={`/tienda/detalle/${id}`}>
                <Button className="btnAddCart" label='Ver Producto' id={id} ></Button>
            </Link>
        </div>
    )
}
export default Item