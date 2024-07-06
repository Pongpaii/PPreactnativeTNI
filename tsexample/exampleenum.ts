//assign enum name
enum orderStatus {
    pending = 'Pending',
    shipped = 'Shipped',
    cancel = 'Cancel'
}

//create function parameter must hab type
function displayorderstatus(status: orderStatus) {
    switch (status) {
        //iforder status ispending show this msg
        case orderStatus.pending:
            console.log('Your order is pending! ')
            break;

        //
        case orderStatus.shipped:
            console.log('Your order has been shippped Yay! ')
            break;

        //
        case orderStatus.cancel:
            console.log('Your order is cancel! ')
            break;

        default: console.log('unknown order status');
    }//end of switch 

}//end of func


//testting
displayorderstatus(orderStatus.shipped);

displayorderstatus(orderStatus.cancel);