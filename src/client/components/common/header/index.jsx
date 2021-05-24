import React, { Component } from "react";
import { AGT_MCN_LOGO } from "./img.jsx";
import { Navbar } from "react-bootstrap";
import HeaderWrapper from "./headerWrapper";
import { isUserLoggedIn, getUserRole } from "../../../services/common/util";
import HeaderMenuDropdown from "./headerMenuDropdown";
import { logout } from "../../../services/clinicPortalServices/loginService";
import Dropdown from "react-bootstrap/Dropdown";
import HeaderMenuNav from "./headerMenuNav";

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

	onHandleMobileMenu = () => {
		let root = document.getElementsByTagName("html")[0];
		root.classList.add("menu-opened");
	};

	onhandleCloseMenu = () => {
		let root = document.getElementsByTagName("html")[0];
		root.classList.remove("menu-opened");
	};

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
							href="#0"
							id="mobile_btn"
							onClick={() => this.onHandleMobileMenu()}
						>
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
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
						<HeaderWrapper onhandleCloseMenu={this.onhandleCloseMenu} />

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
										<HeaderMenuNav />
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
										<HeaderMenuDropdown logout={this.logout} />
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
