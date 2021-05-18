import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
	saveOrderEditData,
	updateResultPDF,
} from "../../../../clinicPortalServices/orderEditService";
import moment from "moment";
import {
	faxTypes,
	results,
} from "../../patientSearch/clinicPatientGrid/optionsData";
import { testTypes } from "../../patientSearch/clinicPatientGrid/optionsData";
import { fetchOrderFaxData } from "../../../../clinicPortalServices/orderEditService";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default class AddPhysician extends Component {
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

	// handleOrderEditChanges = () => {
	// 	const editParams = {
	// 		description: this.state.description,
	// 		testType: this.state.testType,
	// 		sample: this.state.sample,
	// 		result: this.state.result,
	// 		collectedDate: this.state.collectedDate
	// 			? moment(this.state.collectedDate, "MM/DD/YYYY hh:mm A").format(
	// 					"YYYYMMDDHHmmss"
	// 			  )
	// 			: "",
	// 		provider: this.state.provider,
	// 		receivedDate: this.state.receivedDate
	// 			? moment(this.state.receivedDate, "MM/DD/YYYY hh:mm A").format(
	// 					"YYYYMMDDHHmmss"
	// 			  )
	// 			: "",
	// 		requisition: this.state.requisition,
	// 		patientName: this.state.patientName,
	// 		orderId: this.state.orderId,
	// 		email: this.state.email,
	// 		mobile: this.state.mobile,
	// 		facilitySource: this.state.facilitySource,
	// 		mrn: this.state.mrn,
	// 		dob: this.state.dob,
	// 		pdfPath: this.state.pdfPath,
	// 		released: this.state.released,
	// 		releasedBy: this.state.releasedBy,
	// 	};
	// 	saveOrderEditData(editParams).then((userDetails) => {
	// 		this.setState({
	// 			editParams: userDetails,
	// 			show: false,
	// 		});

	// 		// call refresh grid function
	// 		//this.props.data.refreshGrid();
	// 		this.state.refreshGrid();

	// 		editParams.collectedDate = editParams.collectedDate
	// 			? moment(editParams.collectedDate, "YYYYMMDDHHmmss").format(
	// 					"MM/DD/YYYY hh:mm A"
	// 			  )
	// 			: "";
	// 		editParams.receivedDate = editParams.receivedDate
	// 			? moment(editParams.receivedDate, "YYYYMMDDHHmmss").format(
	// 					"MM/DD/YYYY hh:mm A"
	// 			  )
	// 			: "";
	// 		//call this method to generate/update the result letter pdf
	// 		updateResultPDF(editParams).then((data) => {});
	// 	});
	// };

    handleNewPhysician = () => {
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

	render() {
		return (
			<div>
				<div>
					<button
						onClick={this.handleShow}
						className="btn btn-primary submit-btn button-info-grid "
					>
						<i class="fas fa-user-plus"></i> Add Physician
					</button>
				</div>

				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Add Physician Information</Modal.Title>
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
						<Button variant="primary" onClick={this.handleNewPhysician}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
