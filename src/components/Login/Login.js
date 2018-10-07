import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Login.css";

class Login extends Component {   
  
 //  props = props.location.state.props.item;

	componentWillMount() {
		document.title = "Home | Fetch";
	}

  render()
  {
  	return(
  		<form method = "post" id = "login_form">
  			<input type = "text" name = "email" id = "form_email" class = "form_item" placeholder = "email"/>
  			<input type = "password" name = "password" id = "form_password" class = "form_item" placeholder = "password"/>
  			<input type = "submit" value = "form_sub" id = "form_submit" />
  		</form>
  	)
  }
};

export default Login;