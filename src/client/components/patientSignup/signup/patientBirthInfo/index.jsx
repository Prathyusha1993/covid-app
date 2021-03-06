import React, { Component } from "react";
import { identity, symptoms, ethnicity, race } from "../../../../services/common/optionsData";
import { Form, Button, Col, FormCheck } from "react-bootstrap";

class PatientBirthInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false,
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	};

	continue = (e) => {
		const form = document.getElementById("patientBirthForm");
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
					<div className="row" style={{ justifyContent: "center" }}>
						<div className={values.classStyle}>
							<div className="card  row-bg-color">
								<div className="card-body">
									<div className="card-name">
										<h2 className="card-title">Required Intake Information</h2>
										<p className="card-info">Date Of Birth</p>
									</div>
									<Form
										id="patientBirthForm"
										noValidate
										validated={this.state.validated}
									>
										<Form.Row>
											<Form.Group as={Col} controlId="exampleForm.SelectCustom">
												<Form.Label className="signup-label-font">
													Biological Sex <span className="text-danger"> *</span>
												</Form.Label>

												<Form.Control
													as="select"
													required
													type="text"
													value={values.sex}
													onChange={this.props.handleChange("sex")}
												>
													{identity.map((item) => {
														return (
															<option value={item.value}>{item.gender}</option>
														);
													})}
												</Form.Control>
												<Form.Label className="home-page-label">
													Please choose one
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
												<Form.Label className="signup-label-font">
													Date of Birth
													<span className="text-danger"> *</span>
												</Form.Label>

												<Form.Control
													required
													type="date"
													value={values.dob}
													onChange={this.props.handleChange("dob")}
												/>
												<Form.Label className="home-page-label">
													Date
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

										<Form.Row>
											<Form.Group
												as={Col}
												md="6"
												controlId="exampleForm.SelectCustom"
											>
												<Form.Label className="signup-label-font">
													What is your ethnicity?{" "}
													<span className="text-danger"> *</span>
												</Form.Label>
												<Form.Control
													as="select"
													required
													type="text"
													value={values.ethnicity}
													onChange={this.props.handleChange("ethnicity")}
												>
													{ethnicity.map((item) => {
														return (
															<option
																value={item.value}
																selected={values.ethnicity === item.value}
															>
																{item.desc}
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

										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label className="signup-label-font">
													What is your race?{" "}
													<span className="text-danger"> *</span>
												</Form.Label>
												<ul
													style={{
														listStyleType: "none",
														paddingLeft: "7px",
													}}
												>
													{race.map((item) => {
														return (
															<li key={item.id} className="checkbox-control">
																<FormCheck.Input
																	type="radio"
																	name="groupOptions"
																	checked={values.race === item.value}
																	value={item.value}
																	onChange={this.props.handleChange("race")}
																	required
																/>
																<span>{item.value}</span>
															</li>
														);
													})}
												</ul>
												{this.state.validated && !values.race ? (
													<div className="inline-errormsg">
														<i
															class="fa fa-exclamation-circle"
															aria-hidden="true"
														>
															This field is required.
														</i>
													</div>
												) : null}
											</Form.Group>
										</Form.Row>

										<Form.Row className="form-bottom-border">
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label className="signup-label-font">
													Symptoms
												</Form.Label>
												<ul
													style={{
														listStyleType: "none",
														paddingLeft: "7px",
													}}
												>
													{symptoms.map((item) => {
														return (
															<li key={item.id} className="checkbox-control">
																<FormCheck.Input
																	type="checkbox"
																	checked={
																		values.symptoms &&
																		values.symptoms.findIndex(
																			(elem) => elem === item.value
																		) !== -1
																	}
																	onChange={this.props.handleChange("symptoms")}
																	value={item.value}
																/>
																<span>{item.value}</span>
															</li>
														);
													})}
												</ul>
											</Form.Group>
										</Form.Row>
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
		);
	}
}

export default PatientBirthInfo;
