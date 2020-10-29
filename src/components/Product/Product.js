import React from 'react'
import './Product.css'


const Product = (props) => {
    console.log('product props- ', props)
    const [formData, setFormData] = React.useState(props.review)
    const product = props.products.filter(product => product.name === props.match.params.name)[0]

    console.log('result of product filter - ', product)
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
                <img src={product.img} alt='#'/>
            </div>
            <div>
                <h3>{product.product}</h3>
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