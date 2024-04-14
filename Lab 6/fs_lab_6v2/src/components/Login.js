import React from 'react'
import '../styles/Login.css'

function Login() {
  return (
    <div className='body'>
        <form className='form'>
            <label for='label'>User Id</label>
            <input type='text' id='userid' name='userid' placeholder='Enter User Id' required></input>
            <br></br>
            <label for='label'>Password</label>
            <input type='password' id='password' name='password' placeholder='Enter Password' required></input>

            <br></br>
            <input type='submit' value='Log In'></input>

        

        </form>

      
    </div>
  )
}

export default Login
