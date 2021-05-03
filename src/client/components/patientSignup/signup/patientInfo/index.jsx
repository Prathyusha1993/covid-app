import React, { Component } from "react";
import { phoneNumberFormatter } from "../../../../utils/util";
import { Form, Button, Col } from "react-bootstrap";

class PatientInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: [],
			firstName: "",
			validated: false,
			viewModal: "",
		};
	}

	// handleChange = (e) => {
	// 	var key = e.target.name;
	// 	var value = e.target.value;
	// 	var obj = {};
	//     if(key === 'phone') {
	//         this.setState(prevState=> ({ phone: phoneNumberFormatter(value, prevState.phone) }));
	//     } else {
	//         obj[key] = value;
	//         this.setState(obj);
	//     }
	// };


	continue = (e) => {
		// const form = e.currentTarget;
		const form = document.getElementById("patientInfoForm");
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

	// requisitionBtn = (e) => {
	// 	this.setState({ viewModal: e.currentTarget.id})
	// }


	render() {
		const { values } = this.props;
		return (
			<div>
				<div className="content">
					<div className="container-fluid">
						<div className="row" style={{ justifyContent: "center" }}>
							<div className="col-md-6 col-lg-7 col-xl-7">
								<div className="card row-bg-color ">
									<div className="card-body">
										<div className="card-name">
											<h2 className="card-title">Your Information</h2>
											
											<p className="card-info">
												As the patient please enter your information
											</p>
											{/* {
												this.state.viewModal === "requisition-btn" 
												
											? <div id="requisition-btn" onClick={this.requisitionBtn} className="button-requisition">
											<button >Create Requisition</button>
										</div>
										: null
											} */}
										</div>
										<Form
											id="patientInfoForm"
											noValidate
											validated={this.state.validated}
										>
											<Form.Row style={{ paddingBottom: "25px" }}>
												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label className="signup-label-font">
														Full Name <span className="text-danger"> *</span>
													</Form.Label>

													<Form.Control
														required
														type="text"
														value={values.firstName}
														onChange={this.props.handleChange("firstName")}
													/>
													<Form.Label className="home-page-label">
														First Name
													</Form.Label>
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

												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label></Form.Label>
													<Form.Control
														required
														type="text"
														style={{ marginTop: "8px" }}
														value={values.lastName}
														onChange={this.props.handleChange("lastName")}
													/>
													<Form.Label className="home-page-label">
														Last Name
													</Form.Label>
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

											<Form.Row style={{ paddingBottom: "25px" }}>
												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label className="signup-label-font">
														E mail <span className="text-danger"> *</span>
													</Form.Label>
													<Form.Control
														required
														type="email"
														value={values.email}
														onChange={this.props.handleChange("email")}
													/>
													<Form.Label className="home-page-label">
														{" "}
														example@example.com{" "}
													</Form.Label>
													<Form.Control.Feedback
														type="invalid"
														className="inline-errormsg"
													>
														<i
															class="fa fa-exclamation-circle"
															aria-hidden="true"
														>
															Enter a valid email.
														</i>
													</Form.Control.Feedback>
												</Form.Group>

												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label className="signup-label-font">
														Phone <span className="text-danger"> *</span>{" "}
													</Form.Label>
													<Form.Control
														required
														type="tel"
														value={values.phone}
                                                        placeholder="(XXX) XXX-XXXX"
														onChange={this.props.handleChange("phone")}
													/>
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
											<div className="form-bottom-border">
												<Form.Group controlId="formGridEmail">
													<Form.Label className="signup-label-font">
														Address <span className="text-danger"> *</span>{" "}
													</Form.Label>
													<Form.Control
														required
														type="text"
														value={values.address}
														onChange={this.props.handleChange("address")}
													/>
													<Form.Label className="home-page-label">
														Street Address
													</Form.Label>
												</Form.Group>

												<Form.Row>
													<Form.Group as={Col} controlId="formGridEmail">
														<Form.Label></Form.Label>
														<Form.Control
															required
															type="text"
															value={values.city}
															onChange={this.props.handleChange("city")}
														/>
														<Form.Label className="home-page-label">
															{" "}
															City
														</Form.Label>
													</Form.Group>

													<Form.Group as={Col} controlId="formGridEmail">
														<Form.Label></Form.Label>
														<Form.Control
															required
															type="text"
															value={values.state}
															onChange={this.props.handleChange("state")}
														/>
														<Form.Label className="home-page-label">
															State
														</Form.Label>
													</Form.Group>
												</Form.Row>

												<Form.Group controlId="formGridEmail">
													<Form.Label></Form.Label>
													<Form.Control
														required
														type="number"
														value={values.zipCode}
														onChange={this.props.handleChange("zipCode")}
													/>
													<Form.Label className="home-page-label">
														Zip Code
													</Form.Label>
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
											</div>
											<div className=" row next-button btn-patientinfo-next">
												<Button
													className="btn-pagebreak-next"
													type="submit"
													onClick={this.continue}
												>
													Next
												</Button>
											</div>
										</Form>
										{/* <form
											noValidate
											validated={values.validated}>
											<div className="row " style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label
														className="signup-label-font"
													>
														Full Name <span className="text-danger"> *</span>
													</label>
													<input
														autoComplete="off"
														type="text"
														value={values.firstName}
														onChange={this.props.handleChange("firstName")}
														className={
															this.hasError("firstName")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<label className="home-page-label">First Name</label>
													<div
														className={
															this.hasError("firstName")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
												<div className="col-md-6">
													<label> </label>
													<input
														autoComplete="off"
														style={{ marginTop: "8px" }}
														type="text"
														value={values.lastName}
														onChange={this.props.handleChange("lastName")}
														className={
															this.hasError("lastName")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<label className="home-page-label">last Name</label>
												</div>
											</div>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														E-mail <span className="text-danger"> *</span>
													</label>
													<input
														autoComplete="off"
														type="text"
														name="email"
														value={values.email}
														onChange={this.props.handleChange("email")}
														className={
															this.hasError("email")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<label className="home-page-label">
														{" "}
														example@example.com{" "}
													</label>
													<div
														className={
															this.hasError("email")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required and enter valid email.</i>
													</div>
												</div>
												<div className="col-md-6">
													<label className="signup-label-font">
														Phone <span className="text-danger"> *</span>{" "}
													</label>
													<input
														autoComplete="off"
														type="tel"
														name="phone"
														value={values.phone}
														onChange={this.props.handleChange("phone")}
														className={
															this.hasError("phone")
																? "form-control is-invalid"
																: "form-control"
														}
														placeholder="(XXX) XXX-XXXX"
														required
													/>
													<div
														className={
															this.hasError("phone")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
											</div>
											<div className="form-bottom-border">
												<div class="form-group">
													<label className="signup-label-font">
														Address <span className="text-danger"> *</span>{" "}
													</label>
													<input
														autoComplete="off"
														type="text"
														className={
															this.hasError("address")
																? "form-control is-invalid"
																: "form-control"
														}
														name="address"
														value={values.address}
														onChange={this.props.handleChange("address")}
														required
													/>
													<label className="home-page-label">
														Street Address
													</label>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label> </label>
														<input
															autoComplete="off"
															type="text"
															name="city"
															value={values.city}
															onChange={this.props.handleChange("city")}
															className={
																this.hasError("city")
																	? "form-control is-invalid"
																	: "form-control"
															}
															required
														/>
														<label className="home-page-label"> City </label>
														
													</div>
													<div className="col-md-6">
														<label> </label>
														<input
															autoComplete="off"
															type="text"
															name="state"
															value={values.state}
															onChange={this.props.handleChange("state")}
															className={
																this.hasError("state")
																	? "form-control is-invalid"
																	: "form-control"
															}
															required
														/>
														<label className="home-page-label"> State </label>
														
													</div>
												</div>
												<div class="form-group">
													<label> </label>
													<input
														autoComplete="off"
														type="number"
														className={
															this.hasError("zipCode")
																? "form-control is-invalid"
																: "form-control"
														}
														name="zipCode"
														value={values.zipCode}
														onChange={this.props.handleChange("zipCode")}
														required
													/>
													<label className="home-page-label"> Zip Code </label>
													<div
														className={
															this.hasError("zipCode")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
											</div>
											<div className=" row next-button btn-patientinfo-next">
												<button
													className="btn-pagebreak-next"
													onClick={this.continue}
												>
													Next
												</button>
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

export default PatientInfo;
