import React , {useState} from "react";
import "./NavBar.css";
import {Link } from 'react-router-dom'
import assets from "./assets/assets";


const Navbar = () => {
    const  [logggedIn,setLoggedIn]=useState(true)
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'><img src={assets.logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li>
            <Link to='/explore'>Explore</Link>
            </li>
        <li>
            <Link to='/contact'>Contact
            </Link>
        </li>
       {
        logggedIn ? (<li>
            <Link to='/profile'> <i className="fas fa-user" style={{ color: 'white' }}></i>
            </Link>
        </li>) : (<li>
            <Link to='/login'>Login
            </Link>
        </li>)
       }
      </ul>
    </nav>
  );
};

export default Navbar;
