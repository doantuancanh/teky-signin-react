import React, { Component } from 'react';

class HomePage extends Component {

	SignOout = () => {
		
	}
	render() {
		return (
			<div className="container">
				<h1>Home Page</h1>
				<a className="SignOut" onClick={ this.SignOut }>Sign Out</a>
			</div>
		);
	}
}
	
export default HomePage;