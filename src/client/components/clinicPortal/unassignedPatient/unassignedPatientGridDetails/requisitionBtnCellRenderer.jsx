import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  saveOrderEditData,
  updateResultPDF,
} from "../../../../clinicPortalServices/orderEditService";
import moment from "moment";
import { results } from "../../patientSearch/clinicPatientGrid/optionsData";
import { testTypes } from "../../patientSearch/clinicPatientGrid/optionsData";
import SignUp from "../../../patientSignup/signup";
import ViewRequisitionFormpage from "./viewRequisitionFormPage";

export default class RequisitionBtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      show: false,
      
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    const intialState = {
      
    };
    this.setState({ show: false, ...intialState });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOrderEditChanges = () => {
    const editParams = {
      
    };
    saveOrderEditData(editParams).then((userDetails) => {
      this.setState({
        editParams: userDetails,
        show: false,
      });

      // call refresh grid function
      //this.props.data.refreshGrid();
      this.state.refreshGrid();

      editParams.collectedDate = editParams.collectedDate
        ? moment(editParams.collectedDate, "YYYYMMDDHHmmss").format(
            "MM/DD/YYYY hh:mm A"
          )
        : "";
      editParams.receivedDate = editParams.receivedDate
        ? moment(editParams.receivedDate, "YYYYMMDDHHmmss").format(
            "MM/DD/YYYY hh:mm A"
          )
        : "";
      //call this method to generate/update the result letter pdf
      updateResultPDF(editParams).then((data) => {});
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
        <button
          onClick={this.handleShow}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <i class="fas fa-notes-medical"></i>
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
