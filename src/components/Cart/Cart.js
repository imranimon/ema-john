import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // const totallReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totallReducer, 0);
    let total = 0;
    let totalItem = 0;
    for (const product of cart){
        if(product['quantity']){
            total = total + product.price * product['quantity'];
            totalItem = totalItem + product['quantity'];
        } else {
            total = total + product.price;
            totalItem +=1;
        }
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total) * .1;
    const grandTotal = (total + shipping + tax);
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h3>Order Summary</h3>
                <p>Items Ordered: {totalItem}</p>
            </div>
            <div className="cart-body">
                <p>Price: ${total.toFixed(2)}</p>
                <p>Shipping: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;