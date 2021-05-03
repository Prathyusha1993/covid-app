import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  saveOrderEditData,
  updateResultPDF,
} from "../../../../clinicPortalServices/orderEditService";
import moment from "moment";
import { results } from "../../patientSearch/clinicPatientGrid/optionsData";
import { testTypes } from "../../patientSearch/clinicPatientGrid/optionsData";
import Barcode from "../barcode";
import { fetchPhysicians } from "../../../../clinicPortalServices/physicianService";

export default class ViewRequisitionFormpage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    var patientDetails =
      this.props && this.props.patientDetails ? this.props.patientDetails : "";
    this.state = {
      show: false,
      patientName: patientDetails
        ? patientDetails.firstName + " " + patientDetails.lastName
        : "",
      mrn: patientDetails ? patientDetails.mrn : "",
      dob:
        patientDetails && patientDetails.dob
          ? moment(patientDetails.dob, "YYYY-MM-DD").format("MM/DD/YYYY")
          : "",
      gender: patientDetails ? patientDetails.sex : "",
      provider: "",
      facilitySource: "",
      description: "",
      testType: "",
      sample: "",
      collectedDate: "",
      collectorName: "",
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

  loadDataForModal = () => {
    console.log("loadDataForModal");
    this.getPhysicians();
  };

  getPhysicians = () => {
    var facilityId = "605d5a61177b981d99677ea3"; // window.localStorage.getItem("FACILITY_ID");

    fetchPhysicians(facilityId).then((data) => {
      console.log(data);
      this.setState({ physicians: data.data });
    });

    console.log(this.state);
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
          className="btn btn-primary submit-btn button-info-grid button-requisition"
          //   style={{ border: "none", backgroundColor: "transparent" }}
        >
          Create Requisition
        </button>

        <Modal
          onEnter={this.loadDataForModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Requisition Form</Modal.Title>
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
                    {/* physician should be dropdown and a endpoint api call */}
                    <input
                      style={formStyle}
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
                      disabled
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Test Type</label>
                    {/* <input
											style={formStyle}
											type="text"
											disabled
											className="form-control"
											name="testType"
											value={this.state.testType}
											onChange={this.handleChange}
										/> */}
                    <select
                      style={formStyle}
                      className="form-control select"
                      name="testType"
                      value={this.state.testType}
                      onChange={this.handleChange}
                    >
                      {/* <option>Select</option>
                      <option>Nasal Swab</option>
                      <option>Nasopharyngeal Swab</option> */}
                      {testTypes.map((test) => {
                        return <option>{test.testType}</option>;
                      })}
                    </select>
                  </div>
                </div>
                {/* <div className="col-12 col-md-6">
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
                </div> */}
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
                    {/* <label>Sample</label> */}
                    <Barcode />
                    <button className="btn btn-primary submit-btn button-info-grid">
                      Auto Generate
                    </button>
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
                    <label style={{ fontSize: "13px" }}>
                      Date format - MM/DD/YYYY hh:mi AM/PM
                    </label>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Collector Name</label>
                    <input
                      style={formStyle}
                      type="text"
                      className="form-control"
                      name="collectorName"
                      value={this.state.collectorName}
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
