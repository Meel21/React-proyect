// import ItemCount from './Container/ItemCount'
import {Link} from 'react-router-dom'

function Item( {prod} ){

    return (
      <Link to={`detalle/${prod.id}`}>
          <div
          className='col-md-4' 
          >
              <div className='card w-100 mt-5'>
                  <div className='card-header'>
                      {`${prod.name} - ${prod.category}`}
                </div>
                <div className='card-body'>
                    <img src={prod.foto} alt='' className='w-50' />
                    {prod.price}
                </div>
                <div className= 'card-footer'>
            </div>
        </div>
    </div>



      </Link>
    )
    }

export default Item;