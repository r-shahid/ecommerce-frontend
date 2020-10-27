import React from 'react'
import './Seller.css'
const Seller = (props) => {
    const [formData, setFormData] = 
    React.useState({
        name: '',
        img: '',
        price: 0,
        description: ''
    })

	const handleSubmit = (e) => {
		e.preventDefault()
        handleSubmit(formData)
        props.history.push('/')
    }
    const handleChange = (e) => {
        console.log('handleChange', formData)
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h2>SELL ON IMPULSE</h2>
            <form onSubmit= {handleSubmit}>
                <input 
                    type= 'text' 
                    placeholder='ITEM NAME'
                    name= 'name' 
                    value={formData.name}
                    onChange={handleChange}
                /> 
                <input 
                    type= 'text' 
                    placeholder='IMAGE URL'
                    name= 'img'
                    value={formData.img}
                    onChange={handleChange}
                />
                <input 
                    type= 'text' 
                    placeholder='PRICE'
                    name= 'price'
                    value={formData.price}
                    onChange={handleChange}
                />
                <input 
                    type= 'text' 
                    placeholder='ITEM DESCRIPTION'
                    name= 'description'
                    value={formData.description}
                    onChange={handleChange}
                />
                <input 
                    type= 'submit' 
                    value= 'SELL'
                />
            </form>
            <p>By clicking "sell" you agree to Impulse Terms and Conditions...</p>
        </div>
        
    )
}
export default Seller