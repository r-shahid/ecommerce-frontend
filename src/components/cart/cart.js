import React from 'react';
// import './style.css';
import { Link } from 'react-router-dom';

function Cart(props) {
	console.log('propsCart', props);

	let things = props.cart.map((x, y) => {
		return (
            // <tbody> specifies the table being used in the body. like...a table in a body.
            // <tr> is an element that defines a row of cells in a table. td is data cell and th is the header cell elements.
            // <td> is a standard table / data cell that shows in HTML
			<tbody>
				<tr>
					<td>{x.item}</td>
					<td>${x.price}</td>
					<td className='desc'>{x.itemDescription}</td>
					<td>
						<button className='remove' onClick={() => props.handleClick(y)}>
							Remove
						</button>
					</td>
				</tr>
			</tbody>
		);
	});

	return (
        // table tag shows a HTML table with two columns and two rows.
        // thead tag is a HTML table with a thead, tbody, tfoot elements.
        // th tag shows on HTML table with 3 rows, two header cells and four data cells.
		<div>
			<h1>Shopping Cart</h1>
			<div>
				<table>
					<thead>
						<tr>
							<th>Product Title</th>
							<th>Price</th>
							<th>Description</th>
							<th>Remove</th>
						</tr>
					</thead>
					{things}
				</table>
				<Link to='/checkout'>
					<button className='checkout'>Checkout</button>
				</Link>
				<div>
					<td></td>
				</div>
			</div>
		</div>
	);
}

export default Cart;
