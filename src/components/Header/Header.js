import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom'
import logo from '../images/impulse_logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    {/* <p>LOGO</p> */}
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="page-links">
                <div>
                    <Link to="/about">
                    <p>About</p>
                    </Link> 
                </div>
                <div>
                    <Link to="/cart">
                    <p>Cart</p>
                    </Link> 
                </div>
                <div>
                    <Link to="/sell">
                    <p>Sell</p>
                    </Link> 
                </div>
            </div>
        </div>
    )
}
export default Header