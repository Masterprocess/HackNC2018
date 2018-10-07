import React, { Component } from "react";
import LoginButton from "../LoginButton";
import "./Home.css";

class Home extends Component {

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
							Fetch
						</h1>
						<a href="/signup" className="titleButton" id="signUpButton">Sign Up</a>
						<LoginButton/>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Home;