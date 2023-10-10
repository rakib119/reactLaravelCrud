import React from 'react'
import { Link } from 'react-router-dom';
const onsubmit = (ev)=>{
    ev.preventDefault();
}
const login = () => {
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className="form">
            <form onSubmit={onsubmit}>
                <h1 className='title'>Login into your account</h1>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button className="btn btn-block">Login</button>
                <p className="message">
                    Not Registered ? <Link to="/register"> Create an Account</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default login
