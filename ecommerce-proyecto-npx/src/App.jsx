import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import CartContextProvider from './context/CartContext';
import ItemListContainer from './Container/ItemListContainer';
import BotonCheckOut from './components/BotonCheckout/BotonCheckOut';
import ItemDetailContainer from './Container/ItemDetailContainer';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <div className="App">

        <Routes>
          <Route  
            path="/all" 
            element={<ItemListContainer />}/>
                      <Route  
            path="/category/:idCategory" 
            element={<ItemListContainer/>}/>
          <Route  
            path="/details/:idProd"
            element={<ItemDetailContainer/>}/>
          <Route  
            path="/cart" 
            element={<Cart/>}/>
           <Route path="/Checkout" element={<BotonCheckOut/>}/>
        </Routes>
      
        <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;