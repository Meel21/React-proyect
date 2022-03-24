import {useEffect,useState} from 'react';
import ItemCount from './ItemCount';
import getItems from '../helpers/getItems';

function ItemListContainer() {
  const [productos,setProductos] = useState ([]);
    // const [loading,setLoading] = useState (true)


    useEffect (() => {

      getItems
      .then ((data) => setProductos(data))
      .catch((err) => console.error (`error: ${err}`))
    
    }, [])

  return (
    <div className="container">
      {
//  (loading)
//  ?
//  ( <Loading />)
//  :
 <div className="container">
   <h1 className="my-5 text-center">Ropa</h1>

   <div className='row'>
     {productos.map ((prod) =>

    <div className="col-md-4 mb-5" key={prod.id}>
      <ItemCount stock= {prod.stock} initial= { 1 }/>
      <h3>{prod.title}</h3>
      <h4>{prod.price}</h4>
     
    </div>     
     
     )}

    </div>
  </div>
  }
  </div>
  )
}


export default ItemListContainer;