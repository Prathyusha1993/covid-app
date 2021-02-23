import React, { Component } from "react";
import Header from './header';
import LoginContainer from './login'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from './dashboard'

class Results extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
              		<Route path="/results" exact component={LoginContainer} />
              		<Route path="/results/dashboard" exact component={Dashboard} />
				</Router>
				
			</div>
		);
	}
}
export default Results;


