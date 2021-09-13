import {useState, useEffect} from 'react';
import Item from '../ItemContainer/Item';
import '../ItemContainer/Styles/ItemList.css';
import Loading from '../Loading/Loading'


export const Indumentaria = [
    
  {
      id:'0',
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-running-run-it-space-race-nasa-azul-100020gp5804001-1.jpg' ,
      nombre: 'Camiseta Azul', 
      descripcion:'Camiseta deportiva running azul', 
      alt:'Camiseta Azul',
      precio: 4399,
      stock: 11
  },
  {
      id:'1', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-puma-running-favourite-roja-640020521810011-1.jpg',
      nombre: 'Camiseta Roja',
       descripcion:'Camiseta deportiva running roja',
       alt:'Camiseta  Roja',
      precio: 4299 , 
      stock: 4
  },
  {
      id:'2', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-puma-runnin-favourite-mujer-rosa-640020520181025-1.jpg',
      nombre: 'Camiseta Femenina', 
      descripcion:'Camiseta deportiva running femenina',
      alt:'Camiseta Femenina',
      precio: 4399, 
      stock: 23
  },
  {
      id:'3', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-con-calza-nike-running-stride-7-pulgadas-negro-510020cj5471010-1.jpg' ,
      nombre: 'Short Deportivo M', 
      descripcion:'Short deportivo masculino',
      alt:'Short Deportivo Masculino',
      precio: 3499, 
      stock: 9
  },
  {
      id:'4', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-topper-running-2-mujer-negro-800020164201001-1.jpg',
      nombre: 'Short Deportivo F', 
      descripcion:'Short deportivo femenino',
      alt:'Short deportivo femenino',
      precio: 3199 , 
      stock: 5
  },
  {
      id:'5', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-nike-running-windrunner-celeste-510020cz9070451-1.jpg',
      nombre: 'Chaqueta Rompe Viento M', 
      descripcion:'Chaqueta rompe vientos masculina',
      alt:'Chaqueta rompe viento masculina',
      precio:15000 , 
      stock: 12
  },
  {
      id:'6', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-361-entrenamiento-gris-361020y2104m02b-1.jpg',
      nombre: 'Pantalon Running M', 
      descripcion:'Pantalon running masculino',
      alt:'Pantalon running masculino',
      precio: 7000 ,
      stock: 7
  },
  {
      id:'7', 
      img: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/calza-corta-reebok-entrenamiento-myt-q3-mujer-negra-111020fu2431001-1.jpg',
      nombre: 'Calza Running F', 
      descripcion:'Calza running femenino',
      alt:'Calza running femenino',
      precio: 3799, 
      stock: 19
  },
  {
      id:'5', 
      img:'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-running-nike-essential-mujer-rosa-510020cu3217630-1.jpg',
      nombre: 'Chaqueta Rompe Viento F', 
      descripcion:'Chaqueta rompe vientos femenina',
      alt:'Chaqueta rompe vientos femenina',
      precio: 16000 , 
      stock: 10
  }
]

function getListDress (){
    return new Promise ((resolve,reject) => {
      resolve(Indumentaria)
      
    })
}

const ItemList = ({setCartItem}) => {
    const [Loader, setLoader] = useState(true);
    
    const [listDress,setListDress] = useState([]);

    useEffect(() =>{

        setTimeout(() => {
          const dress = getListDress();
   
         dress.then(dress => {
          setListDress(dress)
         })

         setLoader(false)
        }, 3000);
      
    }, [])

    return (
      <div >
        <div className="TiendaContainer">
           <h2 className="TiendaTitulo">Bienvenido al shop de Tienda Blu</h2>
           <hr className="TiendaHr"/>
        </div>
        <div className="ItemList">
          {Loader==true ? 
          <Loading/>:
          listDress.map((item) => <Item id={item.id} item={item} />)
                 }
        </div>
            
      </div>
    )
}

export default ItemList

