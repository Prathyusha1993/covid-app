import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Modal, Button } from "react-bootstrap";

class QrScanReader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientId: ""
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
									delay={200}
									onError={this.handleError}
									onScan={this.props.onQrCodeScanHandler}
									className="qrscan-reader"
								/>
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
