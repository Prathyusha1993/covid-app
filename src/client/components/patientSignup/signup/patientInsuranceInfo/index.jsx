import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { insuranceProvider } from "../selectOptionsData";
import { relation } from "../selectOptionsData";

class PatientInsuranceInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false,
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
		const { values } = this.props;
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
												<Form.Group as={Col} md="6" controlId="formGridEmail">
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
																<option value={item.value}>{item.value}</option>
															);
														})}
													</Form.Control>
												</Form.Group>
											</Form.Row>
											{values.insuranceProv1 === "Self/Pay" ? null : (
												<div>
													<Form.Row style={{ paddingBottom: "15px" }}>
														<Form.Group
															as={Col}
															md="6"
															controlId="formGridEmail"
														>
															<Form.Label className="signup-label-font">
																Insurance Provider (If Other)
															</Form.Label>

															<Form.Control
																required
																type="text"
																value={values.insuranceProv2}
																onChange={this.props.handleChange(
																	"insuranceProv2"
																)}
															></Form.Control>
														</Form.Group>
													</Form.Row>

													<Form.Row style={{ paddingBottom: "15px" }}>
														<Form.Group
															as={Col}
															md="6"
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
															></Form.Control>
														</Form.Group>
													</Form.Row>

													<Form.Row style={{ paddingBottom: "15px" }}>
														<Form.Group
															as={Col}
															md="6"
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
															></Form.Control>
														</Form.Group>
													</Form.Row>

													<Form.Row style={{ paddingBottom: "15px" }}>
														<Form.Group
															as={Col}
															md="6"
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
																		<option value={item.value}>
																			{item.value}
																		</option>
																	);
																})}
															</Form.Control>
															<Form.Control.Feedback
																type="invalid"
																className="inline-errormsg"
															>
																<i
																	class="fa fa-exclamation-circle"
																	aria-hidden="true"
																>
																	This field is required.
																</i>
															</Form.Control.Feedback>
														</Form.Group>
													</Form.Row>

													<Form.Row style={{ paddingBottom: "15px" }}>
														<Form.Group
															as={Col}
															md="6"
															controlId="formGridEmail"
														>
															<Form.Label className="signup-label-font">
																What is the Name of The Insurance Holder?
															</Form.Label>

															<Form.Control
																required
																type="text"
																value={values.insuranceFirstName}
																onChange={this.props.handleChange(
																	"insuranceFirstName"
																)}
															></Form.Control>
															<Form.Label className="home-page-label">
																First Name
															</Form.Label>
														</Form.Group>
														<Form.Group
															as={Col}
															md="6"
															controlId="formGridEmail"
														>
															<Form.Label className="signup-label-font"></Form.Label>

															<Form.Control
																style={{ marginTop: "8px" }}
																required
																type="text"
																value={values.insuranceLastName}
																onChange={this.props.handleChange(
																	"insuranceLastName"
																)}
															></Form.Control>
															<Form.Label className="home-page-label">
																Last Name
															</Form.Label>
														</Form.Group>
													</Form.Row>

													<Form.Row
														className="form-bottom-border"
														style={{ paddingBottom: "15px" }}
													>
														<Form.Group
															as={Col}
															md="6"
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
															></Form.Control>
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
