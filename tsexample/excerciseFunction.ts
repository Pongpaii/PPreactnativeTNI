//ประเภทตัวแปรts
type Product = {
  name: string;
  price: number;
  catagory: string;
};

//assign array prod [ อ้างอิงประเภท Product]
let productss: Product[] = [
  { name: "laptop", price: 15000, catagory: "Electronics" },
  { name: "Shirt", price: 1000, catagory: "Apparel" },
  { name: "Coffee Maker", price: 25000, catagory: "Appliances" },


];
//create func for filter//this parameter type is Product[] not string or smth//return Product[]
function filterProudctbyprice(product: Product[],minprice:number): Product[] {
  return productss.filter((product) => product.price > minprice);
}




//func for disc
function dicountproduct(productss: Product[]): Product[] {
  return productss.map(product=>({...product,price:product.price*0.9}));
}

//use func
let filterprod = filterProudctbyprice(productss,2000);
let dicountproductshow = dicountproduct(filterprod);
//run
//console.log(filterprod);
console.log(dicountproductshow);


//1st run == 5000
//2nd run == 4500

//3rd run wechange prodbyprice function() indaparameter we add anthoer so we'll get  
//filterProudctbyprice(product: Product[],minprice:number): Product[]
//then in the Line28 we give 2000! DONE!