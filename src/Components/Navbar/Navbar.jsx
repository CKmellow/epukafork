import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='overlay'></div> {/* Add the overlay div here */}
      <div className='nav'>
        <div className='nav-logo'>Epuka</div>
        <ul className='nav-menu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weather">Weather Forecast</Link></li>
          <li><Link to="/StreamSociety">Stream society</Link></li>
          <li><Link to="/LearningResources">Learning Resources</Link></li>
          {/* <li className='nav-partner'><Link to="/login">Login</Link></li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
