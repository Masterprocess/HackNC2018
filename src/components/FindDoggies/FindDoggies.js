import React, { Component } from 'react';
import "./FindDoggies.css";

class FindDoggies extends Component{
	constructor() {
		super();
		this.state = {
			doggies: [],
		};
		
};

componentDidMount() {

	fetch('https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=b2434a6ca9e8998d7d9423c2f34fbfe7&location=27510')
	.then(results => {
		return results.json();
	}).then(data => { console.log(data);

	})
	
}

render() {
	return (
		<div>
				<div id="titleCenterDiv">
				<div id="contentDiv">
					<h1 id="homeTitle">
						<img id="logo" alt="dog face!" src="../assets/doggo.png"></img>
						Fetch
					</h1>
					<a href="/signup" className="titleButton" id="signUpButton">Sign Up</a>

					
				</div>
			</div>
		</div>
	)
}
}

export default FindDoggies;