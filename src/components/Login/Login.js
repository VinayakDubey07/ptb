import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='page'>
    <div className='cover'>
        <h1>Login</h1>
        <input className='input' type="text" placeholder='Email' />
        <input className='input' type="password" placeholder='Password'/>
        <div>
        <h5>Dont have an Acoount yet? Sign up</h5>
        <h5>Are you a Faculty? Click Here</h5>
        </div>
        
        <div className='login-btn'>
            Login
        </div>
    </div>
    </div>
  )
}

export default Login