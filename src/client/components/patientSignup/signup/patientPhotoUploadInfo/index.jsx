import React, { Component } from "react";
import FileBrowse from "./fileBrowse";
import { Form, Col, Button } from "react-bootstrap";

class PatientPhotoUploadInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    
    return (
      <div>
        <div className="content">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className={values.classStyle}>
              <div className="card row-bg-color">
                <div className="card-body">
                  <div className="card-name">
                    <h2 className="card-title">Photo Uploads</h2>
                    <p className="card-info">
                      Driver's License, Insurance card
                    </p>
                  </div>
                  <Form
                    id="patientBirthForm"
                    noValidate
                    validated={this.state.validated}
                  >
                    <Form.Row style={{ paddingBottom: "15px" }}>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="exampleForm.SelectCustom"
                      >
                        <Form.Label className="signup-label-font">
                          Upload a photo of your driver's license{" "}
                          <span className="text-danger"> *</span>
                        </Form.Label>
                        <FileBrowse 
                          driverLicFile = {this.props.values.driverLicFile && this.props.values.driverLicFile}
                          insuranceFrontPageFile = {this.props.values.insuranceFrontPageFile && this.props.values.insuranceFrontPageFile}
                          insuranceBackPageFile = {this.props.values.insuranceBackPageFile && this.props.values.insuranceBackPageFile}
                        />
                      </Form.Group>
                    </Form.Row>
                    {this.props.values.insuranceProv1 === "Self/Pay" ? null : (
                      <div>
                        <Form.Row style={{ paddingBottom: "15px" }}>
                          <Form.Group
                            as={Col}
                            md="12"
                            controlId="exampleForm.SelectCustom"
                          >
                            <Form.Label className="signup-label-font">
                              Upload a photo of the front of your health
                              insurance
                              <span className="text-danger"> *</span>
                            </Form.Label>
                            <FileBrowse />
                          </Form.Group>
                        </Form.Row>

                        <Form.Row
                          className="form-bottom-border"
                          style={{ paddingBottom: "15px" }}
                        >
                          <Form.Group
                            as={Col}
                            md="12"
                            controlId="exampleForm.SelectCustom"
                          >
                            <Form.Label className="signup-label-font">
                              Upload a photo of the back of your health
                              insurance
                              <span className="text-danger"> *</span>
                            </Form.Label>
                            <FileBrowse />
                          </Form.Group>
                        </Form.Row>
                      </div>
                    )}

                    <div className=" row next-button ">
                      <div>
                        <Button
                          className="btn-pagebreak-previous"
                          onClick={this.back}
                        >
                          Back
                        </Button>
                      </div>
                      <div>
                        <div>
                          <Button
                            className="btn-pagebreak-submit"
                            type="button"
                            onClick={this.props.handleSubmit}
                          >
                            Submit
                          </Button>
                        </div>

                        <div>
                          {this.props.values.showMessage && (
                            <p className="submit-success-msg">
                              {this.props.values.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientPhotoUploadInfo;
