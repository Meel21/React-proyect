import {useParams} from 'react-router-dom';
import Loading from '../assets/burguer.jpg';
import ItemDetail from './ItemDetail';
import {useState, useEffect} from 'react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProd} = useParams();
  
  useEffect(() => {
   
    const queryProduct = doc(db, `Item/${idProd}`);
    getDoc(queryProduct).then(resp => {
      setProduct({id: resp.id, ...resp.data()}); 
      setLoading(false);
    })
  }, [idProd]);
  
  return (
    <section className="sectionDetail">
      {loading ? <img src={Loading} alt="loading" className="loading"/> 
      : 
      <ItemDetail product={product}/>}
    </section>
  )
}

export default ItemDetailContainer