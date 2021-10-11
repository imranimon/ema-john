import { useEffect } from "react"
import { useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products => {
    const [cart, setToCart] = useState([])
    useEffect(() => {
        if (products?.length) {
            const savedCart = getStoredCart()
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
    }, [products])
    return [cart, setToCart]
}

export default useCart