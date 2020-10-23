import React from 'react'

const Seller = (props) => {
    return (
        <div>
            <h2>SELL ON IMPULSE</h2>
            <form>
                <input type= 'text' placeholder= 'ITEM NAME'></input> 
                <input type= 'text' placeholder= 'IMAGE URL'></input>
                <input type= 'text' placeholder= 'PRICE'></input>
                <input type= 'text' placeholder= 'ITEM DESCRIPTION'></input>
                <input type= 'submit'>SELL</input>
            </form>
            <p>By clicking "sell" you agree to Impulse Terms and Conditions...</p>
        </div>
        
    )
}
export default Seller