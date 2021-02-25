import React, { Component } from "react";
import { LOGO01, LOGO02 } from "./img.jsx";
import { Navbar } from "react-bootstrap";

class PatientPortalHeader extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light">
					<Navbar bg="light">
						<Navbar.Brand>
							<img
								src={LOGO02}
								width="400"
								height="45"
								object-fit="cover"
								className="d-inline-block align-top"
								alt=""
							/>
						</Navbar.Brand>
					</Navbar>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Brand>
							<img
								src={LOGO01}
								width="200"
								height="110"
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
