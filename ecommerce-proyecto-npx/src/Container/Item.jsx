import ItemCount from './ItemCount'

function Item( {prod} ){

    console.log ({prod});


    return (
        <div>
            {
            prod.map ((p) =>

            <div p>
            <ItemCount stock = {stock} initial = {1}/>  
            </div>

            )
            }

  </div>

    )
}

export default Item;