import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])
    const [cart, setToCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
            })
    }, [])
    useEffect(() => {
        if (products.length) {
            const saveedCart = getStoredCart();
            const storedCard = [];
            for (const key in saveedCart) {
                const addedProduct = products.find(product => product.key === key);
                const quantity = saveedCart[key]
                if (addedProduct) {
                    for (let i = 0; i < quantity; i++) {
                        storedCard.push(addedProduct);
                    }

                }

            }
            setToCart(storedCard);
        }

    }, [products])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
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
            onChange = {handleSearch}/>
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Shop;