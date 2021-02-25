import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { authenticateAndFetchUserDetails } from "../../../patientPortalServices/loginService";

class PatientPortalLoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dob: "",
			contactInfo: "",
			id: "",
			isAuthenticationfailed: "UNKNOWN",
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// endpoints with static data
	handleLogin = (e) => {
		e.preventDefault();
		if (
			(this.state.contactInfo === "johndoe@gmail.com" ||
				this.state.contactInfo === "8766788987") &&
			this.state.dob === "1970-10-30"
		) {
			this.setState({
				isAuthenticationfailed: "NO",
			});
			window.localStorage.setItem("_id", "6032672222fd8c47b4d60cd3");
			window.localStorage.setItem("USER-EMAIL", "johndoe@gmail.com");
			window.localStorage.setItem("USER_NAME", "John Doe");
			window.localStorage.setItem("DOB", "10/30/1970");
			window.location.href = "/patientportal/dashboard";
		} else {
			this.setState({
				isAuthenticationfailed: "YES",
			});
		}
	};

	// handleLogin = (e) => {
	// 	e.preventDefault();
	// 	var loginInfo = {};
	// 	if (
	// 		Number.isInteger(this.state.contactInfo) === true &&
	// 		this.state.contactInfo.length === 10
	// 	) {
	// 		loginInfo = {
	// 			mobile: this.state.contactInfo,
	// 			date_of_birth: this.state.dob,
	// 		};
	// 	} else {
	// 		loginInfo = {
	// 			email: this.state.contactInfo,
	// 			date_of_birth: this.state.dob,
	// 		};
	// 	}
	// 	authenticateAndFetchUserDetails(loginInfo)
	// 		.then((res) => {
	// 			console.log(res);
	// 			console.log(res.data);
	// 			if (res.data.length === 0) {
	// 				this.setState({
	// 					isAuthenticationfailed: "YES",
	// 				});
	// 				return;
	// 			}
	// 			this.setState({
	// 				isAuthenticationfailed: "NO",
	// 			});
	// 			window.localStorage.setItem("PATIENT_ID", res.data[0]._id);
	// 			window.localStorage.setItem("USER_EMAIL", res.data[0].email);
	// 			window.localStorage.setItem(
	// 				"USER_NAME",
	// 				res.data[0].firstName + " " + res.data[0].lastName
	// 			);
	// 			window.location.href = "/patientportal/dashboard";
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			this.setState({
	// 				isAuthenticationfailed: "YES",
	// 			});
	// 		});
	//};

	// componentDidMount(){
	// 	document.body.classList.add('account-page');
	// }
	// componentWillUnmount(){
	// 	document.body.classList.remove('account-page');
	// }
	render() {
		return (
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									{/* <div className="col-md-7 col-lg-6 login-left"> */}
									<div className="col-md-7 col-lg-6 login-left">
										<h4>
											Welcome to American Gene Technologies Results Portal
											<sup>TM</sup>
										</h4>
										<br />
										<p>
											<h6>
												Please enter your information to access your Dashboard.
											</h6>
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
										<p>&copy; 2020 American Gene Technologies</p>
									</div>
									<div className="col-md-12 col-lg-5 login-right">
										<form onSubmit={this.handleLogin}>
											<div className="form-group">
												<label className="font-weight-bold">
													Email/MobileNumber#{" "}
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

export default PatientPortalLoginContainer;
