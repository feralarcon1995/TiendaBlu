import Item from '../ItemContainer/Item';
import '../ItemContainer/Styles/ItemList.css';


const ItemList = ({products, setCartItem}) => {
    return (
        <div >
            <div className="TiendaContainer">
                <h2 className="TiendaTitulo">Bienvenido al shop de Tienda Blu</h2>
                <hr className="TiendaHr" />
            </div>
            <div className="ItemList">
            {products?.map((product) => <Item product={product} key={product.id} setCartItem={setCartItem}/> )
            }

            </div>

        </div>
    )
}

export default ItemList

