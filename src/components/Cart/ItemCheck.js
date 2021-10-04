import Button from '../Button/Button';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ItemCheck = ({ products }) => {


    const { deleteItem  } = useContext(CartContext)


    return (
        <>
            <div key={products?.id} className="product-list">
                <div className="product-img" >
                    <img src={products?.img}  alt={products?.alt}/>
                </div>
                <div className="product-info" >
                    <h3> {products?.nombre} </h3>
                    <h4> Unidades: {products?.quantity} </h4>
                    <h5> Precio $ {products?.precio} </h5>                    
                </div>
                <hr className="product-hr"/>
                <div className="product-price" >
                    <h3> Total a pagar </h3>
                    <p> $ {Number(products.precio) * Number(products.quantity)} </p>
                    <Button
                        function={() => deleteItem(products?.id)}
                        label="Eliminar Producto"
                        className="btn-borrar" />
                </div>
            </div>


        </>
    )
}

export default ItemCheck