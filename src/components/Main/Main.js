import React from 'react'
import './Main.css'
import Products from '../Products/Products'
import Product from '../Product/Product'
import Seller from '../Seller/Seller'
import AboutUs from '../AboutUs/AboutUs'
import Cart from '../Cart/Cart'
const Main = (props) => {
    return (
        <main>
            <Products />
            <Product />
            <Seller />
            <Cart />
            <AboutUs />
        </main>
       
    )
}
export default Main

