import './Styles/ItemDetail.css'
import './Styles/ItemCount.css';
import Button from '../Button/Button';
import ItemCount from '../ItemContainer/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ product }) => {

    const { talleProduct } = useContext(CartContext);

    const [cart, setCart] = useState(true);

    const [itemCount, setItemCount] = useState();


    const handleOnAdd = () => {
        setCart(false);
    };

    const FinalizarCompra = () => {

        //APARECE EL CARRITO
        const onClick = () => {
            setCart(true);
        };

        return (
            <div>
                <Button function={onClick} label="Volver" className="btnAddCart"> </Button>
                <Link to="/tienda" className="link">
                    <Button label="Seguir Comprando" className="btnAddCart"></Button>
                </Link>
                <Link to="/cart" className="link">
                    <Button label="Ir al carrito" className="btnAddCart"></Button>
                </Link>
            </div>
        );
    };

    return (
        <div>
            <div className="ItemContainerDetail">
                {/* ITEM DESCRIPCION */}
                <div className="ItemDescripcion">
                    <img src={product?.img} alt={product?.alt} />
                    <div className="itemContenedor">
                        <h3 className="ItemDetailNombre">{product?.nombre}</h3>
                        <p>Hasta 6 cuotas sin interes</p>
                        <b className="ItemDetail">Precio: ${product?.precio} {product?.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>}</b>
                        <select onChange={talleProduct} defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled>Selecciona Un Talle</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XLL">XXL</option>
                        </select>
                        {/* ITEM BOTON CONTADOR */}
                        {cart ? (
                            <ItemCount
                                stock={5}
                                product={product}
                                initial={0}
                                onAdd={handleOnAdd}
                                setItemCount={setItemCount}
                            />
                        ) : (
                            <FinalizarCompra />
                        )}

                    </div>

                </div>
                {/* ITEM DETALLES */}
                <div className="detallesContenedor">
                    <div className="detalles">
                        <h4 className="detallesTitulo">DETALLES</h4>
                        <p className="detallesInfo"><span>{product?.descripcion}</span></p>
                    </div>
                    <div className="detalles">
                        <h4 className="ItemTitulo">MATERIAL: </h4>
                        <p className="detallesInfo"><span>{product?.material}</span></p>
                    </div>
                </div>
                {/* FIN ITEM DETALLES */}
            </div>
        </div>

    )


}



export default ItemDetail