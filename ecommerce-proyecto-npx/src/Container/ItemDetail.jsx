

function ItemDetail ({producto}){
    return (
        <div>
            <img src={producto.foto} alt = 'foto' />
            <p>{producto.title}</p>
            <p>{producto.price}</p>
            <p>{producto.category}</p>

        </div>
    )

}

export default ItemDetail 