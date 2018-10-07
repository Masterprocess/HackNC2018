import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Register.css";

class Register extends Component {   
  
 //  props = props.location.state.props.item;

  render()
  {
  	return (
  		<form method = "post" action = "" id = "register_form">
    		<input type = "text" name = "name" placeholder = "name" id = "form_name" class = "form_item"/>
    		<input type = "email" name = "email" placeholder = "email" id = "form_email" class = "form_item"/>
    		<input type = "password" name = "password" placeholder = "password" id = "form_password" class = "form_item"/>
    		<input type = "password" name = "confirm_password" placeholder = "Re-Enter Password" id = "form_confirm_pass" class = "form_item"/>
    		<input type = "submit" value = "submit" id = "form_sub" class = "form_item"/>
    	</form>
  	);
  }
};

export default Register;