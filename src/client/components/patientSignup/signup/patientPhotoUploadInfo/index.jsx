import React, { Component } from "react";
import DriverLicenseBrowse from "./driverLicenseBrowse";
import { Form, Col, Button } from "react-bootstrap";

class PatientPhotoUploadInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

    // handleChange = (e) => {
    // 	var key = e.target.name;
    // 	var value = e.target.value;
    // 	var obj = {};
    // 	obj[key] = value;
    // 	this.setState(obj);
    // };

    // hasError = (key) => {
    // 	return this.state.errors.indexOf(key) !== -1;
    // };


    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        return (
            <div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row" style={{ justifyContent: "center" }}>
                            {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<DoctorSidebar />
							</div> */}
                            <div className="col-md-6 col-lg-7 col-xl-7">
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
                                                    as={Col} md="12"
                                                    controlId="exampleForm.SelectCustom"
                                                >
                                                    <Form.Label className="signup-label-font">
                                                        Upload a photo of your driver's license{" "}
                                                        <span className="text-danger"> *</span>
                                                    </Form.Label>
                                                    <DriverLicenseBrowse />
                                                </Form.Group>
                                            </Form.Row>
                                            {
                                                this.props.values.insuranceProv1 === 'Self/Pay'
                                                    ? null
                                                    : <div>
                                                        <Form.Row style={{ paddingBottom: "15px" }}>
                                                            <Form.Group
                                                                as={Col} md="12"
                                                                controlId="exampleForm.SelectCustom"
                                                            >
                                                                <Form.Label className="signup-label-font">
                                                                    Upload a photo of the front of your health insurance
														<span className="text-danger"> *</span>
                                                                </Form.Label>
                                                                <DriverLicenseBrowse />
                                                            </Form.Group>
                                                        </Form.Row>

                                                        <Form.Row className="form-bottom-border" style={{ paddingBottom: "15px" }}>
                                                            <Form.Group
                                                                as={Col} md="12"
                                                                controlId="exampleForm.SelectCustom"
                                                            >
                                                                <Form.Label className="signup-label-font">
                                                                    Upload a photo of the back of your health insurance
														<span className="text-danger"> *</span>
                                                                </Form.Label>
                                                                <DriverLicenseBrowse />
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </div>
                                            }

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
                                                    <Button
                                                        className="btn-pagebreak-next"
                                                        type="submit"
                                                        onClick={this.props.handleSubmit}
                                                    >
                                                        Submit
													</Button>
                                                </div>
                                            </div>
                                        </Form>


                                        {/* <form>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-12">
													<label className="signup-label-font">
														How would you like to submit your photos?
													</label>
													<div class="form-check">
														<input
															class="form-check-input"
															type="radio"
															name="uploadFile"
															value={this.state.uploadFile}
														/>
														<label class="form-check-label">
															Upload file from computer
														</label>
													</div>
												</div>
											</div>

											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-12">
													<label className="signup-label-font">
														Upload a photo of your driver's license{" "}
														<span className="text-danger"> *</span>
													</label>
													<DriverLicenseBrowse />
												</div>
											</div>

											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-12">
													<label className="signup-label-font">
														Upload a photo of the front of your health insurance
														card <span className="text-danger"> *</span>
													</label>
													<DriverLicenseBrowse />
												</div>
											</div>

											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-12">
													<label className="signup-label-font">
														Upload a photo of the back of your health insurance
														card <span className="text-danger"> *</span>
													</label>
													<DriverLicenseBrowse />
												</div>
											</div>

											<div className="row next-button">
												<div>
													<button
														className="btn-pagebreak-previous"
														onClick={this.back}
													>
														Back
													</button>
												</div>
												<div>
													<button
														className="btn-pagebreak-submit"
														onClick={this.handleSubmit}
													>
														Submit
													</button>
												</div>
											</div>
										</form> */}
                                    </div>
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
