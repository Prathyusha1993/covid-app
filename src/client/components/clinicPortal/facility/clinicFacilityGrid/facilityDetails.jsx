import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
	faxTypes,
	states,
} from "../../patientSearch/clinicPatientGrid/optionsData";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { phoneNumberFormatter } from "../../../../utils/util";


export default class FacilityDetails extends Component {
	constructor(props) {
		super(props);
		let facilityDetails =
      this.props && this.props.facilityDetails ? this.props.facilityDetails : "";
		//console.log(props);
		// facility id is avaliable in props whnr edit btn is clicked and facilty id is empty when add btn is clicked.
		this.state = {
			show: false,
			//refreshGrid: props.data.refreshGrid,
			id: facilityDetails ? facilityDetails._id : '',
			name: facilityDetails ? facilityDetails.name : "",
			code: facilityDetails ? facilityDetails.code: "",
			contactName: facilityDetails ? facilityDetails.contact_name:"",
			phoneNum:facilityDetails ? facilityDetails.phone_no : "",
			contactEmail: facilityDetails ? facilityDetails.contact_email: "",
			faxNum: facilityDetails ? facilityDetails.fax_no : "",
			address1: facilityDetails && facilityDetails.address ? facilityDetails.address.address1: "",
			address2: facilityDetails && facilityDetails.address ? facilityDetails.address.address2: "",
			city: facilityDetails && facilityDetails.address ? facilityDetails.address.city: '',
			state: facilityDetails && facilityDetails.address? facilityDetails.address.state:'',
			zip: facilityDetails && facilityDetails.address? facilityDetails.address.zip :'',
			country: facilityDetails && facilityDetails.address ? facilityDetails.address.country : '',
			emailNotification: facilityDetails ?facilityDetails.email_notification_enabled:"",
			environmentalMonitoring: facilityDetails ? facilityDetails.environmental_monitoring_enabled:"",
			faxType: facilityDetails ? facilityDetails.fax_type:"",
			isActive: facilityDetails ? facilityDetails.isActive :"",
			errors: [],
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	// handleChange = (e) => {
	// 	this.setState({ [e.target.name]: e.target.value });
	// };
	handleChange = (input) => (e) => {
		const value = e.target.value;
		switch (input) {
		  case "phoneNum":
			this.setState((prevState) => ({
				phoneNum: phoneNumberFormatter(value, prevState.phoneNum),
			}));
			break;
	
		  case "emailNotification":
			const emailNotification = this.state.emailNotification;
			// if the check box is checked then add the item to the symptoms array
			if (
				emailNotification.findIndex((element) => element === value) === -1 &&
			  e.target.checked
			) {
				emailNotification.push(value);
			} else if (
				emailNotification.findIndex((element) => element === value) !== -1 &&
			  !e.target.checked
			) {
			  // if the check box is unchecked then delete the item from the symptoms array
			  emailNotification.splice(
				emailNotification.findIndex((element) => element === value),
				1
			  );
			}
			this.setState({ [input]: emailNotification });
			break;

			case "environmentalMonitoring":
			const environmentalMonitoring = this.state.environmentalMonitoring;
			// if the check box is checked then add the item to the symptoms array
			if (
				environmentalMonitoring.findIndex((element) => element === value) === -1 &&
			  e.target.checked
			) {
				environmentalMonitoring.push(value);
			} else if (
				environmentalMonitoring.findIndex((element) => element === value) !== -1 &&
			  !e.target.checked
			) {
			  // if the check box is unchecked then delete the item from the symptoms array
			  environmentalMonitoring.splice(
				environmentalMonitoring.findIndex((element) => element === value),
				1
			  );
			}
			this.setState({ [input]: environmentalMonitoring });
			break;
	
		  default:
			this.setState({ [input]: e.target.value });
			break;
		}
	  };

	hasError = (key) => {
		return this.state.errors.indexOf(key) !== -1;
	};

	//change it to save facility check for props.faciltyid !== '', update facility else craete facility.
	handleNewFacility = () => {
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

	};

	renderTooltipEdit = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Edit Facility
		</Tooltip>
	);

	render() {
		return (
			<div>
				{/* <div>
					<button
						onClick={this.handleShow}
						className="btn btn-primary submit-btn button-info-grid "
					>
						<i class="fas fa-user-plus"></i> Add Facility
					</button>
				</div> */}
				{/* <OverlayTrigger
					placement="top"
					delay={{ show: 100, hide: 400 }}
					overlay={this.renderTooltipEdit}
				>
					<button onClick={this.handleShow} className="edit-order-btn">
						<i class="fas fa-pen"></i>
					</button>
				</OverlayTrigger> */}

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
											name="zip"
											value={this.state.zip}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Email Notification </label>
										<input
										style={{}}
											type="checkbox"
											name="emailNotification"
											value={this.state.emailNotification}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Envirnomental Monitoring</label>
										<input
											type="number"
											name="environmentalMonitoring"
											value={this.state.environmentalMonitoring}
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
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleNewFacility}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
