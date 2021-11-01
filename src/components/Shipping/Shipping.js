import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory()
    const { user } = useAuth()
    const onSubmit = data => {
        const savedCart = getStoredCart()
        data.order = savedCart
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    reset()
                    clearTheCart();
                    history.push('/place-order');
                }
            })


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

                <input className='btn-regular' type="submit" name='Place Order' />
            </form>
        </div>
    );
};

export default Shipping;