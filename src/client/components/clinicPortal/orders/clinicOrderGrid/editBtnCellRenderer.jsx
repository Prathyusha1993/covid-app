import React, { Component } from "react";
import { Modal, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  saveOrderEditData,
  updateResultPDF,
  fetchOrderFaxData,
  getOrderDataById
} from "../../../../services/clinicPortalServices/orderEditService";
import moment from "moment";
import { testTypes, results } from "../../../../services/common/optionsData";
import { handleError } from "../../../../services/common/errorHandler";

export default class EditBtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      orderId: props.data._id,
      gender: "",
      dob: "",
      mrn: "",
      provider: "",
      facilitySource: "",
      receivedDate: "",
      description: "",
      testType: "",
      sample: "",
      result: "",
      collectedDate: "",
      requisition:"",
      code: "",
      codeType: "",
      patientName:"",
      email: "",
      mobile: "",
      pdfPath: "",
      released: "",
      releasedBy:"",
    };
  }

  componentDidMount() {
    if (this.state.orderId !== "") {
        this.loadOrderDetails();
    }
  }

  loadOrderDetails = () => {
    getOrderDataById(this.state.orderId)
    .then((response) => {
        let orderDetails = response.data;
        this.setState({
            patientName: orderDetails && orderDetails.patient_id ? 
             orderDetails.patient_id.first_name + " " + orderDetails.patient_id.last_name : '',
            mrn: orderDetails && orderDetails.patient_id ? 
                orderDetails.patient_id.mrn : '',
            dob: orderDetails && orderDetails.patient_id ? 
                orderDetails.patient_id.date_of_birth : '',
            gender: orderDetails && orderDetails.patient_id ? 
                orderDetails.patient_id.gender : '',
            provider: orderDetails && orderDetails.provider ? 
             orderDetails.provider.first_name + ' ' + orderDetails.provider.last_name : '',
            facilitySource:  orderDetails ?  orderDetails.facility_source : '',
            description: orderDetails && orderDetails.test_info ? orderDetails.test_info.description : '',
            testType: orderDetails && orderDetails.test_info ? orderDetails.test_info.test_type : '',
            requisition: orderDetails && orderDetails.test_info ? orderDetails.test_info.requisition : '',
            sample: orderDetails && orderDetails.test_info ? orderDetails.test_info.sample : '',
            collectedDate: orderDetails && orderDetails.test_info ? 
                moment(orderDetails.test_info.collected, "YYYYMMDDHHmmss").format(
                "MM/DD/YYYY hh:mm A"
          ) : '',
          receivedDate: orderDetails && orderDetails.test_info ? 
          moment(orderDetails.test_info.collected, "YYYYMMDDHHmmss").format(
          "MM/DD/YYYY hh:mm A"
    ) : '',
    result:  orderDetails && orderDetails.test_info ? orderDetails.test_info.covid_detected : '',
    released: orderDetails && orderDetails.results ? 
       moment(orderDetails.results.released, "YYYYMMDDHHmmss").format(
        "MM/DD/YYYY hh:mm A"
  ): '',
    releasedBy: orderDetails && orderDetails.results ? orderDetails.results.releasedBy : '',
    pdfPath: orderDetails && orderDetails.results ? orderDetails.results.pdf_path : '',

        });
    }).catch((error) => {
        handleError(error);
    });
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
      updateResultPDF(editParams).then((data) => {})
      .catch((error) => {
        handleError(error);
      });
    }).catch((error) => {
      handleError(error);
    })
  };

  handleFax = () => {
    fetchOrderFaxData(this.state.orderId)
      .then((response) => {
        alert(response.message);
      })
      .catch((error) => {
        handleError(error);
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

