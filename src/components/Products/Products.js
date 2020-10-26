import React from 'react'
import './Products.css'
import placeholder from "../images/placeholder.jpg"
//this page should have a map that creates multiple cards(maybe)?? 
//which contain product images and names 
const Products = (props) => {
    return (
        <div>
            <img src={placeholder} alt='#'/>
            <p>product name</p>
        </div>
      
    )
}
export default Products