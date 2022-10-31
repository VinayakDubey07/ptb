import React from 'react'
import "./signup.css"

const Signup = () => {
  return (
    <div className='page'>
    <div className='cover'>
        <h1>Signup</h1>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Phone Number' />
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Confirm Password'/>
        <div className='login-btn'>
            Signup
        </div>
    </div>
    </div>
  )
}

export default Signup