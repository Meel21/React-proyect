
import './App.css';
import React from 'react';
import ComponentesClase from './components/Titulo/Titulo/ComponentesClase';
import Input from './components/Input/input';
import Titulo from './components/Titulo/Titulo/Titulo';
import NavBarComp from './components/NavBar/NavBarComp';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = () => {
  return <div>
     ItemListContainer
  </div>
}
// function saludos (){
//   console.log ('saludando')
// }
 function App() {

  return (
  
    <div className="App" style= {{backgroundColor: 'grey'}} onClick={ () => console.log ('click')}>
        Tienda e-commerce
    <Router>
      <NavBarComp /> 
    </Router>
       
    <ItemListContainer />

        {/* {/* <Titulo greeting='Saludo' />
        <ComponentesClase /> 
        <ItemListContainer />
        <Input placeholder={placeholder} saludar={saludos}/> */}
      
    </div>
  );
}

export default App;
