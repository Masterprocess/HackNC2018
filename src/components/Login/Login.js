import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

	componentWillMount() {
		document.title = "Home | Fetch";
	}

	render() {
		return (
			<div>
			    <div id="titleCenterDiv">
					<div id="contentDiv">
					  <h1 id="homeTitle">
							<img id="logo" alt="dog face!" src="../assets/doggo.png"></img>
							yeet
						</h1>
						<a href="/signup" className="titleButton" id="signUpButton">Sign Up</a>
						<a href="/login" className="titleButton" id="logIn">Log In</a>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Login;