import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from '../Container/ItemDetail'
import {getFetch,getFetchOne} from '../helpers/gFetch';

function ItemDetailContainer (){
    const [producto,setProducto]= useState ({})

const {detalleId} =useParams ()

useEffect (() =>{
    getFetchOne
    // .then(prod => prod.find (item => item.id === detalleId))
    .then (prod => setProducto (prod))
    .catch (err => console.log (err))
}, [])

return (

<div>
    <ItemDetail producto={producto} />
    </div>
)


}

export default ItemDetailContainer;