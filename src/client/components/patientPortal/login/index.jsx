import React, { Component } from "react";
import { authenticateAndFetchUserDetails } from "../../../services/patientPortalServices/loginService";

class PatientPortalLoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dob: "",
			contactInfo: "",
			id: "",
			isAuthenticationfailed: "UNKNOWN",
			loading: false
		};
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = (e) => {
		e.preventDefault();
		this.setState({loading: true});
		var loginInfo = {};
		if (
			Number.isInteger(+this.state.contactInfo) === true &&
			this.state.contactInfo.length === 10
		) {
			loginInfo = {
				mobile: this.state.contactInfo,
				date_of_birth: this.state.dob,
			};
		} else {
			loginInfo = {
				email: this.state.contactInfo,
				date_of_birth: this.state.dob,
			};
		}
		authenticateAndFetchUserDetails(loginInfo)
			.then((res) => {
				if (res.data.length === 0) {
					this.setState({
						isAuthenticationfailed: "YES",
					});
					return;
				}
				this.setState({
					isAuthenticationfailed: "NO",
					loading: false
				});
				if(res.data && res.data.patients && res.data.patients.length > 0){
					window.localStorage.setItem("PATIENT_ID", res.data.patients[0]._id);
					window.localStorage.setItem("USER_EMAIL", res.data.patients[0].email);
					window.localStorage.setItem("USER_DOB", res.data.patients[0].date_of_birth);
					window.localStorage.setItem(
						"USER_ADDRESS1",
						res.data.patients[0].address.address1 +
							(res.data.patients[0].address.address2 != ""
								? ", " + res.data.patients[0].address.address2
								: "")
					);
					window.localStorage.setItem(
						"USER_ADDRESS2",
						res.data.patients[0].address.city +
							", " +
							res.data.patients[0].address.state +
							", " +
							res.data.patients[0].address.zip
					);
					window.localStorage.setItem(
						"USER_NAME",
						res.data.patients[0].first_name + " " + res.data.patients[0].last_name
					);
					window.localStorage.setItem("PATIENT-AUTH-TOKEN", res.data.token);
					window.location.href = "/patientportal/dashboard";
				}
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					isAuthenticationfailed: "YES",
				});
			});
	};

	render() {
		return (
			<div className="content" style={{height: "100vh"}}>
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
													Email or Mobile #{" "}
													<span className="text-danger">*</span>
												</label>
												<input
													type="text"
													name="contactInfo"
													value={this.state.contactInfo}
													onChange={this.handleChange}
													className="form-control"
													required
												/>
												<span style={{ fontSize: "13px" }}>
													Email: username@example.com <br /> Mobile #:
													1234567890
												</span>
												{/* <br />
												<span>Mobile #: 1234567890</span> */}
											</div>
											<div className="form-group">
												<label className="font-weight-bold">
													Date Of Birth <span className="text-danger">*</span>
												</label>
												<input
													type="date"
													name="dob"
													value={this.state.dob}
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
												type="submit" disabled={this.state.loading}
											>
												{this.state.loading && <i className="fa fa-refresh fa-spin"></i>}
												{this.state.loading && <span>Authenticating Please wait</span>}
												{!this.state.loading && <span>Login</span>}
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

export default PatientPortalLoginContainer;
