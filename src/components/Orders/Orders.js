import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const history = useHistory()
    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${user.email}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('idToken')}` }
        })
            .then(response => {
                setOrders(response.data)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    history.push('/login')
                }
            }
            )
    }, [])
    return (
        <div className="my-orders-container">
            <h2>From Orders</h2>
            <h3>Total Order: {orders.length}</h3>
            <ul>
                {orders.map(order => <li
                    key={order._id}>{order.email}
                </li>)}
            </ul>
        </div>
    );
};

export default Orders;