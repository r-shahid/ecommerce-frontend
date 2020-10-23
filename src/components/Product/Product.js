import React from 'react'

const Product = (props) => {
    return (
        <div>
            <div>
                <img>product image</img>
            </div>
            <div>
                <h3>PRODUCT NAME</h3>
                <h4>Cost</h4>
                <p>Product Description</p>
                <button>Add to Cart</button>
            </div>
            <div>
                <h3>REVIEWS</h3>
                <p>Review Text</p>
            </div>
            <form>
                <input type= 'text' placeholder= 'Name'></input> 
                <input type= 'text' placeholder= 'Date'></input>
                <input type= 'text' placeholder= 'Rating'></input>
                <input type= 'text' placeholder= 'Review'></input>
                <input type= 'submit'>SUBMIT</input>
            </form>
        </div>
    )
}
export default Product