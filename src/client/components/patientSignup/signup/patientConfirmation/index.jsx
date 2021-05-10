import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { insuranceProvider } from "../selectOptionsData";
import { relation } from "../selectOptionsData";

class PatientConfirmation extends Component {
	constructor(props) {
		super(props);
		this.state = {
            success:"Thank you for choosinig us!! You will receive an email and/or text confirmation."
        };
	}

	render() {
		return (
			<div style={{height: '100vh'}}>
				<p className="submit-success-msg">{this.state.success}</p>
			</div>
		);
	}
}

export default PatientConfirmation;
