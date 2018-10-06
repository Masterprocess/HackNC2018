import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Login.css";

const Login = (props) => {   
  
 //  props = props.location.state.props.item;


  return (
    <Wrapper>
      <Navbar/>
      <div>Fill out the Registration!</div>
    </Wrapper>
  )
};

export default Login;