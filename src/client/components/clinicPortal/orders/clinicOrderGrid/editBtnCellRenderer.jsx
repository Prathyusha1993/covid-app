import React, { Component } from "react";
import { Modal, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  saveOrderEditData,
  updateResultPDF,
  fetchOrderFaxData
} from "../../../../services/clinicPortalServices/orderEditService";
import moment from "moment";
import { testTypes, results } from "../../../../services/common/optionsData";

export default class EditBtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    let orderDetails = props && props.data ? props.data : '';
    this.state = {
      show: false,
      orderId: orderDetails.orderId,
      gender: orderDetails.gender ? orderDetails.gender : "",
      dob: orderDetails.dob ? orderDetails.dob : "",
      mrn: orderDetails.mrn ? orderDetails.mrn : "",
      provider: orderDetails && orderDetails.provider ? orderDetails.provider : "",
      facilitySource: orderDetails.facilitySource
        ? orderDetails.facilitySource
        : "",
      receivedDate:
      orderDetails && orderDetails.receivedDate ? orderDetails.receivedDate : "",
      description:
      orderDetails && orderDetails.description ? orderDetails.description : "",
      testType: orderDetails && orderDetails.testType ? orderDetails.testType : "",
      sample: orderDetails && orderDetails.sample ? orderDetails.sample : "",
      result: orderDetails && orderDetails.result ? orderDetails.result : "",
      collectedDate:
      orderDetails && orderDetails.collectedDate ? orderDetails.collectedDate : "",

      requisition:
      orderDetails && orderDetails.requisition ? orderDetails.requisition : "",
      code: orderDetails && orderDetails.code ? orderDetails.code : "",
      codeType: orderDetails && orderDetails.codeType ? orderDetails.codeType : "",
      patientName:
      orderDetails && orderDetails.patientName ? orderDetails.patientName : "",
      email: orderDetails && orderDetails.email ? orderDetails.email : "",
      mobile: orderDetails && orderDetails.mobile ? orderDetails.mobile : "",
      pdfPath: orderDetails && orderDetails.pdfPath ? orderDetails.pdfPath : "",
      released: orderDetails && orderDetails.released ? orderDetails.released : "",
      releasedBy:
      orderDetails && orderDetails.releasedBy ? orderDetails.releasedBy : "",
      refreshGrid: orderDetails.refreshGrid,
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    const intialState = {
      orderId: this.props.data.orderId,
      gender: this.props.data.gender ? this.props.data.gender : "",
      dob: this.props.data.dob ? this.props.data.dob : "",
      mrn: this.props.data.mrn ? this.props.data.mrn : "",
      provider:
        this.props.data && this.props.data.provider
          ? this.props.data.provider
          : "",
      facilitySource: this.props.data.facilitySource
        ? this.props.data.facilitySource
        : "",
      receivedDate:
        this.props.data && this.props.data.receivedDate
          ? this.props.data.receivedDate
          : "",
      description:
        this.props.data && this.props.data.description
          ? this.props.data.description
          : "",
      testType:
        this.props.data && this.props.data.testType
          ? this.props.data.testType
          : "",
      sample:
        this.props.data && this.props.data.sample ? this.props.data.sample : "",
      result:
        this.props.data && this.props.data.result ? this.props.data.result : "",
      collectedDate:
        this.props.data && this.props.data.collectedDate
          ? this.props.data.collectedDate
          : "",

      requisition:
        this.props.data && this.props.data.requisition
          ? this.props.data.requisition
          : "",
      code: this.props.data && this.props.data.code ? this.props.data.code : "",
      codeType:
        this.props.data && this.props.data.codeType
          ? this.props.data.codeType
          : "",
      patientName:
        this.props.data && this.props.data.patientName
          ? this.props.data.patientName
          : "",
      email:
        this.props.data && this.props.data.email ? this.props.data.email : "",
      mobile:
        this.props.data && this.props.data.mobile ? this.props.data.mobile : "",
      pdfPath:
        this.props.data && this.props.data.pdfPath
          ? this.props.data.pdfPath
          : "",
      released:
        this.props.data && this.props.data.released
          ? this.props.data.released
          : "",
      releasedBy:
        this.props.data && this.props.data.releasedBy
          ? this.props.data.releasedBy
          : "",
    };
    this.setState({ show: false, ...intialState });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOrderEditChanges = () => {
    const editParams = {
      description: this.state.description,
      testType: this.state.testType,
      sample: this.state.sample,
      result: this.state.result,
      collectedDate: this.state.collectedDate
        ? moment(this.state.collectedDate, "MM/DD/YYYY hh:mm A").format(
            "YYYYMMDDHHmmss"
          )
        : "",
      provider: this.state.provider,
      receivedDate: this.state.receivedDate
        ? moment(this.state.receivedDate, "MM/DD/YYYY hh:mm A").format(
            "YYYYMMDDHHmmss"
          )
        : "",
      requisition: this.state.requisition,
      patientName: this.state.patientName,
      orderId: this.state.orderId,
      email: this.state.email,
      mobile: this.state.mobile,
      facilitySource: this.state.facilitySource,
      mrn: this.state.mrn,
      dob: this.state.dob,
      pdfPath: this.state.pdfPath,
      released: this.state.released,
      releasedBy: this.state.releasedBy,
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

  handleFax = () => {
    fetchOrderFaxData(this.state.orderId)
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        console.log(err);
        alert("Error. Unable to send the fax.");
      });
  };

  renderTooltipEdit = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Order
    </Tooltip>
  );

  renderTooltipFax = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Fax Order
    </Tooltip>
  );

  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          delay={{ show: 100, hide: 400 }}
          overlay={this.renderTooltipEdit}
        >
          <button onClick={this.handleShow} className="edit-order-btn">
            <i class="fas fa-pen"></i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 100, hide: 400 }}
          overlay={this.renderTooltipFax}
        >
          <button className="fax-button" onClick={this.handleFax}>
            <i class="fa fa-fax" aria-hidden="true"></i>
          </button>
        </OverlayTrigger>

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
            <form>
              <div className="row form-row">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input
                      type="text"
                      disabled
                      className="form-control order-edit-formstyle"
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
                      type="text"
                      disabled
                      className="form-control order-edit-formstyle"
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
                      type="text"
                      disabled
                      className="form-control order-edit-formstyle"
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
                      type="text"
                      disabled
                      className="form-control order-edit-formstyle"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Physician</label>
                    <input
                      type="text"
                      className="form-control order-edit-formstyle"
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
                      type="text"
                      className="form-control order-edit-formstyle"
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
                      className="form-control order-edit-formstyle"
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
                      className="form-control select order-edit-formstyle"
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
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Requisition</label>
                    <input
                      type="text"
                      className="form-control order-edit-formstyle"
                      name="requisition"
                      value={this.state.requisition}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Sample</label>
                    <input
                      type="text"
                      className="form-control order-edit-formstyle"
                      name="sample"
                      value={this.state.sample}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Collected Date</label>
                    <input
                      type="text"
                      className="form-control order-edit-formstyle"
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
                      type="text"
                      className="form-control order-edit-formstyle"
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
                      className="form-control select order-edit-formstyle"
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
                      type="text"
                      className="form-control order-edit-formstyle"
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
