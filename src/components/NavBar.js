import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import CartWidget from './CartWidget.js';

const NavBar = () => {

    return (
        <nav className="Menu">
             <h2 className="Menu-titulo"> Tienda Blu </h2>
            <div className="Menu-item">
                <ul>
                    <li> <a href="" className="Menu-link" >Inicio</a></li>
                    <li><a href="" className="Menu-link" >Sobre Nosotros</a></li>
                    <li> <a href="" className="Menu-link" >Tienda</a></li>
                    <li><a href="" className="Menu-link" >Contacto</a></li>
                </ul> 
            </div>

            <div className="Menu-search">
            <input type="text" id="header-search" placeholder="Buscar " className="Menu-input" />
                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <CartWidget/>
          </nav>
            )

}

            export default NavBar