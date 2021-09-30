import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: $ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star star-icon-color"
                    fullSymbol="fas fa-star star-icon-color"
                    readonly>
                </Rating>
                <br /><br />
                <button className="btn-regular"
                    onClick={() => props.handleAddToCart(props.product)}>
                    {cartIcon} Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;