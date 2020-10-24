import React from 'react'
import './Header.css';
// import {Link} from 'react-router-dom'
// import logo -- once the logo is made, we can just put it into the nav bar

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                {/* <Link to="/"> */}
                    <p>LOGO</p>
                {/* </Link> */}
            </div>
            <div className="page-links">
                <div>
                    {/* <Link to="/about"> */}
                    <p>About</p>
                    {/* </Link>  */}
                </div>
                <div>
                    {/* <Link to="/about"> */}
                    <p>Cart</p>
                    {/* </Link>  */}
                </div>
                <div>
                    {/* <Link to="/about"> */}
                    <p>Sell</p>
                    {/* </Link>  */}
                </div>
            </div>
        </div>
    )
}
export default Header