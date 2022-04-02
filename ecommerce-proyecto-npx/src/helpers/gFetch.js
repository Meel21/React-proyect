 const productos = [
    { id: '1', title:'Zapatillas',category: 'ropa',price: 1000,stock: 2, foto: 'https://picsum.photos/200/300'},
    { id: '2', title:'Zapatillas',category: 'ropa',price: 1000,stock: 2, foto: 'https://picsum.photos/200/300'},
    { id: '3', title:'Zapatillas',category: 'ropa',price: 1000 , stock: 7, foto: 'https://picsum.photos/200/300'},
    { id: '4', title:'Zapatillas',category: 'ropa',price: 1000,stock: 2,foto: 'https://picsum.photos/200/300'},
    { id: '5', title:'Zapatillas',category: 'ropa',price: 1000,stock: 12,foto: 'https://picsum.photos/200/300'},
    { id: '6', title:'Zapatillas',category: 'ropa',price: 1000,stock:17,foto: 'https://picsum.photos/200/300'},
    { id: '7', title:'Zapatillas',category: 'ropa',price: 1000,stock: 16, foto: 'https://picsum.photos/200/300'}
    
    ]

    export const getFetch = new Promise ((res,rej) => {
        let condition = true;
        if (condition) {
                setTimeout (() => {

                    res(productos)

                },3000);


        }else {

            rej ("error")
        }

    })

    const producto = {id: '1',category: 'Zapatillas',name: 'juan',price:'$10000',stock: 3, foto: 'https://picsum.photos/200/300'}

  export const getFetchOne = new Promise ((res,rej) => {

        let condition= true
        if (condition) {
            setTimeout(() => {
                res(producto)
            },3000);
                
            }else {
                rej ('error')
            }

        
    })

 