import { useState } from "react";
import Button from "../Button/Button";
import './Styles/ItemDetail.css'
import './Styles/ItemCount.css'

const ItemDetail = ({  setCartItem,id,img,descripcion,material,stock,nombre,precio,alt}) => {

    const [count, setCount] = useState(0);

    const aumentar = (stock) => {
        if (count >= stock) {
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
    return (
        <div>
            <div key={id} className="ItemContainerDetail">
                {/* ITEM DESCRIPCION */}
                <div className="ItemDescripcion">
                    <img src={img} alt={alt} />
                    <div className="itemContenedor">
                        <h3 className="ItemDetailNombre">{nombre}</h3>
                        <p>Hasta 6 cuotas sin interes</p>
                        <b className="ItemDetail">Precio: ${precio} {stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>}</b>
                        {/* <select>
                            <option selected value="">Selecciona Un Talle</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XLL">XXL</option>
                        </select> */}
                        {/* ITEM BOTON CONTADOR */}
                        <div className="item-contador">
                            <Button function={decrementar} className="btn-red" label="-">-</Button>
                            <p className="itemCount">{count}</p>
                            <Button function={aumentar} className="btn-blue" label="+">+</Button>
                        </div>
                        <p className="ItemDetail">Stock Disponible : {stock}</p>
                        <p className="ItemDetail">{count >= stock ? 'Stock Maximo' : ''}</p>
                        <Button function={() => setCartItem(count)} className="btnAddCart" label='Agregar al carrito' ></Button>
                    </div>

                </div>
                {/* ITEM DETALLES */}
                <div className="detallesContenedor">
                    <div className="detalles">
                        <h4 className="detallesTitulo">DETALLES</h4>
                        <p className="detallesInfo"><span>{descripcion}</span></p>
                    </div>
                    <div className="detalles">
                        <h4 className="ItemTitulo">MATERIAL: </h4>
                        <p className="detallesInfo"><span>{material}</span></p>
                    </div>
                </div>
                {/* FIN ITEM DETALLES */}
            </div>
        </div>

    )

}

export default ItemDetail