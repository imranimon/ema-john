import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'
import { deleteFromDb, clearTheCart } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setToCart] = useCart(products)
    const history = useHistory()
    const handleRemove = key => {
        deleteFromDb(key);
        const newCart = cart?.filter(prd => prd.key !== key);
        setToCart(newCart);
    }
    const handlePlaceOrder = () => {
        history.push('/place-order')
        setToCart([]);
        clearTheCart();
    }
    return (
        <div className="order-review-container">
            <div className="product-container">
                {
                    cart?.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}>
                    </ReviewItem>)
                }
            </div>
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="btn-regular">
                    Place Order
                </button>
            </Cart>
        </div>
    );
};

export default OrderReview;