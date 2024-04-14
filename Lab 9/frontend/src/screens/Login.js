import React, { useState } from 'react';
import axios from 'axios';
import Welcome from './Welcome'; // Import the Welcome component
import '../styles/Login.css';

const Login = () => {
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [error, setError] = useState(null); // State to track login error

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/app/login', {
        uid,
        password
      });

      console.log(response.data); // You might want to handle success differently

      // If user and password are correct, set login status to true
      setLoggedIn(true);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error logging in:', error.response.data.error);
      // Set error message based on response from the server
      setError(error.response.data.error);
      setLoggedIn(false); // Set login status to false
    }
  };

  // If logged in, render the Welcome component
  if (loggedIn) {
    return <Welcome username={uid} />;
  }

  // Render the login form
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <p>Don't have an account? <a href="/app/signup">Signup</a></p>
    </div>
  );
};

export default Login;
