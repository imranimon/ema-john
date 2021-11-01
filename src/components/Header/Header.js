import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {user.email &&
                    <Link to="/my-orders">My Orders</Link>
                }
                {
                    user?.email ?
                        <button onClick={logOut} className='btn-regular'>Logout</button>
                        :
                        <Link to="/login">Login</Link>
                }
                {
                    user.displayName &&
                    <span style={{ color: 'white', marginLeft: '2%' }}>
                        Hello - {user.displayName}
                    </span>
                }
            </nav>
        </div>
    );
};

export default Header;