import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // const totallReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totallReducer, 0);
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total) * .1;
    const grandTotal = (total + shipping + tax);
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h3>Order Summary</h3>
                <p>Items Ordered: {cart.length}</p>
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