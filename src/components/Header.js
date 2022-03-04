import React from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css";

const Header = () => {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                    Le Restaurant
                </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to = "/signup">Sign Up</Link>
                </li>
            </ul>  
            <ul>
                <li>
                    <Link to = "/menu">Menu</Link>
                </li>
            </ul>
               <ul>
                <li>
                    <Link to = "/cart" className='cart'>
                        <i class="fas fa-shopping-cart" />
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to = "/booking">Booking</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to = "/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;
