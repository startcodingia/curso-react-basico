import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';
import { addElementToCart } from './redux/actions/cart';

const App = () => {
  const STATE = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  console.log(STATE);
  
  return (
    <div className="App">
      <button onClick={() => { dispatch(addElementToCart({ id: 1, name: 'shirt', price: 3000 })) }}>
        Agregar al carrito
        </button>
      <BrowserRouter>
        <EcommerceProvider>
          <Switch>

            <Route exact path="/">
              <HomeContainer />
            </Route>

            <Route exact path="/productos">
              <ProductsContainer />
            </Route>

            <Route path="/productos/:busqueda">
              <ProductsContainer />
            </Route>

          </Switch>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
