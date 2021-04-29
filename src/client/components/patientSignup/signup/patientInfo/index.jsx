import React, { Component } from "react";

class PatientInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			city: "",
			state: "",
			zipCode: "",
			errors: [],
		};
	}

	handleChange = (e) => {
		var key = e.target.name;
		var value = e.target.value;
		var obj = {};
		obj[key] = value;
		this.setState(obj);
	};

	hasError = (key) => {
		return this.state.errors.indexOf(key) !== -1;
	};

	continue = (e) => {
		e.preventDefault();

		var errors = [];

		if (this.state.firstName === "") {
			errors.push("firstName");
		}
		if (this.state.lastName === "") {
			errors.push("lastName");
		}
		if (this.state.email === "") {
			errors.push("email");
		}
		if (this.state.phone === "") {
			errors.push("phone");
		}
		if (this.state.address === "") {
			errors.push("address");
		}
		if (this.state.city === "") {
			errors.push("city");
		}
		if (this.state.state === "") {
			errors.push("state");
		}
		if (this.state.zipCode === "") {
			errors.push("zipCode");
		}

		this.setState({ errors: errors });
		if (errors.length > 0) {
			return false;
		}
		this.props.nextStep();
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
								<div className="card">
									<div className="card-body">
										<div className="card-name">
											<h2 className="card-title">Your Information</h2>
											<p className="card-info">
												As the patient please enter your information
											</p>
										</div>
										<form>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label
														className="signup-label-font"
														htmlFor="firstName"
													>
														Full Name <span className="text-danger"> *</span>
													</label>
													<input
														autoComplete="off"
														type="text"
														name="firstName"
														value={this.state.firstName}
														onChange={this.handleChange}
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
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
												</div>
												<div className="col-md-6">
													<label> </label>
													<input
														autoComplete="off"
														style={{ marginTop: "8px" }}
														type="text"
														name="lastName"
														value={this.state.lastName}
														onChange={this.handleChange}
														className={
															this.hasError("lastName")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<label className="home-page-label">last Name</label>
													<div
														className={
															this.hasError("lastName")
																? "inline-errormsg"
																: "hidden"
														}
													>
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
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
														value={this.state.email}
														onChange={this.handleChange}
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
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
												</div>
												<div className="col-md-6">
													<label className="signup-label-font">
														Phone <span className="text-danger"> *</span>{" "}
													</label>
													<input
														autoComplete="off"
														type="text"
														name="phone"
														value={this.state.phone}
														onChange={this.handleChange}
														className={
															this.hasError("phone")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<div
														className={
															this.hasError("phone")
																? "inline-errormsg"
																: "hidden"
														}
													>
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
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
														value={this.state.address}
														onChange={this.handleChange}
														required
													/>
													<label className="home-page-label">
														Street Address
													</label>
													<div
														className={
															this.hasError("address")
																? "inline-errormsg"
																: "hidden"
														}
													>
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label> </label>
														<input
															autoComplete="off"
															type="text"
															name="city"
															value={this.state.city}
															onChange={this.handleChange}
															className={
																this.hasError("city")
																	? "form-control is-invalid"
																	: "form-control"
															}
															required
														/>
														<label className="home-page-label"> City </label>
														<div
															className={
																this.hasError("city")
																	? "inline-errormsg"
																	: "hidden"
															}
														>
															{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
														</div>
													</div>
													<div className="col-md-6">
														<label> </label>
														<input
															autoComplete="off"
															type="text"
															name="state"
															value={this.state.state}
															onChange={this.handleChange}
															className={
																this.hasError("state")
																	? "form-control is-invalid"
																	: "form-control"
															}
															required
														/>
														<label className="home-page-label"> State </label>
														<div
															className={
																this.hasError("state")
																	? "inline-errormsg"
																	: "hidden"
															}
														>
															{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
														</div>
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
														value={this.state.zipCode}
														onChange={this.handleChange}
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
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
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
										</form>
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
