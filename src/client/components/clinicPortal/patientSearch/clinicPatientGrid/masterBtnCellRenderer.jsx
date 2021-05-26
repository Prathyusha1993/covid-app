import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { updatePatientData } from "../../../../services/clinicPortalServices/patientEditService";
import { states, identity } from "../../../../services/common/optionsData";

export default class MasterBtnCellRenderer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			firstName: props.data.first_name ? props.data.first_name : " ",
			lastName: props.data.last_name ? props.data.last_name : " ",
			dob: props.data.date_of_birth ? props.data.date_of_birth : " ",
			gender: props.data.gender ? props.data.gender : " ",
			mrn: props.data.mrn ? props.data.mrn : " ",
			email: props.data.email ? props.data.email : " ",
			mobile: props.data.mobile ? props.data.mobile : " ",
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
			country:
				props.data.address && props.data.address.country
					? props.data.address.country
					: "",

			_id: props.data._id,
			loading: false,
			stateOptions: "",
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		const intialState = {
			firstName: this.props.data.first_name ? this.props.data.first_name : "",
			lastName: this.props.data.last_name ? this.props.data.last_name : "",
			dob: this.props.data.date_of_birth ? this.props.data.date_of_birth : "",
			gender: this.props.data.gender ? this.props.data.gender : "",
			mrn: this.props.data.mrn ? this.props.data.mrn : "",
			email: this.props.data.email ? this.props.data.email : "",
			mobile: this.props.data.mobile ? this.props.data.mobile : "",
			address1:
				this.props.data.address && this.props.data.address.address1
					? this.props.data.address.address1
					: "",
			address2:
				this.props.data.address && this.props.data.address.address2
					? this.props.data.address.address2
					: "",
			city:
				this.props.data.address && this.props.data.address.city
					? this.props.data.address.city
					: "",
			state:
				this.props.data.address && this.props.data.address.state
					? this.props.data.address.state
					: "",
			zip:
				this.props.data.address && this.props.data.address.zip
					? this.props.data.address.zip
					: "",
			country:
				this.props.data.address && this.props.data.address.country
					? this.props.data.address.country
					: "",

			_id: this.props.data._id ? this.props.data._id : "",
		};
		this.setState({ show: false, ...intialState });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handlePatientEditChanges = (e) => {
		e.preventDefault();

		const editParams = {
			_id: this.state._id,
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
			country: this.state.country,
		};
		updatePatientData(editParams).then((userDetails) => {
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
										<label style={{ fontWeight: "100" }}>First Name</label>
										<input
											type="text"
											className="form-control order-edit-formstyle"
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
											type="text"
											className="form-control order-edit-formstyle"
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
											type="date"
											className="form-control order-edit-formstyle"
											name="dob"
											value={this.state.dob}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Gender</label>
										<select
											className="form-control select order-edit-formstyle"
											name="gender"
											value={this.state.gender}
											onChange={this.handleChange}
										>
											{identity.map((identity) => {
												return (
													<option key={identity.value} value={identity.value}>
														{identity.gender}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>MRN</label>
										<input
											type="text"
											className="form-control order-edit-formstyle"
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
											type="email"
											className="form-control order-edit-formstyle"
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
											type="text"
											className="form-control order-edit-formstyle"
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
											type="text"
											className="form-control order-edit-formstyle"
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
											type="text"
											className="form-control order-edit-formstyle"
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
											type="text"
											className="form-control order-edit-formstyle"
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
											className="form-control select order-edit-formstyle"
											name="state"
											value={this.state.state}
											onChange={this.handleChange}
										>
											{states.map((state) => {
												return (
													<option value={state.value}>
														{state.state}
													</option>
												);
											})}
										</select>
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Zip Code</label>
										<input
											type="text"
											className="form-control order-edit-formstyle"
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
