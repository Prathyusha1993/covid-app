import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import FacilityDetails from "./facilityDetails";

export default class AddFacility extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			firstName: "",
			lastName: "",
			code: "",
			npi: "",
			mobile: "",
			address: "",
			facilityId: "",
			errors: [],
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<div>
				<button
					className="btn btn-primary submit-btn button-info-grid"
					onClick={() => this.handleShow()}
				>
					<i class="fas fa-user-plus"></i> Add Facility
				</button>
				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Add Facility Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FacilityDetails handleClose={this.handleClose} />
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}
