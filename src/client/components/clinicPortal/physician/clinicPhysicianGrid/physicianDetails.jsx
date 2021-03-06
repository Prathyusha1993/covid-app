import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { states } from "../../../../services/common/optionsData";
import {
	updatePhysician,
	createPhysician,
	getPhysicianDataById,
} from "../../../../services/clinicPortalServices/physicianServices";
import { fetchFacilitiesForOrders } from "../../../../services/clinicPortalServices/facilityServices";
import { phoneNumberFormatter } from "../../../../services/common/util";
import { handleError } from "../../../../services/common/errorHandler";

export default class PhysicianDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			showMessage: false,
			message: "",
			physicianId:
				this.props && this.props.physicianId ? this.props.physicianId : "",
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
			facilities: [],
		};
	}

	componentDidMount() {
		if (this.state.physicianId !== "") {
			this.loadPhysicianDetails();
		}

		fetchFacilitiesForOrders().then((response) => {
			this.setState({ facilities: response.data });
		});
	}

	loadPhysicianDetails = () => {
		getPhysicianDataById(this.state.physicianId)
			.then((response) => {
				let physicianDetails = response.data[0];
				this.setState({
					firstName: physicianDetails ? physicianDetails.first_name : "",
					lastName: physicianDetails ? physicianDetails.last_name : "",
					code: physicianDetails ? physicianDetails.code : "",
					npi: physicianDetails ? physicianDetails.npi : "",
					mobile: physicianDetails ? physicianDetails.mobile : "",
					address1:
						physicianDetails && physicianDetails.address
							? physicianDetails.address.address1
							: "",
					address2:
						physicianDetails && physicianDetails.address
							? physicianDetails.address.address2
							: "",
					city:
						physicianDetails && physicianDetails.address
							? physicianDetails.address.city
							: "",
					state:
						physicianDetails && physicianDetails.address
							? physicianDetails.address.state
							: "",
					zip:
						physicianDetails && physicianDetails.address
							? physicianDetails.address.zip
							: "",
					country:
						physicianDetails && physicianDetails.address
							? physicianDetails.address.country
							: "",
					facilityId:
						physicianDetails && physicianDetails.facility_id
							? physicianDetails.facility_id._id
							: "",
				});
			})
			.catch((error) => {
				handleError(error);
			});
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleChange = (e) => {
		if (e.target.name === "mobile") {
			this.setState((prevState) => ({
				mobile: phoneNumberFormatter(e.target.value, prevState.mobile),
			}));
		}
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

		let physicianInfo = {
			id: this.state.physicianId,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			code: this.state.code,
			npi: this.state.npi,
			mobile: this.state.mobile,
			address1: this.state.address1,
			address2: this.state.address2,
			city: this.state.city,
			state: this.state.state,
			country: this.state.country,
			zip: this.state.zip,
			facilityId: this.state.facilityId,
		};
		console.log(physicianInfo);
		if (this.state.physicianId !== "") {
			updatePhysician(physicianInfo)
				.then((response) => {
					this.setState({
						showMessage: true,
						message: "Updated the changes successfully!!",
					});
				})
				.catch((error) => {
					handleError(error);
				});
		} else {
			createPhysician(physicianInfo)
				.then((response) => {
					this.setState({
						showMessage: true,
						message: "Saved the changes successfully!!",
					});
				})
				.catch((error) => {
					handleError(error);
				});
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
								<label>Facility</label>
								<select
									className="form-control select order-edit-formstyle"
									name="facilityId"
									value={this.state.facilityId}
									onChange={this.handleChange}
								>
									{this.state.facilities.map((facility) => {
										return (
											<option key={facility._id} value={facility._id} selected>
												{facility.name}
											</option>
										);
									})}
								</select>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>Phone Number</label>
								<input
									type="tel"
									name="mobile"
									value={this.state.mobile}
									onChange={this.handleChange}
									placeholder="(XXX) XXX-XXXX"
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
										return (
											<option key={state.value} value={state.value}>
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
									name="zip"
									value={this.state.zip}
									onChange={this.handleChange}
									className="form-control order-edit-formstyle"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div
							className="col-12"
							style={{
								paddingTop: "10px",
								borderTop: "1px solid rgba(0,0,0,.2",
							}}
						>
							<Button
								style={{ float: "right", marginLeft: "10px" }}
								variant="primary"
								onClick={this.updateAndCreatePhysician}
							>
								Save Changes
							</Button>
							<Button
								style={{ float: "right" }}
								variant="secondary"
								onClick={this.props.handleClose}
							>
								Close
							</Button>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<label style={{ float: "right", marginTop: "10px" }}>
								{this.state.message}
							</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
