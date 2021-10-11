import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const [products] = useProducts()
    const [setToCart] = useCart(products)
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data);
        // setToCart([]);
        clearTheCart();
        history.push('/place-order');
        
    };
    return (
        <div className="shipping-container">

            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <h2>Please fillup the form</h2>

                <input defaultValue={user.displayName} {...register("name")} placeholder='Your Name' />

                <input defaultValue={user.email} {...register("email", { required: true })} placeholder='Email' />
                {errors.email && <span className='error'>This field is required</span>}

                <input defaultValue="" {...register("address")} placeholder='Address' />

                <input defaultValue="" {...register("city")} placeholder='City' />

                <input defaultValue="" {...register("mobile")} placeholder='Mobile Number' />

                <input className='btn-regular' type="submit" name='Place Order'/>
            </form>
        </div>
    );
};

export default Shipping;