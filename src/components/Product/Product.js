import React from 'react'
import './Product.css'


const Product = (props) => {
    console.log('product props- ', props)
    const [formData, setFormData] = React.useState(props.review)
    //something is not quite right here, the filter is showing all products
    //not just the one that was clicked
    const product = props.products.filter(product => product.name === props.match.params.name)

    console.log('result of product filter - ', product)
	const handleSubmit = (e) => {
	    e.preventDefault()
        props.handleSubmit(formData)
        //have to figure out how to update this url to reflect the actual id
        //of the selected item to post the review - this handleSubmit is for the
        //review form submit 
        //also should this update the item in the database? 
        props.history.push('/products/:id')
    }
    const handleChange = (e) => {
        console.log('handleChange', formData)
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    //nothing is actually being rendered here except a broken image link
    //I suspect it has something to do with the filter not outputting just one
    //product or maybe I've referenced it incorrectly here
    //I'm kind of lost
    return (
        <div>
            <div>
                <img src={props.products.img} alt='#'/>
            </div>
            <div>
                <h3>{props.products.product}</h3>
                <h4>{props.products.price}</h4>
                <p>{props.products.productDescription}</p>
                <button>Add to Cart</button>
            </div>
            <div>
                <h2>REVIEWS</h2>
                <div>
                    <p>{formData.name} <span>{formData.date}</span> {formData.rating}</p>
                    <p>{formData.review}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type= 'text' 
                    placeholder='Name'
                    name= 'name' 
                    value={formData.name}
                    onChange={handleChange}
                /> 
                <input 
                    type= 'text' 
                    placeholder='Date'
                    name= 'date'
                    value={formData.date}
                    onChange={handleChange}
                />
                <input 
                    type= 'text' 
                    placeholder='Rating'
                    name= 'rating'
                    value={formData.rating}
                    onChange={handleChange}
                />
                <input 
                    type= 'text' 
                    placeholder='Review'
                    name= 'review'
                    value={formData.review}
                    onChange={handleChange}
                />
                <input type= 'submit' value= 'Submit'/>
            </form>
        </div>
    )
}
export default Product