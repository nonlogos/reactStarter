import React from 'react';
import { Link } from 'react-router';
import { BrowserRouter, Match } from "react-router";

import HomeComponent from './home_component'
import PagesComponent from './pages_component'

const App = (props) => {
	return(
		<BrowserRouter>
			<div className="app">
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/pages">Pages</Link></li>
					</ul>
				</nav>
				<section>
					<Match exactly pattern="/" component={HomeComponent} />
					<Match exactly pattern="/pages" component={PagesComponent} />
				</section>
			</div>
		</BrowserRouter>
	);
}

export default App;