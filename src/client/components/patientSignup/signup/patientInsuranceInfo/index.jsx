import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { insuranceProvider } from "../selectOptionsData";
import { relation } from "../selectOptionsData";

class PatientInsuranceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false
        };
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    continue = (e) => {
        const form = document.getElementById("patientInsuranceForm");
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
			this.setState({
				validated: true,
			});
		} else {
			this.props.nextStep();
		}
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values} = this.props;
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
                                            <h2 className="card-title">Insurance Information</h2>
                                            <p className="card-info">
                                                If you are not self paying, please provide information
											</p>
                                        </div>
                                        <Form
											id="patientInsuranceForm"
											noValidate
											validated={this.state.validated}
										>
											<Form.Row style={{ paddingBottom: "15px" }}>
												<Form.Group
													as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    Choose your Insurance Provider
													</Form.Label>

													<Form.Control
														as="select"
														required
														type="text"
														value={values.insuranceProv1}
														onChange={this.props.handleChange("insuranceProv1")}
													>
														{insuranceProvider.map((item) => {
                                                            return (
                                                                <option value={item.id}>{item.value}</option>
                                                            );
                                                        })}
													</Form.Control>
												</Form.Group>
											</Form.Row>
                                            {
                                                values.insuranceProv1 === '2'
                                                ? null
                                                : 
                                                <div>
                                                <Form.Row style={{ paddingBottom: "15px" }}>
												<Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    Insurance Provider (If Other)
													</Form.Label>

													<Form.Control
														required
														type="text"
														value={values.insuranceProv2}
														onChange={this.props.handleChange("insuranceProv2")}
													>
													</Form.Control>
												</Form.Group>
											</Form.Row>

                                            <Form.Row  style={{ paddingBottom: "15px" }}>
												<Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    Insurance Member ID
													</Form.Label>

													<Form.Control
														required
														type="text"
														value={values.memberId}
														onChange={this.props.handleChange("memberId")}
													>
													</Form.Control>
												</Form.Group>
											</Form.Row>

                                            <Form.Row style={{ paddingBottom: "15px" }}>
												<Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    Insurance Group Number
													</Form.Label>

													<Form.Control
														required
														type="text"
														value={values.groupNum}
														onChange={this.props.handleChange("groupNum")}
													>
													</Form.Control>
												</Form.Group>
											</Form.Row>

                                            <Form.Row style={{ paddingBottom: "15px" }}>
												<Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    Relation to Insured
													</Form.Label>

													<Form.Control
														as="select"
														required
														type="text"
														value={values.relation}
														onChange={this.props.handleChange("relation")}
													>
                                                        {relation.map((item) => {
                                                                    return (
                                                                        <option value={item.id}>{item.value}</option>
                                                                    );
                                                                })}
													</Form.Control>
												</Form.Group>
											</Form.Row>

                                            <Form.Row style={{ paddingBottom: "15px" }}>
												<Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    What is the Name of The Insurance Holder?
													</Form.Label>

													<Form.Control
														required
														type="text"
														value={values.insuranceFirstName}
														onChange={this.props.handleChange("insuranceFirstName")}
													>
													</Form.Control>
                                                    <Form.Label className="home-page-label">First Name</Form.Label>
												</Form.Group>
                                                <Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                   
													</Form.Label>

													<Form.Control
                                                    style={{ marginTop: "8px" }}
														required
														type="text"
														value={values.insuranceLastName}
														onChange={this.props.handleChange("insuranceLastName")}
													>
													</Form.Control>
                                                    <Form.Label className="home-page-label">Last Name</Form.Label>
												</Form.Group>
											</Form.Row>

                                            <Form.Row className="form-bottom-border" style={{ paddingBottom: "15px" }}>
												<Form.Group
													 as={Col} md="6"
													controlId="formGridEmail"
												>
													<Form.Label className="signup-label-font">
                                                    Driver's License # (required for filling an
                                                                insurance claim)
													</Form.Label>

													<Form.Control
														required
														type="text"
														value={values.driverLic}
														onChange={this.props.handleChange("driverLic")}
													>
                                                        
													</Form.Control>
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
														onClick={this.continue}
													>
														Next
													</Button>
												</div>
											</div>
										</Form>



                                        {/* <form>
                                            <div className="row" style={{ paddingBottom: "25px" }}>
                                                <div className="col-md-6">
                                                    <label className="signup-label-font">
                                                        Choose your Insurance Provider
													</label>
                                                    <select
                                                        name="insuranceProv1"
                                                        value={this.state.insuranceProv1}
                                                        onChange={this.handleChange}
                                                        className="form-control select"
                                                        placeholder="Please Select"
                                                        required
                                                    >
                                                        {insuranceProvider.map((item) => {
                                                            return (
                                                                <option value={item.id}>{item.value}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            {
                                                this.state.insuranceProv1 === '2'
                                                ? null
                                                : 
                                                <div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Insurance Provider (If other)
													</label>
                                                            <input
                                                                type="text"
                                                                name="insuranceProv2"
                                                                value={this.state.insuranceProv2}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Insurance Member ID
													</label>
                                                            <input
                                                                type="text"
                                                                name="memberId"
                                                                value={this.state.memberId}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Insurance Group Number
													</label>
                                                            <input
                                                                type="text"
                                                                name="groupNum"
                                                                value={this.state.groupNum}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Relation to Insured
													</label>
                                                            <select
                                                                name="relation"
                                                                value={this.state.relation}
                                                                onChange={this.handleChange}
                                                                className="form-control select"
                                                                placeholder="Please Select"
                                                                required
                                                            >
                                                                {relation.map((item) => {
                                                                    return (
                                                                        <option value={item.id}>{item.value}</option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                What is the Name of The Insurance Holder?
													</label>
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                value={this.state.firstName}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                            <label className="home-page-label">First Name</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label> </label>
                                                            <input
                                                                style={{ marginTop: "8px" }}
                                                                type="text"
                                                                name="lastName"
                                                                value={this.state.lastName}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                            <label className="home-page-label">last Name</label>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="row form-bottom-border"
                                                        style={{ paddingBottom: "25px" }}
                                                    >
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Driver's License # (required for filling an
                                                                insurance claim)
													</label>
                                                            <input
                                                                type="text"
                                                                name="driverLic"
                                                                value={this.state.driverLic}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
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
                                                        className="btn-pagebreak-next"
                                                        onClick={this.continue}
                                                    >
                                                        Next
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

export default PatientInsuranceInfo;
