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
import Home from './components/home/home';


function App() {
return (
	<div className='App'>
		<div>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</main>
		</div>
	</div>
);
}


export default App;