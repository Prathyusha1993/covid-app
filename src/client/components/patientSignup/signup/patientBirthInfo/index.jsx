import React, { Component } from "react";
import { identity, symptoms } from "../selectOptionsData";
import { ethnicity } from "../selectOptionsData";
import { race } from "../selectOptionsData";
import { Form, Button, Col, FormCheck } from "react-bootstrap";

class PatientBirthInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false,
		};
	}


	continue = (e) => {
		const form = document.getElementById("patientBirthForm");
		// if(!this.props.values.race) {
		// 	alert('select race');
		// }
		
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
			this.setState({
				validated: true,
			});
		} else {
			this.props.nextStep();
		}
		// e.preventDefault();
		// var errors = [];

		// if (this.state.sex === "") {
		// 	errors.push("sex");
		// }
		// if (this.state.dob === "") {
		// 	errors.push("dob");
		// }
		// if (this.state.ethnicity === "") {
		// 	errors.push("ethnicity");
		// }
		// if (this.state.race === "") {
		// 	errors.push("race");
		// }

		// this.setState({ errors: errors });
		// if (errors.length > 0) {
		// 	return false;
		// }
		// this.props.nextStep();
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
								<div className="card  row-bg-color">
									<div className="card-body">
										<div className="card-name">
											<h2 className="card-title">
												Required Intake Information
											</h2>
											<button>Create Requisition</button>
											<p className="card-info">Date Of Birth</p>
										</div>
										<Form
											id="patientBirthForm"
											noValidate
											validated={this.state.validated}
										>
											<Form.Row style={{ paddingBottom: "15px" }}>
												<Form.Group
													as={Col}
													controlId="exampleForm.SelectCustom"
												>
													<Form.Label className="signup-label-font">
														Biological Sex{" "}
														<span className="text-danger"> *</span>
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
																<option value={item.value}>
																	{item.gender}
																</option>
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
													<Form.Label>Date of Birth
														<span className="text-danger"> *</span></Form.Label>
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

											<Form.Row style={{ paddingBottom: "5px" }}>
												<Form.Group
													as={Col} md="6"
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
															return <option value={item.value}>{item.desc}</option>;
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

											<Form.Row style={{ paddingBottom: "0px" }}>
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
																	{/* <Form.Label> */}
																		<FormCheck.Input
																			type="radio"

																			//value={values.race}
																			// onChange={this.props.handleChange("race")}

                                                                            name="groupOptions"
																			value={values.race}
																			onChange={this.props.handleChange("race")}

																			required
																		/>
																		<span>{item.value}</span>
																	{/* </Form.Label> */}
																</li>
															);
														})}
													</ul>
													{
														this.state.validated && !values.race 
														? <div className="inline-errormsg">
															<i
															class="fa fa-exclamation-circle"
															aria-hidden="true"
														>
															This field is required.
														</i>
															</div>
														: null
													}
													
													{/* <Form.Control.Feedback
														type="invalid"
														className="inline-errormsg"
													>
														<i
															class="fa fa-exclamation-circle"
															aria-hidden="true"
														>
															This field is required.
														</i>
													</Form.Control.Feedback> */}
												</Form.Group>
											</Form.Row>

											<Form.Row
												style={{ paddingBottom: "20px" }}
												className="form-bottom-border"
											>
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
																	{/* <Form.Label> */}
																		<FormCheck.Input
																			type="checkbox"
																			value={values.symptoms}
																			onChange={this.props.handleChange(
																				"symptoms"
																			)}
																			required
																		/>
																		<span>{item.value}</span>
																	{/* </Form.Label> */}
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

										{/* <form>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														Biological Sex <span className="text-danger"> *</span>
													</label>
													<select
                                                    autoComplete="off"
														name="sex"
														value={this.state.sex}
														onChange={this.handleChange}
                                                        className={
															this.hasError("sex")
																? "form-control select is-invalid"
																: "form-control"
														}
                                                        placeholder="Please Select"
														required
													>
                                                        {identity.map((item) => {
                                                            return <option value={item.value}>{item.gender}</option>
                                                        })}
                                                    </select>
													<label className="home-page-label">Please choose one</label>
                                                    <div
														className={
															this.hasError("sex")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
												<div className="col-md-6">
													<label className="signup-label-font"> 
                                                    Date Of Birth <span className="text-danger"> *</span></label>
													<input
                                                    autoComplete="off"
														type="date"
														name="dob"
														value={this.state.dob}
														onChange={this.handleChange}
														className={
															this.hasError("dob")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<label className="home-page-label">Date</label>
                                                    <div
														className={
															this.hasError("dob")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
											</div>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														What is your ethnicity?  <span className="text-danger"> *</span>
													</label>
													<select
                                                    autoComplete="off"
														name="ethnicity"
														value={this.state.ethnicity}
														onChange={this.handleChange}
														className={
															this.hasError("ethnicity")
																? "form-control select is-invalid"
																: "form-control"
														}
                                                        placeholder="Please Select"
														required
													>
                                                        {ethnicity.map((item) => {
                                                            return <option>{item.type}</option>
                                                        })}
                                                    </select>
                                                    <div
														className={
															this.hasError("ethnicity")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
											</div>
                                            <div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-7">
													<label className="signup-label-font">
														What is your race?  <span className="text-danger"> *</span>
													</label>{" "}
                                                    <ul style={{listStyleType: 'none', paddingLeft: '7px'}}>
                                                    {race.map((item) => {
                                                        return (<li key={item.id} 
														 className="checkbox-control"
														>
                                                            <label >
                                                                <input type="checkbox" 
                                                                name="race"
                                                                value={this.state.race}
                                                                onChange={this.handleChange}
																className={
																	this.hasError("race")
																		? "form-check-input is-invalid"
																		: "form-check-input"
																}
                                                                required={true}                        
																/>
                                                                <span >{item.value}</span>
                                                            </label>
                                                            </li>
                                                        )
                                                    })}
                                                    </ul>
													<div
														className={
															this.hasError("race")
																? "inline-errormsg"
																: "hidden"
														}
													>
														<i class="fa fa-exclamation-circle" aria-hidden="true">This field is required.</i>
													</div>
												</div>
                                            </div>
                                            <div className="row form-bottom-border" style={{ paddingBottom: "20px" }}>
												<div className="col-md-8">
													<label className="signup-label-font">
														Symptoms  
													</label>{" "}
                                                    <ul style={{listStyleType: 'none', paddingLeft: '7px'}}>
                                                    {symptoms.map((item) => {
                                                        return (<li key={item.id} className="checkbox-control">
                                                            <label >
                                                                <input type="checkbox" 
                                                                name="symptoms"
                                                                value={this.state.symptoms}
                                                                onChange={this.handleChange}
																className="form-check-input"
                                                                required/>
                                                                <span>{item.value}</span>
                                                            </label>
                                                            </li>
                                                        )
                                                    })}
                                                    </ul>
												</div>
                                            </div>
											<div className="row next-button">
                                                <div >
                                                    <button className="btn-pagebreak-previous" onClick={this.back}>Back</button>
                                                </div>
                                                <div >
												<button className="btn-pagebreak-next" onClick={this.continue}>Next</button>
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

export default PatientBirthInfo;
