//create array of person obj
var books = [
    { title: 'harrypotter', genre: 'fiction', price: 320 },
    { title: 'hungergame', genre: 'fiction', price: 250 },
    { title: 'scienceisfun', genre: 'ed', price: 480 },
    { title: 'It', genre: 'non-fic', price: 300 },
    { title: 'hobbit', genre: 'fiction', price: 400 },
];
//function to filter who are at least 30 yo
function filterprice(prices) {
    return prices.filter(function (prices) { return prices.price > 300; });
}
//func discount
function discount(book) {
    return books.map(function (book) {
        if (book.price > 300) {
            book.price *= 0.9; // ลดราคา 10%
        }
        return book;
    });
}
//show
var bookdetail = filterprice(books); //filter adult
var discountedBooks = discount(bookdetail);
console.log(bookdetail); //show msg
