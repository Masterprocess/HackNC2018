import React, { Component } from "react";
import "./Home.css";

class Home extends Component {

	componentWillMount() {
		document.title = "Home | Doggers";
	}

	render() {
		return (
			<div>
			    <div id="titleCenterDiv">
					<div id="contentDiv">
						{/* <h1 id="homeTitle">
							<img id="logo" alt="" src="../assets/"></img>
						</h1> */}
						<a href="/signup" className="titleButton" id="signUpButton">Sign Up</a>
						<a href="/login" className="titleButton" id="logIn">Log In</a>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Home;