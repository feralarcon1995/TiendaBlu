
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Sections/Home';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemContainer/ItemDetailContainer';
import CartView from './components/Cart/CartView';
import Footer from './components/Footer/Footer';


function App() {

  // const [stock, setStock] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  return (

    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar cartItem={cartItem} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tienda">
              <ItemListContainer />
            </Route>
            <Route exact path='/tienda/categoria/:catId'>
              <ItemListContainer />
            </Route>
            <Route exact path='/tienda/detalle/:itemId'>
              <ItemDetailContainer setCartItem={setCartItem} />
            </Route>
            <Route exact path='/cart' >
              <CartView />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;