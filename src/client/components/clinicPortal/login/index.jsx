import React, { Component } from "react";
//import { authenticateAndFetchUserDetails } from "../../../patientPortalServices/loginService";

class ClinicPortalLoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			email: "",
			id: "",
			isAuthenticationfailed: "UNKNOWN",
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = (e) => {
		e.preventDefault();
		// var loginInfo = {};
		// if (
		// 	Number.isInteger(+this.state.contactInfo) === true &&
		// 	this.state.contactInfo.length === 10
		// ) {
		// 	loginInfo = {
		// 		mobile: this.state.contactInfo,
		// 		date_of_birth: this.state.dob,
		// 	};
		// } else {
		// 	loginInfo = {
		// 		email: this.state.contactInfo,
		// 		date_of_birth: this.state.dob,
		// 	};
		// }
		// authenticateAndFetchUserDetails(loginInfo)
		// 	.then((res) => {
		// 		if (res.data.length === 0) {
		// 			this.setState({
		// 				isAuthenticationfailed: "YES",
		// 			});
		// 			return;
		// 		}
		// 		this.setState({
		// 			isAuthenticationfailed: "NO",
		// 		});
		// 		window.localStorage.setItem("PATIENT_ID", res.data[0]._id);
		// 		window.localStorage.setItem("USER_EMAIL", res.data[0].email);
		// 		window.localStorage.setItem("USER_DOB", res.data[0].date_of_birth);
		// 		window.localStorage.setItem(
		// 			"USER_ADDRESS1",
		// 			res.data[0].address.address1 +
		// 				(res.data[0].address.address2 != ""
		// 					? ", " + res.data[0].address.address2
		// 					: "")
		// 		);
		// 		window.localStorage.setItem(
		// 			"USER_ADDRESS2",
		// 			res.data[0].address.city +
		// 				", " +
		// 				res.data[0].address.state +
		// 				", " +
		// 				res.data[0].address.zip
		// 		);
		// 		window.localStorage.setItem(
		// 			"USER_NAME",
		// 			res.data[0].first_name + " " + res.data[0].last_name
		// 		);
		// 		window.location.href = "/clinicportal/patients";
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		this.setState({
		// 			isAuthenticationfailed: "YES",
		// 		});
		// 	});
	};

	render() {
		return (
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									{/* <div className="col-md-7 col-lg-6 login-left"> */}
									<div
										className="col-md-12 col-lg-6 login-right"
										style={{ border: "none" }}
									>
										<h4>
											Welcome to American Gene Technologies Results Portal
											<sup>TM</sup>
										</h4>
										<br />
										<p style={{ fontWeight: "500" }}>
											Please enter your information to access your Dashboard.
										</p>
										<p>
											Access to the AGT Portal is restricted solely to
											authorized users and is monitored for administrative and
											security purpose bt the AGT team. All users expressly
											consent to such monitoring at time of portal registration.
											Any use of this system must be in compliance with AGT
											policies, procedures and applicable laws. Unauthorized
											access or use of this system may result in portal
											termination and civil or criminal liability.
										</p>
										<p>&copy; 2021 American Gene Technologies</p>
									</div>
									<div className="col-md-12 col-lg-5 login-right">
										<form onSubmit={this.handleLogin}>
											<div className="form-group">
												<label className="font-weight-bold">
													Email {" "}
													<span className="text-danger">*</span>
												</label>
												<input
													type="text"
													name="email"
													value={this.state.email}
													onChange={this.handleChange}
													className="form-control"
													required
												/>
											</div>
											<div className="form-group">
												<label className="font-weight-bold">
													Password <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													name="password"
													value={this.state.password}
													onChange={this.handleChange}
													className="form-control"
													required
												/>
											</div>
											{this.state.isAuthenticationfailed === "YES" && (
												<div
													className=" btn-block "
													style={{
														color: "red",
														display: "flex",
														justifyContent: "center",
													}}
												>
													Invalid credentials
												</div>
											)}
											<button
												className="btn btn-primary btn-block btn-lg login-btn"
												type="submit"
											>
												Login
											</button>
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

export default ClinicPortalLoginContainer;
