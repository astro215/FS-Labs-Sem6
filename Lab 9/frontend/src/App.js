import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Navbar from "./screens/navbar";
import Welcome from "./screens/Welcome";



const App = () => {
  useEffect(() => {
    document.title = "MERN Authentication"; // Change the title here
  }, []); // Empty dependency array to ensure the effect runs only once


  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to="/app/login" />} /> {/* Redirect root path to /app/login */}
                <Route path='/app/login' element={<Login />} />
                <Route path="/app/signup" element={<Signup />} />
                <Route path="/welcome" element={<Welcome/>} />
            </Routes>
        </Router>
    </div>
  );
};
export default App;
