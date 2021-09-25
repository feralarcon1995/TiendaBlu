import './Styles/ItemDetail.css'
import './Styles/ItemCount.css';
import Button from '../Button/Button';
import ItemCount from '../ItemContainer/ItemCount';
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({products}) => {

    const { addCart } = useContext(CartContext);
   
    const [valor,setValor] = useState('');

    const getValue = (e) => {
        setValor(e.target.value)
        console.log(valor);
    }
    const onAddCart = (products,valor) => {

        addCart({products,valor});
        console.log(addCart)
        
     }
 
    
    return (
        <div>
            <div className="ItemContainerDetail">
                {/* ITEM DESCRIPCION */}
                <div className="ItemDescripcion">
                    <img src={products?.img} alt={products?.alt} />
                    <div className="itemContenedor">
                        <h3 className="ItemDetailNombre">{products?.nombre}</h3>
                        <p>Hasta 6 cuotas sin interes</p>
                        <b className="ItemDetail">Precio: ${products?.precio} {products?.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>}</b>
                        <select onChange={getValue} defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled>Selecciona Un Talle</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XLL">XXL</option>
                        </select>
                        {/* ITEM BOTON CONTADOR */}
                        <ItemCount  products={products}/>
                        <p className="ItemDetail">Stock Disponible : {products?.stock}</p>
                        <Link to={'/cart'}><Button function={onAddCart} className="btnAddCart" label='Agregar al carrito' ></Button></Link>

                    </div>

                </div>
                {/* ITEM DETALLES */}
                <div className="detallesContenedor">
                    <div className="detalles">
                        <h4 className="detallesTitulo">DETALLES</h4>
                        <p className="detallesInfo"><span>{products?.descripcion}</span></p>
                    </div>
                    <div className="detalles">
                        <h4 className="ItemTitulo">MATERIAL: </h4>
                        <p className="detallesInfo"><span>{products?.material}</span></p>
                    </div>
                </div>
                {/* FIN ITEM DETALLES */}
            </div>
        </div>

    )


    }
   


export default ItemDetail