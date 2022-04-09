 const productos = [
    { id: '1', title:'Termo STANLEY',category: 'Termos',price: 1000,stock: 2, foto:'/assets/img/termi.jpg'},
    { id: '2', title:'Termo Calabza',category: 'Termos',price: 1000,stock: 2, foto: '/assets/img/termi.jpg'},
    { id: '3', title:'Termo KAWASKAI',category: 'Termos',price: 1000 , stock: 7, foto: 'assets/img/termi.jpg'},
    { id: '4', title:'Termo ROCA',category: 'Termos',price: 1000,stock: 2,foto: 'assets/img/termi.jpg'},
    { id: '5', title:'bombilla',category: 'Accesorios',price: 1000,stock: 12,foto: 'assets/img/BOMBILLA.jpg'},
    { id: '6', title:'bombilla',category: 'Accesorios',price: 1000,stock:17,foto: 'assets/img/BOMBILLA.jpg'},
    { id: '7', title:'bombilla',category: 'Accesorios',price: 1000,stock: 16, foto: 'assets/img/BOMBILLA.jpg'}
    
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

 