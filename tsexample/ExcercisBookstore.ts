interface book {
    title: string;
    genre: 'fiction' | 'non-fic' | 'ed'
    price: number
}


//create array of person obj
let books: book[] = [
    { title: 'harrypotter', genre: 'fiction', price: 320 },
    { title: 'hungergame', genre: 'fiction', price: 250 },
    { title: 'scienceisfun', genre: 'ed', price: 480 },
    { title: 'It', genre: 'non-fic', price: 300 },
    { title: 'hobbit', genre: 'fiction', price: 400 },
]




//create function to filter book that >300Baht
function fictionmorethan300 (Bookky:book[]):book[]{
    return books.filter(Bookky => Bookky.price >= 300&& Bookky.genre == 'fiction')
}




//function discount the previous function

function discountted(books : book[]):book[]{
    return books.map(books=>({...books,price:books.price*0.9}))
}





//usefilter 
let msgfilter = fictionmorethan300(books)
let msgdiscount = discountted(msgfilter)
//show
console.log(msgdiscount)
//show msg


