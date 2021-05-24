import React, { Component } from "react";
import FileBrowse from "./fileBrowse";
import { Form, Col, Button } from "react-bootstrap";
import { serviceConstants } from "../../../../services/common/constants";

class PatientPhotoUploadInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      this.props.values.driverLicFileName !== "" &&
      (this.props.values.insuranceProv1 === "Self/Pay" ||
        (this.props.values.insuranceBackPageFileName !== "" &&
          this.props.values.insuranceFrontPageFileName !== ""))
    ) {
      document.getElementById("btnSubmit").disabled = true;
      this.props.handleSubmit();
    }
  };

  render() {
    const { values } = this.props;

    const url1 = `${serviceConstants.HOST_NAME}/files/patient/images/${values.driverLicFileName}`;
    const url2 = `${serviceConstants.HOST_NAME}/files/patient/images/${values.insuranceFrontPageFileName}`;
    const url3 = `${serviceConstants.HOST_NAME}/files/patient/images/${values.insuranceBackPageFileName}`;
    //console.log(url1);

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
                        {/* {values.driverLicFile.length > 0 ? (
                          <a href={this.state.driverLicFile} target="_blank">
                            {values.driverLicFileName}</a>
                        ) : ""
                        } */}

                        {values.patientId &&
                        values.driverLicFileName &&
                        values.driverLicFileName.length > 0 ? (
                          <a
                            className="upload-image-href pull-right"
                            href={url1}
                            target="_blank"
                          >
                            <i class="fa fa-eye" aria-hidden="true"></i> View
                            File
                          </a>
                        ) : null}

                        <FileBrowse
                          driverLicFile={values.driverLicFile}
                          handleFileChange={this.props.handleReadFile(
                            "driverLicFile"
                          )}
                        />
                        {values.driverLicFileName === "" ? (
                          <Form.Label
                            className="inline-errormsg"
                            style={{ width: "100%" }}
                          >
                            <i
                              class="fa fa-exclamation-circle"
                              aria-hidden="true"
                            >
                              Upload Drivers License
                            </i>
                          </Form.Label>
                        ) : null}
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
                            {values.patientId &&
                            values.insuranceFrontPageFileName &&
                            values.insuranceFrontPageFileName.length > 0 ? (
                              <a
                                className="upload-image-href pull-right"
                                href={url2}
                                target="_blank"
                              >
                                <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                View File
                              </a>
                            ) : null}
                            <FileBrowse
                              insuranceFrontPageFile={
                                values.insuranceFrontPageFile
                              }
                              handleFileChange={this.props.handleReadFile(
                                "insuranceFrontPageFile"
                              )}
                            />
                            {values.insuranceFrontPageFile === "" ? (
                              <Form.Label
                                className="inline-errormsg"
                                style={{ width: "100%" }}
                              >
                                <i
                                  class="fa fa-exclamation-circle"
                                  aria-hidden="true"
                                >
                                  Upload Insurance Front Page
                                </i>
                              </Form.Label>
                            ) : null}
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
                            {values.patientId &&
                            values.insuranceBackPageFileName &&
                            values.insuranceBackPageFileName.length > 0 ? (
                              <a
                                className="upload-image-href pull-right"
                                href={url3}
                                target="_blank"
                              >
                                <i class="fa fa-eye" aria-hidden="true"></i>{" "}
                                View File
                              </a>
                            ) : null}
                            <FileBrowse
                              insuranceBackPageFile={
                                values.insuranceBackPageFile
                              }
                              handleFileChange={this.props.handleReadFile(
                                "insuranceBackPageFile"
                              )}
                            />
                            {values.insuranceBackPageFile === "" ? (
                              <Form.Label
                                className="inline-errormsg"
                                style={{ width: "100%" }}
                              >
                                <i
                                  class="fa fa-exclamation-circle"
                                  aria-hidden="true"
                                >
                                  Upload Insurance Back Page
                                </i>
                              </Form.Label>
                            ) : null}
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
                            onClick={this.continue}
                            id="btnSubmit"
                          >
                            Submit
                          </Button>
                        </div>

                        {/* <div>
													{this.props.values.showMessage && (
														<p className="submit-success-msg">
															{this.props.values.message}
														</p>
													)}
												</div> */}
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
