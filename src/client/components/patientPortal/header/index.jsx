import React, { Component } from "react";
import { AGT_LOGO, AGT_MCN_LOGO } from "./img.jsx";
import { Navbar } from "react-bootstrap";
import {
	isUserLoggedIn,
	isSuperAdminLoggedIn,
	getUserRole,
} from "../../../utils/util";
import Dropdown from "react-bootstrap/Dropdown";
import { logout } from "../../../services/clinicPortalServices/loginService";

let pathnames = window.location.pathname;
const url = pathnames.split("/").slice(0, -1).join("/");

class PatientPortalHeader extends Component {
	constructor(props) {
		super(props);
		const clinicUrl = props.location.pathname.split("/")[1];
		this.state = {
			showClinicMenu:
				clinicUrl.trim().toLowerCase() === "clinic" ? true : false,
		};
	}

	logout = () => {
		logout();
		window.localStorage.removeItem("FACILITY_ID");
		window.localStorage.removeItem("AUTH-TOKEN");
	};
	render() {
		let userRole = getUserRole();
		let role = userRole && userRole.toLowerCase().trim() === "superadmin";
		return (
			<div>
				<Navbar bg="light">
					<Navbar bg="light">
						<a
							href="/home"
							className="navbar-brand "
							style={{ marginRight: "150px" }}
						>
							<img
								src={AGT_MCN_LOGO}
								width="400"
								height="45"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
						</a>
						{isUserLoggedIn() && this.state.showClinicMenu && role ? (
							<Navbar.Brand>
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
										<li>
											<a href="/clinic/facility"> Facility </a>
										</li>
										<li>
											<a href="/clinic/physician"> Physician </a>
										</li>
									</ul>
								</div>
							</Navbar.Brand>
						) : (
							<div>
								{this.state.showClinicMenu && isUserLoggedIn() ? (
									<Navbar.Brand>
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
									</Navbar.Brand>
								) : null}
							</div>
						)}
					</Navbar>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						{isUserLoggedIn() && this.state.showClinicMenu && role ? (
							<Navbar.Brand style={{ marginRight: "50px" }}>
								<>
									<Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											<i
												className="fa fa-user-circle fa-2x"
												style={{ color: "#0369b3" }}
												aria-hidden="true"
											></i>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item onClick={this.logout} href="/clinic">
												Logout
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</>
							</Navbar.Brand>
						) : (
							<div>
								{this.state.showClinicMenu && isUserLoggedIn() ? (
									<Navbar.Brand style={{ marginRight: "50px" }}>
									<>
										<Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
											<Dropdown.Toggle variant="success" id="dropdown-basic">
												<i
													className="fa fa-user-circle fa-2x"
													style={{ color: "#0369b3" }}
													aria-hidden="true"
												></i>
											</Dropdown.Toggle>
	
											<Dropdown.Menu>
												<Dropdown.Item onClick={this.logout} href="/clinic">
													Logout
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									</>
								</Navbar.Brand>
								) : null}
							</div>
						)}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default PatientPortalHeader;
