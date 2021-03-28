import React, { Component } from "react";
import { AGT_LOGO, AGT_MCN_LOGO } from "./img.jsx";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import {isUserLoggedIn} from "../../../utils/util";

let pathnames = window.location.pathname;
const url = pathnames.split("/").slice(0, -1).join("/");

class PatientPortalHeader extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light">
					<Navbar bg="light">
						<Link to="/home" className="navbar-brand ">							
							<img
								src={AGT_MCN_LOGO}
								width="400"								
								height="45"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
						</Link>
						
						 {/* {isUserLoggedIn() && (  */}
							<Navbar.Brand >
								<div>
								<ul className="main-nav" >
									<li className="nav-item">
										<a href="/clinic/patients" className="top-nav-button">
											{" "}
											Patients{" "}
										</a>
									</li>{" "}
									<li className="nav-item">
										<a href="/clinic/orders" className="top-nav-button">
											{" "}
											Orders{" "}
										</a>
									</li>
								</ul>
								</div>
						</Navbar.Brand>
						{/* )} */}
					</Navbar>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Brand>
							<img
								src={AGT_LOGO}
								width="200"
								height="70"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
						</Navbar.Brand>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default PatientPortalHeader;
