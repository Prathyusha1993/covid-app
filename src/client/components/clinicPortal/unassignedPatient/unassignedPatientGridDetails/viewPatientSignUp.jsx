import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SignUp from "../../../patientSignup/signup";
import ViewRequisitionFormpage from "./viewRequisitionFormPage";
import { insuranceProvider } from "../../../patientSignup/signup/selectOptionsData";
import { fetchUnassignedPatientDetails } from "../../../../clinicPortalServices/unassignedPatientService";

class ViewPatientSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId:
        this.props && this.props.patientId ? this.props.patientId : "No result",
      show: false,
      patientDetails: {
        patientId: -1,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        sex: "",
        dob: "",
        ethnicity: "",
        race: "",
        symptoms: "",
        insuranceId: "",
        insuranceProv1: "",
        insuranceProv2: "",
        memberId: "",
        groupNum: "",
        relation: "",
        insuredFirstName: "",
        insuredLastName: "",
        driverLic: "",
        classStyle: "col-md-12 col-lg-7 col-xl-12",
      },
    };
  }

  handleShow = () => {
    this.getPatientDetails();
    //this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  getPatientDetails = () => {
    console.log(this.state.patientId);
    if (this.state.patientId.toLowerCase() != "no result") {
      fetchUnassignedPatientDetails(this.state.patientId).then((data) => {
        console.log(data.data[0]);

        if (data && data.data[0]) {
          var patientDetails = data.data[0];
          var insurance = patientDetails.insurance[0];
          if (insurance) {
            var index = insuranceProvider.findIndex(
              (i) =>
                i.value.toLowerCase() ===
                insurance.insurance_provider.toLowerCase()
            );
            console.log(index);
            if (index > -1) {
              insurance.insuranceProv1 = insurance.insurance_provider;
              insurance.insuranceProv2 = "";
            } else {
              insurance.insuranceProv1 = "Other";
              insurance.insuranceProv2 = insurance.insurance_provider;
            }
          }

          var patientInfo = {
            patientId: patientDetails._id,
            firstName: patientDetails.first_name,
            lastName: patientDetails.last_name,
            email: patientDetails.email,
            phone: patientDetails.mobile,
            address:
              patientDetails.address.address1 +
              " " +
              patientDetails.address.address2,
            city: patientDetails.address.city,
            state: patientDetails.address.state,
            zipCode: patientDetails.address.zip,
            sex: patientDetails.gender,
            dob: patientDetails.date_of_birth,
            ethnicity: patientDetails.ethnicity,
            race: patientDetails.race,
            symptoms:
              patientDetails.health_info &&
              patientDetails.health_info[0].symptoms,
            insuranceId: insurance ? insurance._id : "",
            insuranceProv1: insurance ? insurance.insuranceProv1 : "",
            insuranceProv2: insurance ? insurance.insuranceProv2 : "",
            memberId: insurance ? insurance.insured_member_id : "",
            groupNum: insurance ? insurance.insured_group_number : "",
            relation: insurance ? insurance.relation_to_insured : "",
            insuredFirstName: insurance ? insurance.insured_first_name : "",
            insuredLastName: insurance ? insurance.insured_last_name : "",
            driverLic: insurance ? insurance.insured_drivers_license : "",
            classStyle: "col-md-12 col-lg-7 col-xl-12",
          };
          this.setState({ patientDetails: patientInfo });
          this.setState({ show: true });
        }
      });
    }
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
            Decoded QR Code: {this.props.patientId}
          </button>
        </div>

        <Modal
          //onEnter={this.getPatientDetails}
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
            <ViewRequisitionFormpage
              patientDetails={this.state.patientDetails}
            />
            <SignUp patientDetails={this.state.patientDetails} />
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
