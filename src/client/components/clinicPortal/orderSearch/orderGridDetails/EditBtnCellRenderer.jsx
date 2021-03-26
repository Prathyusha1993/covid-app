import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class EditBtnCellRenderer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			description: "",
			testType: "",
			sample: "",
			result: "",
			collectedDate: "",
			provider: "",
			receivedDate: "",
			requisition: "",
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
		//api edit changes here
	};

	render() {
		return (
			<div>
				<Button onClick={this.handleShow} style={{ border: "none" }}>
					<i class="fas fa-pen"></i>
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal</Modal.Title>
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
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
