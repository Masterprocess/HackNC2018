import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Register.css";

class Register extends Component {   
  
 //  props = props.location.state.props.item;

  render()
  {
  	return (
  		<form method = "post" action = "">
    		<input type = "text" name = "name" placeholder = "name"/>
    		<input type = "email" name = "email" placeholder = "email"/>
    		<input type = "password" name = "password" placeholder = "password"/>
    		<input type = "password" name = "confirm_password" placeholder = "Re-Enter Password"/>
    		<input type = "submit" value = "submit" />
    	</form>
  	);
  }
};

export default Register;