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

export default class ViewRequisitionFormpage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      show: false,
      patientName:"",
      mrn:"",
      dob:"",
      gender:"",
      provider:"",
      facilitySource:'',
      description:'',
      testType:'',
      requisition:'',
      sample:'',
      collectedDate:'',
      receivedDate:'',
      result:'',
      released:""
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false});
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
                    <label>Received Date</label>
                    <input
                      style={formStyle}
                      type="text"
                      className="form-control"
                      name="receivedDate"
                      value={this.state.receivedDate}
                      onChange={this.handleChange}
                    />
                    <label style={{ fontSize: "13px" }}>
                      Date format - MM/DD/YYYY hh:mi AM/PM
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Result</label>
                    <select
                      style={formStyle}
                      className="form-control select"
                      name="result"
                      value={this.state.result}
                      onChange={this.handleChange}
                    >
                      {results.map((res) => {
                        return <option>{res.result}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Released Date</label>
                    <input
                      style={formStyle}
                      type="text"
                      className="form-control"
                      name="released"
                      value={this.state.released}
                      onChange={this.handleChange}
                    />
                    <label style={{ fontSize: "13px" }}>
                      Date format - MM/DD/YYYY hh:mi AM/PM
                    </label>
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
