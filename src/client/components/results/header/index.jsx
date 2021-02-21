import React, { Component } from "react";
import { LOGO01, LOGO02 } from "./img.jsx";
import { Navbar } from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light">
					<Navbar bg="light">
						<Navbar.Brand className="font-weight-bold" href="#home">MY<span style={{color:'red'}}>COVID</span>NOW<span>.com</span> </Navbar.Brand>
					</Navbar>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						{/* <Navbar.Text>
							Signed in as: <a href="#login">Mark Otto</a>
						</Navbar.Text> */}
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

export default Header;
