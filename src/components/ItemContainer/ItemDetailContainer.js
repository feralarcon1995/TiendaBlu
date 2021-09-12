import { useState, useEffect } from 'react';
import ItemDetail from '../ItemContainer/ItemDetail';
import {Indumentaria} from '../ItemContainer/ItemList';
import Loading from '../Loading/Loading';


function getItems (){
    return new Promise ((resolve,reject) => {
      resolve(Indumentaria)
    })
}
const ItemDetailContainer = ({setCartItem}) => {

    const [Loader, setLoader] = useState(true);

    const [listDress, setListDress] = useState([]);

    useEffect(() => {

        setTimeout(() => {
           const dress = getItems();

           dress
           .then((dress) => setListDress(dress)).catch((err) => console.log(err), [])

           setLoader(false)
        }, 3000)

    })
    return(
        <div>
             <div>
                 <h2>Detalles del producto</h2>
             </div>
           <div>
               {Loader == true ? <Loading/> : listDress.map((item) => (<ItemDetail
                 id={item.id}
                 item ={item}
                 setCartItem={setCartItem}
               />))}
           </div>

        </div>
    )
}

export default ItemDetailContainer