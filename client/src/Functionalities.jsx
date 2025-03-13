import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

const Functionalities = () => {
  return (
    <div>
      <div className='d-flex gap-3' >
      <a href="/Signup" className="btn btn-primary">Register</a>
      <a href="/Check" className="btn btn-primary">Check Serial Number</a>

      </div>
      
      </div>
    
  );
};

export default Functionalities;