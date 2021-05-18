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

export default class AddFacility extends Component {
	constructor(props) {
		super(props);
		//console.log(props);
		this.state = {
			show: false,
			//refreshGrid: props.data.refreshGrid,
			name: "",
			code: "",
			contactName: "",
			phoneNum: "",
			contactEmail: "",
			faxNum: "",
			address: "",
			emailNotification: "",
			environmentalMonitoring: "",
			faxType: "",
			isActive: "",
            errors:[],
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	  handleClose = () => {
	    // const intialState = {
	    //   orderId: this.props.data.orderId,
	    //   gender: this.props.data.gender ? this.props.data.gender : "",
	    //   dob: this.props.data.dob ? this.props.data.dob : "",
	    //   mrn: this.props.data.mrn ? this.props.data.mrn : "",
	    //   provider:
	    //     this.props.data && this.props.data.provider
	    //       ? this.props.data.provider
	    //       : "",
	    //   facilitySource: this.props.data.facilitySource
	    //     ? this.props.data.facilitySource
	    //     : "",
	    //   receivedDate:
	    //     this.props.data && this.props.data.receivedDate
	    //       ? this.props.data.receivedDate
	    //       : "",
	    //   description:
	    //     this.props.data && this.props.data.description
	    //       ? this.props.data.description
	    //       : "",
	    //   testType:
	    //     this.props.data && this.props.data.testType
	    //       ? this.props.data.testType
	    //       : "",
	    //   sample:
	    //     this.props.data && this.props.data.sample ? this.props.data.sample : "",
	    //   result:
	    //     this.props.data && this.props.data.result ? this.props.data.result : "",
	    //   collectedDate:
	    //     this.props.data && this.props.data.collectedDate
	    //       ? this.props.data.collectedDate
	    //       : "",

	    //   requisition:
	    //     this.props.data && this.props.data.requisition
	    //       ? this.props.data.requisition
	    //       : "",
	    //   code: this.props.data && this.props.data.code ? this.props.data.code : "",
	    //   codeType:
	    //     this.props.data && this.props.data.codeType
	    //       ? this.props.data.codeType
	    //       : "",
	    //   patientName:
	    //     this.props.data && this.props.data.patientName
	    //       ? this.props.data.patientName
	    //       : "",
	    //   email:
	    //     this.props.data && this.props.data.email ? this.props.data.email : "",
	    //   mobile:
	    //     this.props.data && this.props.data.mobile ? this.props.data.mobile : "",
	    //   pdfPath:
	    //     this.props.data && this.props.data.pdfPath
	    //       ? this.props.data.pdfPath
	    //       : "",
	    //   released:
	    //     this.props.data && this.props.data.released
	    //       ? this.props.data.released
	    //       : "",
	    //   releasedBy:
	    //     this.props.data && this.props.data.releasedBy
	    //       ? this.props.data.releasedBy
	    //       : "",
	    // };
	    // this.setState({ show: false, ...intialState });
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

    handleFaxChanges = () => {
        let errors = [];

    if (this.state.name === "") {
      errors.push("name");
    }

    if (this.state.code === "") {
      errors.push("code");
    }

    if (this.state.isActive === "") {
      errors.push("isActive");
    }
    this.setState({ errors: errors });
    if (errors.length > 0) {
      return false;
    }
    };

	renderTooltipEdit = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Edit Order
		</Tooltip>
	);

	render() {
		return (
			<div>
				<OverlayTrigger
					placement="top"
					delay={{ show: 100, hide: 400 }}
					overlay={this.renderTooltipEdit}
				>
					<button onClick={this.handleShow} className="btn btn-primary submit-btn button-info-grid ">
                    <i class="fas fa-user-plus"></i> Add Facility
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
						<Modal.Title>Edit Facility Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="row form-row">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Name <span className="text-danger"> *</span>{" "}</label>
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
										<label>Code <span className="text-danger"> *</span>{" "}</label>
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
											type="number"
											name="phoneNum"
											value={this.state.phoneNum}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>contact Email</label>
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
										<label>Email Notification</label>
										<input
											type="number"
											name="emailNotification"
											value={this.state.emailNotification}
											onChange={this.handleChange}
											className="form-control order-edit-formstyle"
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
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>is Active <span className="text-danger"> *</span>{" "}</label>
										<input
											type="checkbox"
											name="isActive"
											value={this.state.isActive}
											onChange={this.handleChange}
											required
											className={
												this.hasError("isActive")
													? "form-control is-invalid"
													: "form-control order-edit-formstyle"
											}
										/>
										<div
											className={
												this.hasError("isActive") ? "inline-errormsg" : "hidden"
											}
										>
											<i class="fa fa-exclamation-circle" aria-hidden="true">
												This field is required.
											</i>
										</div>
									</div>
								</div>
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleFaxChanges}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
