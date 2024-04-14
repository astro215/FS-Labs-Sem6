import React from 'react'
import '../styles/Signup.css'

function Signup() {
    return (
        <div className='body'>
            <form className='signup'>
                <label for='label'>User Id</label>
                <input type='text' id='userid' name='userid' required></input>
               
                <label for='label'>Password</label>
                <input type='password' id='password' name='password' required></input>
             

                <label for='label'>Confirm Password</label>
                <input type='password' id='cpassword' name='cpassword' required></input>

                <label for='label'>Name</label>
                <input type='text' id='name' name='name' required></input>

                <label for='label'>Email</label>
                <input type='email' id='email' name='email' required></input>

                <label for='label'>Country</label>
                <select id='country' name='country' required>
                    <option value='Bangladesh'>Bangladesh</option>
                    <option value='India'>India</option>
                    <option value='Pakistan'>Pakistan</option>
                    <option value='Sri Lanka'>Sri Lanka</option>
                </select>

                <input type='submit' name='Registration' value='Sign Up'></input>

            
            </form>
    
        
        </div>
    )
}

export default Signup