import React, { Component } from "react";

class PatientConfirmation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success:
				"Thank you for choosing us!! You will receive an email and/or text confirmation.",
		};
	}

	render() {
		return (
			<div style={{ height: "100vh" }}>
				<p className="submit-success-msg">{this.state.success}</p>
			</div>
		);
	}
}

export default PatientConfirmation;
