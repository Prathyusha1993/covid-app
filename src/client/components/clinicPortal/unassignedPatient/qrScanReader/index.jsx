import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Modal, Button } from "react-bootstrap";
import ViewPatientSignUp from "../unassignedPatientGridDetails/viewPatientSignUp";

class QrScanReader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientId: "60903a9f513609de503835c6", // "No result"
		};
	}

	handleError = (err) => {
		console.error(err);
	};

	render() {
		return (
			<div>
				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.props.show}
					onHide={this.props.hideQrScannerHandler}
					id="scanQRcodeModal"
				>
					<Modal.Header closeButton>
						<Modal.Title>Scan QR Code</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.show ? (
							<div>
								<QrReader
									delay={300}
									onError={this.handleError}
									onScan={this.props.onQrCodeScanHandler}
									className="qrscan-reader"
								/>
                {/* comment this decode qr code button once bar code works fine */}
								<button
									className="qrscn-reader-btn btn btn-primary submit-btn button-info-grid"
									onClick={this.props.showPatientSignupHandler}
								>
									Decoded QR Code: {this.props.scannedPatientId}
								</button>
							</div>
						) : null}
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={this.props.hideQrScannerHandler}
						>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default QrScanReader;
