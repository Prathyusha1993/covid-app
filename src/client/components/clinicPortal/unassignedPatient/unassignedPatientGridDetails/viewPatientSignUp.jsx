import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SignUp from "../../../patientSignup/signup";
import ViewRequisitionFormpage from "./viewRequisitionFormPage";

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
        <div onClick={this.handleShow}>
          <button className="qrscn-reader-btn btn btn-primary submit-btn button-info-grid">
            Decoded QR Code: {this.props.result}
          </button>
        </div>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Patient Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="requisition-btn">
            {/* <button className="btn btn-primary submit-btn button-info-grid button-requisition">Create Requisition</button> */}
            <ViewRequisitionFormpage />
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
