import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { states } from "./stateOptionsData";
import { fetchPatientEditData } from "../../../../clinicPortalServices/patientEditService";

export default class BtnCellRenderer extends Component {
	constructor(props) {
		super(props);

		// console.log('BtnCellRenderer',BtnCellRenderer.getValueToDisplay(props));

		this.state = {
			show: false,
			firstName: props.data.first_name,
			lastName: props.data.last_name,
			dob: props.data.date_of_birth,
			gender: props.data.gender,
			mrn: props.data.mrn,
			email: props.data.email,
			mobile: props.data.mobile,
			address1:
				props.data.address && props.data.address.address1
					? props.data.address.address1
					: "",
			address2:
				props.data.address && props.data.address.address2
					? props.data.address.address2
					: "",
			city:
				props.data.address && props.data.address.city
					? props.data.address.city
					: "",
			state:
				props.data.address && props.data.address.state
					? props.data.address.state
					: "",
			zip:
				props.data.address && props.data.address.zip
					? props.data.address.zip
					: "",
			country: "",
			stateOptions: "",
			id: "",
			loading: false,
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

	handlePatientEditChanges = (e) => {
		//api edit changes here
		e.preventDefault();

		const editParams = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			dob: this.state.dob,
			gender: this.state.gender,
			mrn: this.state.mrn,
			email: this.state.email,
			mobile: this.state.mobile,
			address1: this.state.address1,
			address2: this.state.address2,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
		};
		fetchPatientEditData(editParams).then((userDetails) => {
			this.setState({
				editParams: userDetails,
				show: false,
			});
		});
	};

	render() {
		return (
			<div>
				<button
					onClick={this.handleShow}
					style={{ border: "none", backgroundColor: "transparent" }}
				>
					<i class="fas fa-pen"></i>
				</button>

				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Edit Patient Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="row form-row">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>First Name</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="firstName"
											value={this.state.firstName}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Last Name</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="lastName"
											value={this.state.lastName}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Date of Birth</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="date"
											className="form-control "
											name="dob"
											value={this.state.dob}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Gender</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control "
											name="gender"
											value={this.state.gender}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>MRN</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="mrn"
											value={this.state.mrn}
											onChange={this.handleChange}
										/>
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Email ID</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="email"
											className="form-control"
											name="email"
											value={this.state.email}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Mobile</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="mobile"
											value={this.state.mobile}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Address Line 1</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="address1"
											value={this.state.address1}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Address Line 2</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="address2"
											value={this.state.address2}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>City</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="city"
											value={this.state.city}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>State</label>
										<select
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											className="form-control select"
											name="state"
											value={this.state.state}
											onChange={this.handleChange}
										>
											{states.map((state) => {
												return (
													<option value={state.value}>{state.state}</option>
												);
											})}
										</select>
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Zip Code</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="zip"
											value={this.state.zip}
											onChange={this.handleChange}
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
						<Button variant="primary" onClick={this.handlePatientEditChanges}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
