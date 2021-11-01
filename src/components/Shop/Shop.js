import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart, setToCart] = useCart()
    const [displayProduct, setDisplayProduct] = useState([])

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])

    useEffect(() => {
        setDisplayProduct(products)
    }, [products])

    const handleAddToCart = (product) => {
        const exist = cart?.find(prd => prd.key === product.key)
        let newCart = []
        if (exist) {
            const rest = cart.filter(prd => prd.key !== product.key);
            product.quantity += 1;
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
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
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