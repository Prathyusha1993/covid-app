import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
	saveOrderEditData,
	updateResultPDF,
} from "../../../../clinicPortalServices/orderEditService";
import {
	faxTypes,
	results,
} from "../../patientSearch/clinicPatientGrid/optionsData";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {getPhysicianDataById} from "../../../../clinicPortalServices/physicianServices";

export default class EditPhysician extends Component {
	constructor(props) {
		super(props);
		//console.log(props);
		this.state = {
			show: false,
			//refreshGrid: props.data.refreshGrid,
			firstName: "",
			lastName: "",
			code: "",
			npi: "",
			mobile: "",
			address: "",
			facilityId: "",
			physicianDetails:[],
			physicianId:'',
			errors: [],
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	hasError = (key) => {
		return this.state.errors.indexOf(key) !== -1;
	};

	handleToggleEnabled = () => {
		this.setState({ isActive: true });
	};

	
	handlePhysicianChanges = () => {
		let errors = [];

		if (this.state.firstName === "") {
			errors.push("firstName");
		}
        if (this.state.lastName === "") {
			errors.push("lastName");
		}

		if (this.state.npi === "") {
			errors.push("npi");
		}

		this.setState({ errors: errors });
		if (errors.length > 0) {
			return false;
		}
	};

	renderTooltipEdit = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Edit Physician
		</Tooltip>
	);

	loadPhysicianDetails = () => {
		getPhysicianDataById(this.state.physicianId).then((response) => {
			this.setState({physicianDetails: response.data[0]})
		})
	}

	render() {
		return (
			<div>
				<OverlayTrigger
					placement="top"
					delay={{ show: 100, hide: 400 }}
					overlay={this.renderTooltipEdit}
				>
					<button onClick={this.handleShow} className="edit-order-btn">
						<i class="fas fa-pen"></i>
					</button>
				</OverlayTrigger>

				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Edit Physician Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="row form-row">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>
											First Name <span className="text-danger"> *</span>{" "}
										</label>
										<input
											type="text"
											name="firstName"
											value={this.state.firstName}
											onChange={this.handleChange}
											required
											className={
												this.hasError("firstName")
													? "form-control is-invalid"
													: "form-control order-edit-formstyle"
											}
										/>
										<div
											className={
												this.hasError("firstName")
													? "inline-errormsg"
													: "hidden"
											}
										>
											<i class="fa fa-exclamation-circle" aria-hidden="true">
												This field is required.
											</i>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>
											Last Name <span className="text-danger"> *</span>{" "}
										</label>
										<input
											type="text"
											name="lastName"
											value={this.state.lastName}
											onChange={this.handleChange}
											required
											className={
												this.hasError("lastName")
													? "form-control is-invalid"
													: "form-control order-edit-formstyle"
											}
										/>
										<div
											className={
												this.hasError("lastName") ? "inline-errormsg" : "hidden"
											}
										>
											<i class="fa fa-exclamation-circle" aria-hidden="true">
												This field is required.
											</i>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>
											Code 
										</label>
										<input
											type="text"
											name="code"
											value={this.state.code}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>NPI <span className="text-danger"> *</span>{" "}</label>
										<input
											type="text"
											name="npi"
											value={this.state.npi}
											onChange={this.handleChange}
											className={
												this.hasError("npi")
													? "form-control is-invalid"
													: "form-control order-edit-formstyle"
											}
										/>
										<div
											className={
												this.hasError("npi") ? "inline-errormsg" : "hidden"
											}
										>
											<i class="fa fa-exclamation-circle" aria-hidden="true">
												This field is required.
											</i>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Phone Number</label>
										<input
											type="number"
											name="mobile"
											value={this.state.mobile}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											name="address"
											value={this.state.address}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Facility Id</label>
										<input
											type="text"
											name="facilityId"
											value={this.state.facilityId}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
										/>
									</div>
								</div>
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handlePhysicianChanges}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
