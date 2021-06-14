import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

class HeaderMenuDropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	};

	render() {
		return (
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
						<Dropdown.Item onClick={this.props.logout} href="/clinic">
							Logout
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</>
		);
	}
}

export default HeaderMenuDropdown;
