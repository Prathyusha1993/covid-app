import React, { Component } from "react";
import Header from './header';
import LoginContainer from './login'
import Dashboard from './dashboard'

class Results extends Component {
	render() {
		return (
			<div>
				<div>
					<Header />
                    <br/>
                    <LoginContainer />
					<br />
					{/* <Dashboard /> */}
				</div>
			</div>
		);
	}
}
export default Results;
