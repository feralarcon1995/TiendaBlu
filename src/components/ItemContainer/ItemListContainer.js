import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Indumentaria } from '../ItemContainer/ItemList';
import ItemList from '../ItemContainer/ItemList';
import Filter from '../Button/Filter';
import ImgRunning2 from '../../assets/img/running2.jpg';
import '../ItemContainer/Styles/ItemListContainer.css';
import Loading from '../Loading/Loading';


function getItems() {
    return new Promise((resolve, reject) => {
        resolve(Indumentaria)
    })
}

const ItemListContainer = () => {
    const [Loader, setLoader] = useState(true);

    const { catId } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        //USO SETTIMEOUT PARA SIMULAR PEDIDO API
        setTimeout(() => {
            const dress = getItems();

            dress
                .then(res => setProduct(res))
                .then(res => {
                    //SI USO UNA CATEGORIA ME RENDERIZA ESA CATEGORIA
                    if (catId) {
                        const catFiltrado = res.filter(prod => prod.categoria === catId);
                        setProduct(catFiltrado)
                    } else { //SINO ME RENDERIZA TODO EL ARRAY
                        setProduct(res)
                    }

                })
                .catch(err => console.log(err))
                .finally(() => {
                    //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
                    setLoader(false)
                })

        }, 2000);

    }, [catId])
    return (

        <div className="tienda-contenedor">
            <div className="contenedor-principal" style={{ backgroundImage: `url(${ImgRunning2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100vh' }}>
                <div className="contenedor-infoTienda">
                    <h2 className="contenedor-titulo">Tienda</h2>
                </div>
            </div>

            <div>
                <Filter />
                {Loader === true ? <Loading/> : <ItemList  productos={product}/>}
            </div>
        </div>


    )
}

export default ItemListContainer