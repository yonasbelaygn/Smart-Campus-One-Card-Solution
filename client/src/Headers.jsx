import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <nav className="navbar">
      <h1 className='h'>Laptop Checker</h1>
      <div className='d-flex gap-3' >
      <Link to ="/Home" className="btn btn-primary">Home</Link>
      <Link to ="/Login" className="btn btn-primary">Login</Link>
      <Link to ="/Signup" className="btn btn-primary">Register</Link>
      <Link to ="/Check" className="btn btn-primary">Check Serial No</Link>
      <Link to ="/Functions" className="btn btn-primary">All in one</Link>
      </div>
      <div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
    </nav>
  );
};

export default Headers;