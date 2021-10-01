import React from 'react';
import './PlaceOrder.css'
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div className='place-order-container'>
            <h2>You have successfully ordered the items.</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;