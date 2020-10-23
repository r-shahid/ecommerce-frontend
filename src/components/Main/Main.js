import React from 'react'
import Products from '../Products/Products'
import Product from '../Product/Product'
import Seller from '../Seller/Seller'
import AboutUs from '../AboutUs/AboutUs'

const Main = (props) => {
    return (
        <main>
            <Products />
            <Product />
            <Seller />
            <AboutUs />
        </main>
       
    )
}
export default Main