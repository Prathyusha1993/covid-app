import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { saveOrderEditData } from "../../../../clinicPortalServices/orderEditService";
import moment from "moment";

export default class EditBtnCellRenderer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			gender: props.data.gender ? props.data.gender: '',
			dob: props.data.dob ? props.data.dob : '',
			mrn:props.data.mrn ? props.data.mrn: '',
			physician:
				props.data && props.data.provider ? props.data.provider : "" ,
			facilitySource: props.data.facility_source ? props.data.facility_source : '',
			receivedDate:
				props.data && props.data.received
					? props.data.received
					: "",
			description:
				props.data && props.data.description
					? props.data.description
					: "",
			testType:
				props.data && props.data.test_type
					? props.data.test_type
					: "",
			sample:
				props.data && props.data.sample
					? props.data.sample
					: "",
			result:
				props.data && props.data.covid_detected
					? props.data.covid_detected
					: "",
			collectedDate:
				props.data && props.data.collected
					? props.data.collected
					: "",
			
			requisition:
				props.data && props.data.requisition
					? props.data.requisition
					: "",
			patientName:
			props.data && props.data.patientName ? props.data.patientName : '' 
			
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

	handleOrderEditChanges = () => {
		const editParams = {
			description: this.state.description,
			testType: this.state.testType,
			sample: this.state.sample,
			result: this.state.result,
			collectedDate: this.state.collectedDate,
			provider: this.state.provider,
			receivedDate: this.state.receivedDate,
			requisition: this.state.requisition,
			patientName: this.state.patientName,
		};
		saveOrderEditData(editParams).then((userDetails) => {
			//make api call to get patient info parameter is patient_id
			this.setState({
				editParams: userDetails,
				show: false,
			});

			// call refresh grid function
			this.props.data.refreshGrid();
		});
	};

	render() {
		const formStyle = {
			borderTop: "none",
			borderLeft: "none",
			borderRight: "none",
			borderRadius: "0px"
		};
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
						<Modal.Title>Edit Order Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
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
											onChange={this.handleChange}
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
											onChange={this.handleChange}
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
											onChange={this.handleChange}
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
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Physician</label>
										<input
											style={formStyle}
											type="text"
											className="form-control"
											name="physician"
											disabled
											value={this.state.physician}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Facility</label>
										<input
											style={formStyle}
											type="text"
											className="form-control"
											name="facilitySource"
											disabled
											value={this.state.facilitySource}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Test Description</label>
										<input
											type="text"
											style={formStyle}
											className="form-control"
											name="description"
											value={this.state.description}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Test Type</label>
										<input
											style={formStyle}
											type="text"
											disabled
											className="form-control"
											name="testType"
											value={this.state.testType}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Requisition</label>
										<input
											style={formStyle}
											type="text"
											className="form-control"
											name="requisition"
											value={this.state.requisition}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Sample</label>
										<input
											style={formStyle}
											type="text"
											className="form-control "
											name="sample"
											value={this.state.sample}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Collected Date</label>
										<input
											style={formStyle}
											type="text"
											className="form-control"
											name="collectedDate"
											value={this.state.collectedDate}
											onChange={this.handleChange}
										/>
										<label style={{fontSize: '13px'}}>Date format - MM/DD/YYYY hh:mi am/pm</label>
									</div>
								</div>


								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Received Date</label>
										<input
											style={formStyle}
											type="text"
											className="form-control"
											name="receivedDate"
											value={this.state.receivedDate}
											onChange={this.handleChange}
										/>
										<label style={{fontSize: '13px'}}>Date format - MM/DD/YYYY hh:mi am/pm</label>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Result</label>
										<select
											style={formStyle}
											className="form-control select"
											name="result"
											value={this.state.result}
											onChange={this.handleChange}
										>
											<option>Select</option>
											<option>SARS-CoV-2 Not Detected</option>
											<option>SARS-CoV-2 Detected</option>
											<option>SARS-CoV-2 Inconclusion</option>
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
						<Button variant="primary" onClick={this.handleOrderEditChanges}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
