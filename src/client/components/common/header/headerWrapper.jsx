import React, { Component } from "react";
import { AGT_MCN_LOGO } from "./img.jsx";
import { Link } from "react-router-dom";

class HeaderWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="main-menu-wrapper">
				<div className="menu-header">
					<Link to="/home" className="menu-logo">
						<img src={AGT_MCN_LOGO} object-fit="cover" alt="" />
					</Link>
					<a
						id="menu_close"
						className="menu-close"
						onClick={() => this.onhandleCloseMenu()}
					>
						<i className="fas fa-times"></i>
					</a>
				</div>

				<ul className="main-nav">
					<li className="login-link">
						<a href="/clinic/patients" className="top-nav-button">
							{" "}
							Patients{" "}
						</a>
					</li>{" "}
					<li className="login-link">
						<a href="/clinic/orders" className="top-nav-button">
							{" "}
							Orders{" "}
						</a>
					</li>{" "}
					<li className="login-link">
						<a href="/clinic/audit" className="top-nav-button">
							{" "}
							Audit
						</a>
					</li>{" "}
					<li className="login-link">
						<a href="/clinic/facility" className="top-nav-button">
							{" "}
							Facility
						</a>
					</li>{" "}
					<li className="login-link">
						<a href="/clinic/physician" className="top-nav-button">
							{" "}
							Physician
						</a>
					</li>{" "}
				</ul>
			</div>
		);
	}
}

export default HeaderWrapper;
