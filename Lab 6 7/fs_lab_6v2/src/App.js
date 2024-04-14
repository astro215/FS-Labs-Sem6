import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/navbar';



function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path='/login' element={<Login />} />
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
