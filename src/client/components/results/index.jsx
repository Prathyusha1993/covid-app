import React, { Component } from "react";
import Header from './header';
import LoginContainer from './login'


class Results extends Component {
	render() {
		return (
			<div>
				<div>
					<Header />
                    <br/>
                    <LoginContainer />
				</div>
			</div>
		);
	}
}
export default Results;
