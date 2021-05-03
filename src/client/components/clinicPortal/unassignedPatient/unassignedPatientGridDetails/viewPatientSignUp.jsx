import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SignUp from "../../../patientSignup/signup";

class ViewPatientSignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: "No result",
			show: false,
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	
	render() {
		return (
			<div>
				{/* <button
					onClick={this.handleShow}
					// style={{ border: "none", backgroundColor: "transparent" }}
          className="btn btn-primary submit-btn button-info-grid"
				>
          
          <i class="fa fa-qrcode" aria-hidden="true"></i> Scan QR Code
				</button> */}
                <button  onClick={this.handleShow} className="qrscn-reader-btn btn btn-primary submit-btn button-info-grid">
								Decoded QR Code: {this.props.result}
							</button>

				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Patient Sign Up Form</Modal.Title>
					</Modal.Header>
					<Modal.Body id="requisition-btn">
                        <SignUp />
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						{/* <Button variant="primary" onClick={this.handleOrderEditChanges}>
							Save Changes
						</Button> */}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ViewPatientSignUp;
