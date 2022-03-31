import {Suspense} from 'react'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import NavBarComp from './components/NavBar/NavBarComp';
import  ItemListContainer from './Container/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


 function App() {

  return (
    <Suspense fallback= {<h1> Cargando.. </h1>} >
    <BrowserRouter>
    <div className="App"  onClick={ () => console.log ('click')}>
        <NavBarComp />  
          <Routes>
            <Route path= "/"  element={ <ItemListContainer saludo=' soy item' />
            }
            />
            <Route path="/categoria/:id" element={ <ItemListContainer saludo='hola soy item'/>} />    
            <Route path="/detalle/:detalleId" element={  <ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<Navigate to='/' />}/>
             
        </Routes>
    </div>
    </BrowserRouter>
 </Suspense>
  );
}

export default App;