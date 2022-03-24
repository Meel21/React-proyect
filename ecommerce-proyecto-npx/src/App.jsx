
import './App.css';
import NavBarComp from './components/NavBar/NavBarComp';
import  ItemListContainer from './Container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



 function App() {

  return (
  
    <div className="App"  onClick={ () => console.log ('click')}>
    
      <NavBarComp /> 
       
    <ItemListContainer />

      
    </div>
  );
}

export default App;