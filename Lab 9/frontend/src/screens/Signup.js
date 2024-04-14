import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Signup.css';

const Signup = () => {
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/app/signup', {
        uid,
        password
      });
      console.log(response.data);
      setSignupSuccess(true);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      {!signupSuccess ? (
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      ) : (
        <p className="success">User signed up successfully</p>
      )}
      <p>Already have an account? <a href="/app/login">Login</a></p>
    </div>
  );
};

export default Signup;
