import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, setError } = useAuth()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const history = useHistory();
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div className='bellow-header login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" placeholder='Your Password' />
                    <br /><br />
                    <input className='btn-regular' type="submit" value="Submit" name="" id="" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <p>----------| OR |----------</p>
                <button className='btn-regular' onClick={handleGoogleLogIn}>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default Login;