import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import { testTypes } from "../../../../services/common/optionsData";
import Barcode from "../barcode";
import { fetchPhysicians } from "../../../../services/clinicPortalServices/physicianServices";
import {
	saveRequisitionChanges,
	generateUniqueKey,
} from "../../../../services/clinicPortalServices/requisitionService";
import Picker from "./picker";

export default class ViewRequisitionFormpage extends Component {
	constructor(props) {
		super(props);
		let patientDetails =
			this.props && this.props.patientDetails ? this.props.patientDetails : "";
		this.state = {
			showMessage: false,
			show: this.props.show,
			patientName: patientDetails
				? patientDetails.firstName + " " + patientDetails.lastName
				: "",
			mrn: patientDetails ? patientDetails.mrn : "",
			dob:
				patientDetails && patientDetails.dob
					? moment(patientDetails.dob, "YYYY-MM-DD").format("MM/DD/YYYY")
					: "",
			gender: patientDetails ? patientDetails.sex : "",
			providers: [],
			selectedProviderId: "",
			facilitySource: "",

			testType: "",
			sample: "",
			collectedDate: "",
			collectorName: "",
			uniqueKey: "",
			receivedDate: "",
			requisition: "",
			covidDetected: "",
			testInfoCode: "SARS-CoV-2",
			testInfoCodeType: "",
			testInfoDescription: "Rt-PCR Test",
			// testInfoDescription: "",
			value: "",
			comments: "",
			pdfPath: "",
			resultDate: "",
			released: "",
			releasedBy: "",
			patientId: patientDetails ? patientDetails.patientId : "",
			facilityId: window.localStorage.getItem("FACILITY_ID"),
			orderDate: moment(new Date(), "MM/DD/YYYY hh:mm A").format(
				"YYYYMMDDHHmmss"
			),
			facilityOrderId: "",
			labOrderId: "",
			labSource: "",
			providerFirstName: "",
			providerLastName: "",
			providerNPI: "",
			resultCode: "",
			resultCodeType: "",
			resultDesc: "",
			errors: [],
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setComponentState(nextProps);
	}

	setComponentState = (props) => {
		const patientDetails = props.patientDetails;
		this.setState({
			showMessage: false,
			show: props.show,
			patientName: patientDetails
				? patientDetails.firstName + " " + patientDetails.lastName
				: "",
			mrn: patientDetails ? patientDetails.mrn : "",
			dob:
				patientDetails && patientDetails.dob
					? moment(patientDetails.dob, "YYYY-MM-DD").format("MM/DD/YYYY")
					: "",
			gender: patientDetails ? patientDetails.sex : "",
			providers: [],
			selectedProviderId: "",
			facilitySource: "",

			testType: "",
			sample: "",
			collectedDate: "",
			collectorName: "",
			uniqueKey: "",
			receivedDate: "",
			requisition: "",
			covidDetected: "",
			testInfoCode: "SARS-CoV-2",
			testInfoCodeType: "",
			testInfoDescription: "Rt-PCR Test",
			// testInfoDescription: "",
			value: "",
			comments: "",
			pdfPath: "",
			resultDate: "",
			released: "",
			releasedBy: "",
			patientId: patientDetails ? patientDetails.patientId : "",
			facilityId: window.localStorage.getItem("FACILITY_ID"),
			orderDate: moment(new Date(), "MM/DD/YYYY hh:mm A").format(
				"YYYYMMDDHHmmss"
			),
			facilityOrderId: "",
			labOrderId: "",
			labSource: "",
			providerFirstName: "",
			providerLastName: "",
			providerNPI: "",
			resultCode: "",
			resultCodeType: "",
			resultDesc: "",
			errors: [],
		});
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	hasError = (key) => {
		return this.state.errors.indexOf(key) !== -1;
	};

	handleChange = (e) => {
		if (e.target && e.target !== undefined) {
			this.setState({ [e.target.name]: e.target.value });
			if (e.target.name == "selectedProviderId") {
				var index = this.state.providers.findIndex(
					(i) => i._id === e.target.value
				);
				if (index > -1) {
					this.setState({
						providerFirstName: this.state.providers[index].first_name,
						providerLastName: this.state.providers[index].last_name,
						providerNPI: this.state.providers[index].npi,
					});
				}
			}
		} else {
			this.setState({
				collectedDate: e,
			});
		}
	};

	loadDataForModal = () => {
		this.getPhysicians();
		this.autoGenerateKey();
	};

	getPhysicians = () => {
		var facilityId = "605d5a61177b981d99677ea3"; // window.localStorage.getItem("FACILITY_ID");

		fetchPhysicians(facilityId).then((response) => {
			this.setState({ providers: response.data });
		});
	};

	autoGenerateKey = () => {
		generateUniqueKey().then((response) => {
			this.setState({
				uniqueKey: response.data,
				sample: response.data,
			});
		});
	};

	handleRequisitionChanges = () => {
		let errors = [];

		if (this.state.selectedProviderId === "") {
			errors.push("selectedProviderId");
		}

		if (this.state.testType === "") {
			errors.push("testType");
		}

		if (this.state.sample === "") {
			errors.push("sample");
		}
		this.setState({ errors: errors });
		if (errors.length > 0) {
			return false;
		}

		const reqInfo = {
			providerFirstName: this.state.providerFirstName,
			providerLastName: this.state.providerLastName,
			providerNPI: this.state.providerNPI,
			testInfoCode: this.state.testInfoCode,
			testInfoCodeType: this.state.testInfoCodeType,
			testInfoDescription: this.state.testInfoDescription,
			testType: this.state.testType,
			sample: this.state.sample,
			collectedDate: this.state.collectedDate
				? moment(this.state.collectedDate, "MM/DD/YYYY hh:mm A").format(
						"YYYYMMDDHHmmss"
				  )
				: "",
			receivedDate: this.state.receivedDate
				? moment(this.state.receivedDate, "MM/DD/YYYY hh:mm A").format(
						"YYYYMMDDHHmmss"
				  )
				: "",
			collectorName: this.state.collectorName,
			requisition: this.state.requisition,
			covidDetected: this.state.covidDetected,
			resultCode: this.state.resultCode,
			resultCodeType: this.state.resultCodeType,
			resultDesc: this.state.resultDesc,
			value: this.state.value,
			comments: this.state.comments,
			pdfPath: this.state.pdfPath,
			resultDate: this.state.resultDate,
			released: this.state.released,
			releasedBy: this.state.releasedBy,
			patientId: this.state.patientId,
			facilityId: this.state.facilityId,
			orderDate: this.state.orderDate,
			facilityOrderId: this.state.facilityOrderId,
			facilitySource: this.state.facilitySource,
			labOrderId: this.state.labOrderId,
			labSource: this.state.labSource,
		};
		saveRequisitionChanges(reqInfo).then((changedReqDetails) => {
			this.setState({
				reqInfo: changedReqDetails,
				showMessage: true,
			});
		});
	};

	render() {
		const formStyle = {
			borderTop: "none",
			borderLeft: "none",
			borderRight: "none",
			borderRadius: "0px",
		};
		return (
			<div>
				<Modal
					onEnter={this.loadDataForModal}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.props.hideCreateRequisitionHandler}
				>
					<Modal.Header closeButton>
						<Modal.Title>Create Requisition Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{/* <form> */}
						<div className="row form-row">
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Patient Name</label>
									<input
										style={formStyle}
										type="text"
										disabled
										className="form-control"
										name="patientName"
										value={this.state.patientName}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>MRN</label>
									<input
										style={formStyle}
										type="text"
										disabled
										className="form-control"
										name="mrn"
										value={this.state.mrn}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Date Of Birth</label>
									<input
										style={formStyle}
										type="text"
										disabled
										className="form-control"
										name="dob"
										value={this.state.dob}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Gender</label>
									<input
										style={formStyle}
										type="text"
										disabled
										className="form-control"
										name="gender"
										value={this.state.gender}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>
										Physician <span className="text-danger"> *</span>{" "}
									</label>
									<select
										required
										style={formStyle}
										type="text"
										name="selectedProviderId"
										value={this.state.selectedProviderId}
										onChange={this.handleChange}
										className={
											this.hasError("selectedProviderId")
												? "form-control select is-invalid"
												: "form-control"
										}
									>
										<option value="">Please select</option>
										{this.state.providers &&
											this.state.providers.map((prov) => {
												return (
													<option value={prov._id}>
														{prov.first_name + " " + prov.last_name}
													</option>
												);
											})}
									</select>
									<div
										className={
											this.hasError("selectedProviderId")
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
										Sample <span className="text-danger"> *</span>{" "}
									</label>
									<div class="input-group">
										<input
											required
											style={formStyle}
											type="text"
											name="sample"
											value={this.state.sample}
											onChange={this.handleChange}
											className={
												this.hasError("sample")
													? "form-control is-invalid"
													: "form-control"
											}
										/>
										<div>
											<div>
												<button
													className="btn btn-primary submit-btn button-info-grid"
													type="button"
													onClick={this.autoGenerateKey}
												>
													Auto Generate
												</button>
												{/* <Barcode /> */}
											</div>
										</div>
									</div>
									<div
										className={
											this.hasError("sample") ? "inline-errormsg" : "hidden"
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
									<label>Test Description </label>
									<input
										type="text"
										style={formStyle}
										className="form-control"
										name="description"
										disabled
										value={this.state.testInfoDescription}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>
										Test Type <span className="text-danger"> *</span>{" "}
									</label>
									<select
										required
										style={formStyle}
										name="testType"
										value={this.state.testType}
										onChange={this.handleChange}
										className={
											this.hasError("testType")
												? "form-control select is-invalid"
												: "form-control"
										}
									>
										{testTypes.map((test) => {
											return (
												<option value={test.value}>{test.testType}</option>
											);
										})}
									</select>
									<div
										className={
											this.hasError("testType") ? "inline-errormsg" : "hidden"
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
									<label>Collected Date</label>
									<Picker
										dtValue={this.state.collectedDate}
										onChange={this.handleChange}
									/>
									<label style={{ fontSize: "13px" }}>
										Date format - MM/DD/YYYY hh:mi AM/PM
									</label>
								</div>
							</div>

							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Collector Name</label>
									<input
										style={formStyle}
										type="text"
										className="form-control"
										name="collectorName"
										value={this.state.collectorName}
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</div>
						{/* </form> */}
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={this.props.hideCreateRequisitionHandler}
						>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleRequisitionChanges}>
							Save Changes
						</Button>
						{this.state.showMessage && (
							<p className="submit-success-msg">
								Your changes are succesfully saved!
							</p>
						)}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
