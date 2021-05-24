import React, { Component } from "react";

class HeaderWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="row">
				<ul className="main-nav">
					<li>
						<a href="/clinic/patients"> Patients </a>
					</li>
					<li>
						<a href="/clinic/orders"> Orders </a>
					</li>
					<li>
						<a href="/clinic/audit"> Audit </a>
					</li>
				</ul>
			</div>
		);
	}
}

export default HeaderWrapper;
