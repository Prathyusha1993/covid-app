import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
	faxTypes,
	states,
} from "../../patientSearch/clinicPatientGrid/optionsData";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { phoneNumberFormatter } from "../../../../services/common/util";
import {
	createFacility,
	updateFacility,
} from "../../../../services/clinicPortalServices/facilityServices";
import PhoneInput from "react-phone-number-input";

export default class FacilityDetails extends Component {
	constructor(props) {
		super(props);
		let facilityDetails =
			this.props && this.props.facilityDetails
				? this.props.facilityDetails
				: "";
		//console.log(props);
		this.state = {
			show: this.props.show,
			showMessage: false,
			message: "",
			id: facilityDetails ? facilityDetails._id : "",
			name: facilityDetails ? facilityDetails.name : "",
			code: facilityDetails ? facilityDetails.code : "",
			contactName: facilityDetails ? facilityDetails.contact_name : "",
			phoneNum: facilityDetails ? facilityDetails.phone_no : "",
			contactEmail: facilityDetails ? facilityDetails.contact_email : "",
			faxNum: facilityDetails ? facilityDetails.fax_no : "",
			address1:
				facilityDetails && facilityDetails.address
					? facilityDetails.address.address1
					: "",
			address2:
				facilityDetails && facilityDetails.address
					? facilityDetails.address.address2
					: "",
			city:
				facilityDetails && facilityDetails.address
					? facilityDetails.address.city
					: "",
			state:
				facilityDetails && facilityDetails.address
					? facilityDetails.address.state
					: "",
			zip:
				facilityDetails && facilityDetails.address
					? facilityDetails.address.zip
					: "",
			country:
				facilityDetails && facilityDetails.address
					? facilityDetails.address.country
					: "",
			emailNotification: facilityDetails
				? facilityDetails.email_notification_enabled
				: "",
			environmentalMonitoring: facilityDetails
				? facilityDetails.environmental_monitoring_enabled
				: "",
			faxType: facilityDetails ? facilityDetails.fax_type : "",
			isActive: facilityDetails ? facilityDetails.isActive : "",
			facilityId:
				this.props && this.props.facilityId ? this.props.facilityId : "",
			errors: [],
		};
	}

	handleClose = () => {
		this.setState({ show: false });
	};

	handleChange = (e) => {
		// this.setState({ [e.target.name]: e.target.value });
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		// if (name === "phoneNum") {
		// 	this.setState({
		// 		phoneNum: phoneNumberFormatter(e.target.value)
		// 	});
		// }

		this.setState((prevState) => ({
			phoneNum: phoneNumberFormatter(value, prevState.phoneNum),
		}));

		this.setState({
			[name]: value,
		});
	};

	hasError = (key) => {
		return this.state.errors.indexOf(key) !== -1;
	};

	//change it to save facility check for props.faciltyid !== '', update facility else craete facility.
	updateAndCreateFacility = () => {
		let errors = [];

		if (this.state.name === "") {
			errors.push("name");
		}

		if (this.state.code === "") {
			errors.push("code");
		}
		this.setState({ errors: errors });
		if (errors.length > 0) {
			return false;
		}

		let facilityInfo = {
			name: this.state.name,
			code: this.state.code,
			contactName: this.state.contactName,
			phoneNum: this.state.phoneNum,
			contactEmail: this.state.contactEmail,
			faxNum: this.state.faxNum,
			address1: this.state.address1,
			address2: this.state.address2,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			country: this.state.country,
			emailNotification: this.state.emailNotification,
			environmentalMonitoring: this.state.environmentalMonitoring,
			faxType: this.state.faxType,
			isActive: this.state.isActive,
		};
		console.log(facilityInfo);
		// return;
		if (this.state.facilityId !== "") {
			updateFacility(facilityInfo)
				.then((response) => {
					this.setState({
						showMessage: true,
						message: "Updated the changes successfully!!",
					});
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			createFacility(facilityInfo)
				.then((response) => {
					this.setState({
						showMessage: true,
						message: "Thank you.",
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	renderTooltipEdit = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Edit Facility
		</Tooltip>
	);

	render() {
		return (
			<div>
				<form>
					<div className="row form-row">
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>
									Name <span className="text-danger"> *</span>{" "}
								</label>
								<input
									type="text"
									name="name"
									value={this.state.name}
									onChange={this.handleChange}
									required
									// className="form-control order-edit-formstyle"
									className={
										this.hasError("name")
											? "form-control is-invalid"
											: "form-control order-edit-formstyle"
									}
								/>
								<div
									className={
										this.hasError("name") ? "inline-errormsg" : "hidden"
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
									Code <span className="text-danger"> *</span>{" "}
								</label>
								<input
									type="text"
									name="code"
									value={this.state.code}
									onChange={this.handleChange}
									required
									className={
										this.hasError("name")
											? "form-control is-invalid"
											: "form-control order-edit-formstyle"
									}
								/>
								<div
									className={
										this.hasError("code") ? "inline-errormsg" : "hidden"
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
								<label>Contact Name</label>
								<input
									type="text"
									name="contactName"
									value={this.state.contactName}
									onChange={this.handleChange}
									className="form-control order-edit-formstyle"
								/>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>Phone Number</label>
								<input
									type="tel"
									name="phoneNum"
									value={this.state.phoneNum}
									onChange={this.handleChange}
									placeholder="(XXX) XXX-XXXX"
									className="form-control order-edit-formstyle"
								/>
								{/* <PhoneInput
									country="US"
									name="phoneNum"
									placeholder="(XXX) XXX-XXXX"
									value={this.state.phoneNum}
									onChange={this.handleChange}
								/> */}
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>Contact Email</label>
								<input
									type="email"
									name="contactEmail"
									value={this.state.contactEmail}
									onChange={this.handleChange}
									className="form-control order-edit-formstyle"
								/>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<label>Fax #</label>
								<input
									type="text"
									name="faxNum"
									value={this.state.faxNum}
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
								<label>Fax Type</label>
								<select
									name="faxType"
									value={this.state.faxType}
									onChange={this.handleChange}
									className="form-control select order-edit-formstyle"
								>
									{faxTypes.map((fax) => {
										return <option value={fax.value}>{fax.value}</option>;
									})}
								</select>
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="form-group">
								<input
									style={{ margin: "13px", width: "20px", height: "20px" }}
									type="checkbox"
									name="emailNotification"
									checked={this.state.emailNotification}
									onChange={this.handleChange}
								/>
								<label>Email Notification </label>
								<br />
								<input
									style={{ margin: "13px", width: "20px", height: "20px" }}
									type="checkbox"
									name="environmentalMonitoring"
									checked={this.state.environmentalMonitoring}
									onChange={this.handleChange}
								/>
								<label>Envirnomental Monitoring</label>
							</div>
						</div>
					</div>
					<div
						className=" col-12"
						style={{ paddingTop: "10px", borderTop: "1px solid rgba(0,0,0,.2" }}
					>
						<Button
							style={{ marginLeft: "500px" }}
							variant="secondary"
							onClick={this.props.handleClose}
						>
							Close
						</Button>
						<Button
							type="submit"
							style={{ marginLeft: "10px" }}
							variant="primary"
							onClick={this.updateAndCreateFacility}
						>
							Save Changes
						</Button>
					</div>
				</form>
			</div>
		);
	}
}
