import ImgRunning from '../assets/img/running.jpg';
import ItemCount from './ItemCount.js';
import './ItemListContainer.css';

const ItemListContainer = () => {

    return (

    <div className="contenedor-principal" style={{ backgroundImage: `url(${ImgRunning})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover', width:'100%',height:'60rem' }}>
    <div className="contenedor-info">
    <h2 className="contenedor-titulo">Es hora de subir el nivel dentro del juego</h2>
    <a href="">Shop Now</a>
    </div>
    <div>
        <ItemCount/>
    </div>
    
 
    
</div>
    )
}

export default ItemListContainer