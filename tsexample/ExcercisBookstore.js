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
//create array of person obj
var books = [
    { title: 'harrypotter', genre: 'fiction', price: 320 },
    { title: 'hungergame', genre: 'fiction', price: 250 },
    { title: 'scienceisfun', genre: 'ed', price: 480 },
    { title: 'It', genre: 'non-fic', price: 300 },
    { title: 'hobbit', genre: 'fiction', price: 400 },
];
//create function to filter book that >300Baht
function fictionmorethan300(Bookky) {
    return books.filter(function (Bookky) { return Bookky.price >= 300 && Bookky.genre == 'fiction'; });
}
//function discount the previous function
function discountted(books) {
    return books.map(function (books) { return (__assign(__assign({}, books), { price: books.price * 0.9 })); });
}
//usefilter 
var msgfilter = fictionmorethan300(books);
var msgdiscount = discountted(msgfilter);
//show
console.log(msgdiscount);
//show msg
