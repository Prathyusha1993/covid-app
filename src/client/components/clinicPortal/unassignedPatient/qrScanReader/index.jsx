import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Modal, Button } from "react-bootstrap";

class QrScanReader extends Component {
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

	handleScan = (data) => {
		if (data) {
			this.setState({
				result: data,
			});
		}
	};
	handleError = (err) => {
		console.error(err);
	};
	render() {
		return (
			<div>
				<button
					onClick={this.handleShow}
					// style={{ border: "none", backgroundColor: "transparent" }}
          className="btn btn-primary submit-btn button-info-grid"
				>
          
          <i class="fa fa-qrcode" aria-hidden="true"></i> Scan QR Code
				</button>

				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
					<Modal.Header closeButton>
						<Modal.Title>Scan QR Code</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<QrReader
								delay={300}
								onError={this.handleError}
								onScan={this.handleScan}
								className="qrscan-reader"
							/>
							<button  className="qrscn-reader-btn btn btn-primary submit-btn button-info-grid">
								Decoded QR Code: {this.state.result}
							</button>
						</div>
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

export default QrScanReader;
