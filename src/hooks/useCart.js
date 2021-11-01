import { useEffect } from "react"
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = () => {
    const [cart, setToCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart()
        const keys = Object.keys(savedCart)
        fetch('http://localhost:5000/products/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                if (products?.length) {
                    const storedCard = [];
                    for (const key in savedCart) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            const quantity = savedCart[key]
                            addedProduct.quantity = quantity;
                            storedCard.push(addedProduct)
                        }
                    }
                    setToCart(storedCard)
                }
            })

    }, [])
    return [cart, setToCart]
}

export default useCart