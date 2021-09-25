import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemContainer/ItemDetail';
import { products } from '../ItemContainer/ItemListContainer';
import Loading from '../Loading/Loading';


function getItems() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}
const ItemDetailContainer = ({ setCartItem }) => {

  const [Loader, setLoader] = useState(true);

  const { itemId } = useParams();

  const [product, setProduct] = useState([]);


  useEffect(() => {

    setTimeout(() => {

      const dress = getItems(itemId);

      dress
        .then(products => {
          setProduct(products.find(prod => prod.id === itemId))
        })
        .catch(err => console.log(err))
        .finally(() => {
          //UNA VEZ PASADO LOS 2 SEGUNDOS, EL LOADER DESAPARECE
          setLoader(false)
        })

    }, 2000)
  }, [itemId, product])

  return (
    <div className="tienda-contenedor">
      <div className="TiendaContainer">
        <h2 className="TiendaTitulo">Detalles del Producto</h2>
        <hr className="TiendaHr" />
      </div>
      <div className="ItemListDetail">
        {Loader === true ? <Loading /> : <ItemDetail products={product} />}
      </div>

    </div>
  )
}

export default ItemDetailContainer