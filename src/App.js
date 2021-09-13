
import {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemContainer/ItemDetailContainer';


function App() {

  const [stock, setStock] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar cartItem={cartItem} />
      </header>
      <ItemListContainer setCartItem={setCartItem}/>
      <ItemDetailContainer setCartItem={setCartItem}/>


    </div>
  );
}

export default App;