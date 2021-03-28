import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { fetchOrderEditData } from "../../../../clinicPortalServices/orderEditService";
import moment from "moment";

export default class EditBtnCellRenderer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			description:
				props.data.test_info && props.data.test_info.description
					? props.data.test_info.description
					: "",
			testType:
				props.data.test_info && props.data.test_info.test_type
					? props.data.test_info.test_type
					: "",
			sample:
				props.data.test_info && props.data.test_info.sample
					? props.data.test_info.sample
					: "",
			result:
				props.data.test_info && props.data.test_info.covid_detected
					? props.data.test_info.covid_detected
					: "",
			collectedDate:
				props.data.test_info && props.data.test_info.collected
					? moment(props.data.test_info.collected, "YYYYMMDDhhmmss").format(
							"MM/DD/YYYY h:mm a"
					  )
					: "",
			provider:
				props.data.provider.first_name + " " + props.data.provider.last_name,
			receivedDate:
				props.data.test_info && props.data.test_info.received
					? moment(props.data.test_info.received, "YYYYMMDDhhmmss").format(
							"MM/DD/YYYY h:mm a"
					  )
					: "",
			requisition:
				props.data.test_info && props.data.test_info.requisition
					? props.data.test_info.requisition
					: "",
			patientName:
				props.data.patient_id.first_name +
				" " +
				props.data.patient_id.last_name,
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
		fetchOrderEditData(editParams).then((userDetails) => {
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
						<Modal.Title>Edit Order Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="row form-row">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Test Description</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
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
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
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
										<label>Patient Name</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
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
										<label>Sample</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
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
										<label>Result</label>
										<select
											className="form-control select"
											name="result"
											value={this.state.result}
											onChange={this.handleChange}
										>
											<option>Select</option>
											<option>SARS-CoV-2 Not Detected</option>
											<option>SARS-CoV-2 Detected</option>
										</select>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Collected Date</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="collectedDate"
											value={this.state.collectedDate}
											onChange={this.handleChange}
										/>
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Provider</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="provider"
											disabled
											value={this.state.provider}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Received Date</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="receivedDate"
											value={this.state.receivedDate}
											onChange={this.handleChange}
										/>
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Requisition</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
											name="requisition"
											value={this.state.requisition}
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
						<Button variant="primary" onClick={this.handleOrderEditChanges}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
