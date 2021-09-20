
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Sections/Home';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';


function App() {

  // const [stock, setStock] = useState(0);
  const [cartItem, setCartItem] = useState(0);


  return (
    <>
      <BrowserRouter>
        <NavBar cartItem={cartItem} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tienda">
            <ItemListContainer setCartItem={setCartItem} />
          </Route>
          <Route exact path='/tienda/categoria/:catId'>
            <ItemListContainer />
          </Route>
          <Route exacy path='/tienda/detalle/:itemId'>
            <ItemDetailContainer setCartItem={setCartItem}/>
          </Route>
          <Route path="*">
              <Redirect to="/"/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;