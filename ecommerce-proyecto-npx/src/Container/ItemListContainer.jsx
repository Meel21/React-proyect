import {useEffect,useState} from 'react';
import ItemCount from './ItemCount';
import {getFetch} from '../helpers/gFetch';
import ItemList from '../Container/ItemList'
import {useParams} from 'react-router-dom'


function ItemListContainer( {saludo}) {
  const [bool,setBool]= useState (true)
   const [loading,setLoading] = useState (true)
   const [prods,setProds] = useState ([])


   const {id} = useParams()


    useEffect (() => {
      if (id){
      getFetch
      .then (resp => setProds (resp.filter (prod => prod.categoria === id)))
      .catch((err) => console.error (err))
      .finally (() => setLoading (false))
    
    }else {

      getFetch
      .then (resp => setProds (resp))
      .catch((err) => console.error (err))
      .finally (() => setLoading (false))
    }
    
  },[id])

  const onAdd = (cant) =>{
    console.log (cant)
  }

  return (
    
<>
 <div>{saludo}</div>
   {
     loading ? <h2> Cargando....</h2>
     :
     <ItemList prods = {prods} />
   }

      <ItemCount initial= {1} stock= {10} onAdd= {onAdd}/>
    </>
  )
  
}


export default ItemListContainer;