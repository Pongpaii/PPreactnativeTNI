//assign enum
var productstatus;
(function (productstatus) {
    productstatus["available"] = "Available";
    productstatus["outofstock"] = "Out of Stock";
    productstatus["discontinue"] = "Discontinued";
})(productstatus || (productstatus = {}));
//array  product  each 1 hab 3 thing
//0. ...,1. .... ,2....
var products = [
    { name: 'Macbook', status: productstatus.available, price: 1200 },
    { name: 'Iphone', status: productstatus.outofstock, price: 700 },
    { name: 'Ipod', status: productstatus.discontinue, price: 300 }
];
//function para get arrayproducts and show what inside 0,1,2
function displayproductdetail(products) {
    //arrow function product will get val from this =>{...}
    products.forEach(function (product) { console.log("product :  ".concat(product.name, " ,status : ").concat(product.status, ", price : ").concat(product.price)); });
} //end of func
//use function
//products.pop()
displayproductdetail(products);
