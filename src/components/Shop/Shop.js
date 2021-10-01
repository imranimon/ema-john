import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts()
    const [cart, setToCart] = useCart(products)
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        setDisplayProduct(products)
    }, [products])

    const handleAddToCart = (product) => {
        const exist = cart?.find(prd => prd.key === product.key)
        let newCart = []
        if (exist) {
            const rest = cart.filter(prd => prd.key !== product.key);
            product.quantity +=1;
            newCart = [...rest, product]

            //Not recomended
            // newCart = cart?.map(prd => {
            //     if (prd.key === product.key) {
            //         prd['quantity'] += 1;
            //         return prd
            //     } else {
            //         return prd
            //     }
            // })
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setToCart(newCart)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product =>
            product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct)
    }

    return (
        <div>
            <div className="search-bar">
                <input type="text"
                    placeholder="Search Product"
                    onChange={handleSearch} />
            </div>
            <div className="shop-container" >
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}>
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/order'>
                            <button className="btn-regular">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;