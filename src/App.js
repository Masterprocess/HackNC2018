import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Register from "./components/Register";
import Logout from "./components/Logout";
import './App.css';
import FindDoggies from './components/FindDoggies';
// import Cards, { Card } from './components/Cards';


class App extends Component {
  render() {
    return (
	    <Switch>
	      <Route exact path='/' component={Home} />
	        <Route path='/register' component={Register} />
	      	<Route path='/login' component={Login}/>
					<Route path='/dashboard' component={Dashboard}/>
					{/* <Route path='/swipe' component={Cards}/> */}
					<Route path='/logout' component={Logout}/>
					<Route path='/finddoggies' component={FindDoggies}/>
	    </Switch>
    );
  }
}

export default App;
