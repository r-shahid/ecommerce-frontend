import React, { 
  // useState, 
  // useEffect
 } 
  from 'react';

import { 
  Switch, 
  Route, 
  // Link, 
  // Redirect
 } 
  from 'react-router-dom';

import './App.css';
import Products from '../Products/Products';


function App() {
return (
	<div className='App'>
		<div>
			<main>
				<Switch>
					<Route exact path='/' component={Products} />
				</Switch>
			</main>
		</div>
	</div>
);
}


export default App;