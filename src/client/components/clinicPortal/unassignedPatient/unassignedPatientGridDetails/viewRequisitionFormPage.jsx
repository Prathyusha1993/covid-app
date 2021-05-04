import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import { results } from "../../patientSearch/clinicPatientGrid/optionsData";
import { testTypes } from "../../patientSearch/clinicPatientGrid/optionsData";
import Barcode from "../barcode";
import { fetchPhysicians, generateUniqueKey } from "../../../../clinicPortalServices/physicianService";
import { saveRequisitionChanges } from "../../../../clinicPortalServices/requisitionService";

export default class ViewRequisitionFormpage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    var patientDetails =
      this.props && this.props.patientDetails ? this.props.patientDetails : "";
    this.state = {
      showMessage: false,
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
      provider: [],
      facilitySource: "",
      description: "",
      testType: "",
      sample: "",
      collectedDate: "",
      collectorName: "",
      uniqueKey: "",
      receivedDate:"",
      requisition:"",
      covidDetected:"",
      testInfoCode:"",
      testInfoCodeType:"",
      testInfoDescription:"",
      value:"",
      comments:"",
      pdfPath:"",
      resultDate:"",
      released:"",
      releasedBy:"",
      patientId:"",
      facilityId:"",
      orderDate:"",
      facilityOrderId:"",
      labOrderId:"",
      labSource:"",
      providerFirstName:"",
      providerLastName:"",
      providerNPI:"",
      resultCode:"",
      resultCodeType:"",
      resultDesc:""
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
    this.autoGenerateKey();
  };

  getPhysicians = () => {
    var facilityId = "605d5a61177b981d99677ea3"; // window.localStorage.getItem("FACILITY_ID");

    fetchPhysicians(facilityId).then((response) => {
      console.log(response);
      // this.setState({ physicians: response.data });
      this.setState({ provider: response.data });
      console.log(this.state.provider);
    });
    // console.log(this.state);
  };

  autoGenerateKey = () => {
    generateUniqueKey().then((response) => {
      console.log(response);
      this.setState({uniqueKey: response.data});
    });
  };

  handleRequisitionChanges = () => {
    const reqInfo = {
      providerFirstName: this.state.providerFirstName,
      providerLastName: this.state.providerLastName,
      providerNPI: this.state.providerNPI,
      testInfoCode: this.state.code,
      testInfoCodeType:this.state.testInfoCodeType,
      testInfoDescription: this.state.testInfoDescription,
      testType: this.state.testType,
      sample: this.state.sample,
      collectedDate: this.state.collectedDate
      ? moment(this.state.collectedDate, "MM/DD/YYYY hh:mm A").format(
          "YYYYMMDDHHmmss"
        )
      : "",
      receivedDate: this.state.receivedDate
      ? moment(this.state.receivedDate, "MM/DD/YYYY hh:mm A").format(
          "YYYYMMDDHHmmss"
        )
      : "",
      requisition: this.state.requisition,
      covidDetected: this.state.covidDetected,
      resultCode: this.state.resultCode,
      resultCodeType: this.state.resultCodeType,
      resultDesc: this.state.resultDesc,
      value: this.state.value,
      comments: this.state.comments,
      pdfPath: this.state.pdfPath,
      resultDate: this.state.resultDate,
      released: this.state.released,
      releasedBy: this.state.releasedBy,
      patientId: this.state.patientId,
      facilityId: this.state.facilityId,
      orderDate: this.state.orderDate,
      facilityOrderId: this.state.facilityOrderId,
      facilitySource: this.state.facilitySource,
      labOrderId: this.state.labOrderId,
      labSource: this.state.labSource
    };
    saveRequisitionChanges(reqInfo). then((changedReqDetails) => {
      this.setState({
        reqInfo: changedReqDetails,
        show: false,
        showMessage: true
      });
    });
  };

  render() {
    const formStyle = {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderRadius: "0px",
    };
    // let options = this.state.provider.map((item) => {
    //   return item.first_name + " " + item.last_name;
    // });
    return (
      <div>
        <button
          onClick={this.handleShow}
          className="btn btn-primary submit-btn button-info-grid button-requisition"
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
                    <select
                      style={formStyle}
                      type="text"
                      className="form-control select"
                      name="provider"
                      value={this.state.provider}
                      onChange={this.handleChange}
                      // options={options}
                    >
                      {/* for dropdown api call goes here */}
                      {this.state.provider && this.state.provider.map((test) => {
                        return <option>{test.first_name + " " + test.last_name}</option>
                      })}
                      
                    </select>
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
                      //disabled
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
                    <select
                      style={formStyle}
                      className="form-control select"
                      name="testType"
                      value={this.state.testType}
                      onChange={this.handleChange}
                    >
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
                    <Barcode />
                    <button onclick={this.autoGenerateKey} className="btn btn-primary submit-btn button-info-grid">
                      Auto Generate
                    </button>
                    key: {this.state.uniqueKey && this.state.uniqueKey}
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
            <Button variant="primary" onClick={this.handleRequisitionChanges}>
              Save Changes
            </Button>
            {/* here pdfpath link should be updated */}
            {this.state.showMessage && (
              <p className="submit-success-msg">Your changes are succesfully saved!</p>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
