import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemContainer/ItemDetail';
// import { products } from '../ItemContainer/ItemListContainer';
import { db } from '../../services/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Loading from '../Loading/Loading';


// function getItems() {
//   return new Promise((resolve, reject) => {
//     resolve(products)
//   })
// }
const ItemDetailContainer = () => {

  const [Loader, setLoader] = useState(true);

  const [product, setProduct] = useState(undefined);

  const { itemid } = useParams();

  useEffect(() => {

    setLoader(true)

    getDoc(doc(db, 'products', itemid)).then((querySnapshot) => {

      console.log({ id: querySnapshot.id, ...querySnapshot.data() })

      const product = { id: querySnapshot.id, ...querySnapshot.data() }

      setProduct(product)

    }).catch((error) => {

      console.log('Error al encontrar producto', error)

    }).finally(() => {

      setLoader(false)
    })
    return (() => {
      
      setProduct(undefined)
    })
  }, [itemid])


  return (
    <div className="tienda-contenedor">
      <div className="TiendaContainer">
        <h2 className="TiendaTitulo">Detalles del Producto</h2>
        <hr className="TiendaHr" />
      </div>
      <div className="ItemListDetail">
        {Loader ? <Loading /> : <ItemDetail product={product} itemid={itemid} />}
      </div>

    </div>
  )
}

export default ItemDetailContainer