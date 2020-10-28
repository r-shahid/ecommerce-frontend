import React from 'react'
import './Products.css'
import placeholder from "../images/placeholder.jpg"
//this page should have a map that creates multiple cards(maybe)?? 
//which contain product images and names 
const Products = (props) => {
    console.log('Products props- ', props)
    const {products} = props
    const loaded = () => (
        <div>
              {products.map((ele, ind) => (
                <div>
                    <img src={products[ind].img} alt='#'/>
                    <p>{products[ind].product}</p>
                </div>  
            ))}
        </div>  
    )
    return products.length > 0 ? loaded(): <h1>Products loading</h1>
}
export default Products