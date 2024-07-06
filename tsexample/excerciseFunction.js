var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//assign array prod [ อ้างอิงประเภท Product]
var productss = [
    { name: "laptop", price: 15000, catagory: "Electronics" },
    { name: "Shirt", price: 1000, catagory: "Apparel" },
    { name: "Coffee Maker", price: 25000, catagory: "Appliances" },
];
//create func for filter//this parameter type is Product[] not string or smth//return Product[]
function filterProudctbyprice(product, minprice) {
    return productss.filter(function (product) { return product.price > minprice; });
}
//func for disc
function dicountproduct(productss) {
    return productss.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//use func
var filterprod = filterProudctbyprice(productss, 2000);
var dicountproductshow = dicountproduct(filterprod);
//run
//console.log(filterprod);
console.log(dicountproductshow);
//1st run == 5000
//2nd run == 4500
//3rd run wechange prodbyprice function() indaparameter we add anthoer so we'll get  
//filterProudctbyprice(product: Product[],minprice:number): Product[]
//then in the Line28 we give 2000! DONE!
