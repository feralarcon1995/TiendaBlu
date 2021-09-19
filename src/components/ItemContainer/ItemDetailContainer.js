import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemContainer/ItemDetail';
import { Indumentaria } from '../ItemContainer/ItemList';
import Loading from '../Loading/Loading';


function getItems() {
  return new Promise((resolve, reject) => {
    resolve(Indumentaria)
  })
}
const ItemDetailContainer = () => {

  const [Loader, setLoader] = useState(true);

  const { itemId } = useParams();

  const [product, setProduct] = useState(null);


  useEffect(() => {

    setTimeout(() => {
      const dress = getItems();
       
      dress
        .then(res => {
          setProduct(res.find(prod => prod.itemId === itemId))
        })
        .catch(err => console.log(err))
        .finally(() => {
          //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
          setLoader(false)
        })           

    }, 2000)
  }, [itemId])

  return (
    <div>
      <div className="TiendaContainer">
        <h2 className="TiendaTitulo">Detalles del Producto</h2>
        <hr className="TiendaHr" />
      </div>
      <div className="ItemListDetail">
        {Loader === true ? <Loading /> : <ItemDetail {...product}/>}
      </div>

    </div>
  )
}

export default ItemDetailContainer