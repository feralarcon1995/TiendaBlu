import ImgRunning from '../../assets/img/running.jpg';
import ItemList from '../ItemContainer/ItemList';


import '../ItemContainer/Styles/ItemListContainer.css';

const ItemListContainer = ({setCartItem}) => {

    return (

    <div>
        <div className="contenedor-principal" style={{ backgroundImage: `url(${ImgRunning})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', width:'100%',height:'35rem' }}>
        <div className="contenedor-info">
            <h2 className="contenedor-titulo">Es hora de subir el nivel dentro del juego</h2>
            <a href="">Ir a Tienda</a>
    </div>
        </div>
         

    <div>
        <ItemList setCartItem={setCartItem}/>
    </div>
    
 
</div>
    )
}

export default ItemListContainer