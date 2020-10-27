import React from 'react'
import './Product.css'
import placeholder from "../images/placeholder.jpg"

const Product = (props) => {
    const [formData, setFormData] = React.useState(props.review)

	const handleSubmit = (e) => {
		e.preventDefault()
        props.handleSubmit(formData)
        props.history.push('/products:id')
    }
    const handleChange = (e) => {
        console.log('handleChange', formData)
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div>
                <img src={placeholder} alt='#'/>
            </div>
            <div>
                <h3>PRODUCT NAME</h3>
                <h4>Cost</h4>
                <p>Product Description</p>
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