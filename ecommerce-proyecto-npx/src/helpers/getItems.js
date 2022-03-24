const itemList = [
    { id: '1', title:'Zapatillas',category: 'ropa',price: 1000,stock: 2},
    { id: '2', title:'Zapatillas',category: 'ropa',price: 1000,stock: 2},
    { id: '3', title:'Zapatillas',category: 'ropa',price: 1000 , stock: 7},
    { id: '4', title:'Zapatillas',category: 'ropa',price: 1000,stock: 2},
    { id: '5', title:'Zapatillas',category: 'ropa',price: 1000,stock: 12},
    { id: '6', title:'Zapatillas',category: 'ropa',price: 1000,stock:17},
    { id: '7', title:'Zapatillas',category: 'ropa',price: 1000,stock: 16}
    
    ];

    const getItems = new Promise ((res,rej) => {
        let condition = true;

        if (condition) {
                setTimeout (() => {

                    res(itemList)

                },3000);


        }else {

            rej ("error")
        }

    })

    export default getItems;