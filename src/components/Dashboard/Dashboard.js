import React, { Component } from "react";
import "./Dashboard.css";
import PetCard from "./PetCard.js";

var logoStyle = {
  float: 'left',
  width: '70px',
  height: '40px'
};

var fetchStyle = {
  float: 'left',
  display: 'block',
  color: 'white',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: '2.5rem',
  marginLeft: '10px',
  flex: '1'
}

class Dashboard extends Component {

  componentWillMount() {
      document.title = "Dashboard | Fetch";
    }
    
    render(){
      return (
      <div>
        <div>
          <div class="navbar row col-12" >
            <div class="col-11 offset-lg-1">
              <img id="logo" class=" offset-lg-1" alt="dog face!" style={logoStyle} src="../assets/logo.png"></img>
              <h3 style={fetchStyle}>Fetch!</h3>
              <div class="menu"><h6>Matches</h6></div>
              <div class="menu"><h6>Home</h6></div>
            </div>
          </div>
        </div>

        <div class="row col-12 main">
          <div class="col-10 offset-lg-1">
            <div id="welcomeMessage">
              <h1>Hello, Kanza </h1>
              <p id="subTitle">View your suggested matches below!</p>
            </div>
            <div class="topMargin">
              <div>
                <h5>Filter By:</h5>
                <form>
                    <input placeholder="City, State or Zip Code"></input>
                    <input placeholder="Breed"></input>
                    <input placeholder="Sex"></input>
                    <input placeholder="Type of Pet"></input>

                    <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div class="topMargin">
              <PetCard/>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

export default Dashboard;