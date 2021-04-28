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
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

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
													<label className="signup-label-font">
														Full Name <span className="text-danger"> *</span>
													</label>
													<input
														type="text"
														name="firstName"
														value={this.state.firstName}
														onChange={this.handleChange}
														className="form-control "
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
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														E-mail <span className="text-danger"> *</span>
													</label>
													<input
														type="text"
														name="email"
														value={this.state.email}
														onChange={this.handleChange}
														className="form-control"
														required
													/>
													<label className="home-page-label">
														{" "}
														example@example.com{" "}
													</label>
												</div>
												<div className="col-md-6">
													<label className="signup-label-font">
														Phone <span className="text-danger"> *</span>{" "}
													</label>
													<input
														type="text"
														name="phone"
														value={this.state.phone}
														onChange={this.handleChange}
														className="form-control"
														required
													/>
												</div>
											</div>
											<div className="form-bottom-border">
												<div class="form-group">
													<label className="signup-label-font">Address <span className="text-danger"> *</span>{" "}</label>
													<input
														type="text"
														className="form-control"
														name="address"
														value={this.state.address}
														onChange={this.handleChange}
														required
													/>
													<label className="home-page-label">Street Address</label>
												</div>
												<div className="row">
													<div className="col-md-6">
														<label> </label>
														<input
															type="text"
															name="city"
															value={this.state.city}
															onChange={this.handleChange}
															className="form-control"
															required
														/>
														<label className="home-page-label">
															{" "}
															City{" "}
														</label>
													</div>
													<div className="col-md-6">
														<label> </label>
														<input
															type="text"
															name="state"
															value={this.state.state}
															onChange={this.handleChange}
															className="form-control"
															required
														/>
														<label className="home-page-label">
															{" "}
															State{" "}
														</label>
													</div>
												</div>
												<div class="form-group">
													<label > </label>
													<input
														type="number"
														className="form-control"
														name="zipCode"
														value={this.state.zipCode}
														onChange={this.handleChange}
														required
													/>
													<label className="home-page-label">
															{" "}
															Zip Code{" "}
													</label>
												</div>
											</div>
											<div className=" row next-button btn-patientinfo-next">
												<button className="btn-pagebreak-next" onClick={this.continue}>Next</button>
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
