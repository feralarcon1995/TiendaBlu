import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ImgRunning from '../../assets/img/running.jpg';
import { Indumentaria } from '../ItemContainer/ItemList';
import Item from '../ItemContainer/Item';
import Loading from '../Loading/Loading';
import './Home.css'
const Home = ({ item }) => {
  const [Loader, setLoader] = useState(true);

  const bestSeller = Indumentaria.slice(0, 3);

  useEffect(() => {
    setTimeout(() => {
      //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
      setLoader(false)
    }, 2000);

  }, [])

  return (
    <div>
      {//SECCION UNO
      }
      <div className="contenedor-principalHome" style={{ backgroundImage: `url(${ImgRunning})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
        <div className="contenedor-infoHome">
          <h2 className="contenedor-titulo">Es hora de subir el nivel dentro del juego</h2>
        </div>
      </div>
      {//SECCION DOS
      }
      <div className="contenedor-ventas">
        <h2 className="contenedor-subtitulo">Lo mas vendido en Tienda Blu</h2>
        <hr />
        <div className="ItemList">
          {Loader === true ?
            <Loading /> :
            bestSeller.map((item) => <Item id={item.id} item={item} />)
          }
        </div>

        <Link to={"/tienda"}>
          <Button className="contenedor-btn" label="Ver toda la tienda" />
        </Link>
      </div>

    </div>

  )


}

export default Home