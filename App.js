import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="navbar">
        <NavLink to="/" end>Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
