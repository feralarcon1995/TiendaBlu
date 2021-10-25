import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import CartWidget from '../Cart/CartWidget';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import logo from '../../assets/img/tb.png';

const NavBar = () => {

    const { carrito } = useContext(CartContext);

    return (
        <header>
            <nav className="Menu">
                <div className="logo">
                    <Link to={"/"}>  <img src={logo} alt="logo" /></Link>
                    <Link to={"/"}><h2 className="Menu-titulo"> Tienda Blu </h2></Link>

                </div>
                <div className="Menu-item">
                    <ul className="menu-lista">
                        <li> <Link to={"/"} className="Menu-link">Inicio</Link></li>
                        <li> <Link to={"/tienda"} className="Menu-link tienda">Tienda</Link>
                            <ul className="sub-menu">
                                <li><Link to={"/tienda"} className="Menu-link">Indumentaria</Link></li>
                                <li><Link to={"/tienda/categoria/camiseta"} className="Menu-link">Camisetas</Link></li>
                                <li><Link to={"/tienda/categoria/chaqueta"} className="Menu-link">Chaquetas</Link></li>
                                <li><Link to={"/tienda/categoria/pantalon"} className="Menu-link">Pantalones</Link></li>
                                <li><Link to={"/tienda/categoria/short"} className="Menu-link">Shorts</Link></li>
                                <li><Link to={"/tienda/categoria/calza"} className="Menu-link">Calzas</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                {carrito ? <CartWidget /> : ''}

            </nav>
        </header>

    )

}

export default NavBar