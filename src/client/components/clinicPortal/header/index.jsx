import React, { Component } from "react";
import { AGT_LOGO, AGT_MCN_LOGO } from "./img.jsx";
import { Navbar } from "react-bootstrap";

class ClinicPortalHeader extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light">
					<Navbar bg="light">
						<Navbar.Brand>
							<img
								src={AGT_MCN_LOGO}
								// width="400"
								width="200"
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

export default ClinicPortalHeader;
