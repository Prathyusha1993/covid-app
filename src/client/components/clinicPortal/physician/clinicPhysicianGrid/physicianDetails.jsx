import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { states } from "../../patientSearch/clinicPatientGrid/optionsData";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export default class PhysicianDetails extends Component {
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
			address1: "",
			address2: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			facilityId: "",
			errors: [],
		};
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

	updateAndCreatePhysician = () => {
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
										this.hasError("firstName") ? "inline-errormsg" : "hidden"
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
								<label>Code</label>
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
								<label>
									NPI <span className="text-danger"> *</span>{" "}
								</label>
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
								<label>Address1</label>
								<input
									type="text"
									name="address1"
									value={this.state.address1}
									onChange={this.handleChange}
									className="form-control order-edit-formstyle"
								/>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>Address2</label>
								<input
									type="text"
									name="address2"
									value={this.state.address2}
									onChange={this.handleChange}
									className="form-control order-edit-formstyle"
								/>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>City</label>
								<input
									type="text"
									name="city"
									value={this.state.city}
									onChange={this.handleChange}
									className="form-control order-edit-formstyle"
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
										return <option value={state.value}>{state.state}</option>;
									})}
								</select>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>Zip Code</label>
								<input
									type="text"
									name="zip"
									value={this.state.zip}
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
					<div
						className="row col-12"
						style={{
							float: "right",
							paddingTop: "10px",
							borderTop: "1px solid black",
						}}
					>
						<Button variant="secondary" onClick={this.props.handleClose}>
							Close
						</Button>
						<Button
							style={{ marginLeft: "10px" }}
							variant="primary"
							onClick={this.updateAndCreatePhysician}
						>
							Save Changes
						</Button>
					</div>
				</form>
				{/* </Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleNewPhysician}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal> */}
			</div>
		);
	}
}
