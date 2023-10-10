import React from 'react'
import { Link } from 'react-router-dom';
const register = () => {
    const onsubmit = (ev)=>{
        ev.preventDefault();
    }
  return (
    <div className='login-signup-form animated fadeInDown'>
        <div className="form">
            <form onSubmit={onsubmit}>
                <h1 className='title'>Register For Free</h1>
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Password Confirmation' />
                <button className="btn btn-block">Login</button>
                <p className="message">
                    Already Registered ? <Link to="/login"> Login</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default register
