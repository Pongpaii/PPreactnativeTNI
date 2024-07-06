//assign enum
enum productstatus {
    available = 'Available',
    outofstock = 'Out of Stock',
    discontinue = 'Discontinued'
}

//array  product  each 1 hab 3 thing
//0. ...,1. .... ,2....

let products: any[] = [
    { name: 'Macbook', status: productstatus.available, price: 1200 },
    { name: 'Iphone', status: productstatus.outofstock, price: 700 },
    { name: 'Ipod', status: productstatus.discontinue, price: 300 }

]

//function para get arrayproducts and show what inside 0,1,2
function displayproductdetail(products: any[]) {
    //arrow function product will get val from this =>{...}
    products.forEach(product => { console.log(`product :  ${product.name} ,status : ${product.status}, price : ${product.price}`) }

    );
}//end of func


//use function
//products.pop()
displayproductdetail(products)