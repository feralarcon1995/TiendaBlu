import {useState, useEffect} from 'react';
import {Indumentaria} from '../ItemContainer/Item';
import Button from '../Button/Button';
import '../ItemContainer/Styles/ItemList.css';
import Loading from '../Loading/Loading'



function getListDress (){
    return new Promise ((resolve,reject) => {
      resolve(Indumentaria)
      
    })
}

const ItemList = () => {
    const [Loader, setLoader] = useState(true);
    
    const [listDress,setListDress] = useState([]);

    useEffect(() =>{

        setTimeout(() => {
          const dress = getListDress();
   
         dress.then(dress => {
          setListDress(dress)
         }, [])

         setLoader(false)
        }, 3000);
      
    })

    return (
      <div >
        <div className="TiendaContainer">
                      <h2 className="TiendaTitulo">Bienvenido al shop de Tienda Blu</h2>
                      <hr className="TiendaHr"/>
        </div>
        <div className="ItemList">
          {Loader==true ? 
          <Loading/>:
          listDress.map(e => <div key={e.id} className="ItemContainer">
                                    <img src={e.img}/>
                                    <h3 className="ItemInfo">{e.nombre}</h3>
                                    <b className="ItemInfo">Precio: ${e.precio} {e.stock >= 10 ? <span>30% OFF</span> : <span>15% OFF</span>   }</b>
                                    <hr/>
                                    <p className="ItemInfo">Stock Disponible: {e.stock} </p>   
                                    <Button className="btnAddCart" label='Ver Detalles' ></Button>                        
                                </div> )
                 }
        
        </div>
            
          
      </div>
    )
}

export default ItemList

