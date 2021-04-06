import React, { Component } from "react";
import { AGT_LOGO, AGT_MCN_LOGO } from "./img.jsx";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../../../utils/util";
import Dropdown from "react-bootstrap/Dropdown";
import DOC_IMG from "../../../assets/images/doctors/doctor-thumb-02.jpg";

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
		window.localStorage.removeItem("FACILITY_ID");
		window.localStorage.removeItem("AUTH-TOKEN");
	};
	render() {
		return (
			<div>
				<Navbar bg="light">
					<Navbar bg="light">
						<Link
							to=""
							className="navbar-brand "
							style={{ marginRight: "40px" }}
						>
							<img
								src={AGT_MCN_LOGO}
								width="400"
								height="45"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
						</Link>

						{isUserLoggedIn() && this.state.showClinicMenu && (
							<Navbar.Brand>
								<div className="row">
									<ul className="main-nav">
										<li>
											<a href="/clinic/patients"> Patients </a>
										</li>
										<li>
											<a href="/clinic/orders"> Orders </a>
										</li>
									</ul>
								</div>
							</Navbar.Brand>
						)}
					</Navbar>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						{isUserLoggedIn() && this.state.showClinicMenu && (
							<Navbar.Brand style={{marginRight: "50px"}}>
								<>
									<Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											<img
												className="rounded-circle"
												src={DOC_IMG}
												width="31"
												alt="Darren Elder"
											/>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="/doctor/profile-setting">
												Profile Settings
											</Dropdown.Item>
											<Dropdown.Item href="/clinic">Logout</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</>
							</Navbar.Brand>
						)}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default PatientPortalHeader;
