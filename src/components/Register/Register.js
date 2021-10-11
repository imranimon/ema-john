import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bellow-header login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder='Your Name' />
                    <br/>
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br/>
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br/>
                    <input type="password" name="" id="" placeholder='Re-Enter Password' />
                    <br/><br />
                    <input className='btn-regular' type="submit" name="" id="" value="Submit" />
                </form>
                <p>Already have an acount? <Link to="/login">Login</Link></p>
                <p>----------| OR |----------</p>
                <button className='btn-regular'>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;