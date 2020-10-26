import React from 'react'
import './Main.css'
import Products from '../Products/Products'
import Product from '../Product/Product'
import Seller from '../Seller/Seller'
import AboutUs from '../AboutUs/AboutUs'
import Cart from '../Cart/Cart'
import { Router, Switch, Route, Link } from 'react-router-dom'
const Main = (props) => {
    return (
        <Switch>
            <main>
                <Route path='/products'>
                    <Products />
                </Route>
                <Route path='/products:id'>
                    <Product />
                </Route>
                
                <Seller />
                <Cart />
                <AboutUs />
            </main>
        </Switch>
            
        
       
    )
}
export default Main

