import React from 'react';
import './ReviewItem.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewItem = (props) => {
    const {name,price,seller,quantity, key} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
             <h4  className="product-name ml20">{name}</h4>
            <div className="product">
                <div>
                <p><small>Sold By: {seller}</small></p>
                    <p>Price: $ {price}</p>
                    <p>Quantity: {quantity} </p>
                    <button className="btn-regular"
                    onClick={()=> props.handleRemove(key)}>
                        {cartIcon} Remove
                    </button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;