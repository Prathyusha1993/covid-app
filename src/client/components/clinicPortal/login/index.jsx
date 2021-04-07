import React, { Component } from "react";
import { authenticateAndFetchUserDetails } from "../../../clinicPortalServices/loginService";

class ClinicPortalLoginContainer extends Component {
	constructor(props) {
		window.localStorage.removeItem("FACILITY_ID");
		window.localStorage.removeItem("AUTH-TOKEN");
		super(props);
		this.state = {
			password: "",
			userName: "",
			id: "",
			token: "",
			isAuthenticationfailed: "UNKNOWN",
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLogin = (e) => {
		e.preventDefault();
		authenticateAndFetchUserDetails(this.state.userName, this.state.password)
			.then((userInfo) => {
				debugger;
				console.log(userInfo);
				if (!userInfo || (userInfo && userInfo.token.length === 0)) {
					this.setState({
						isAuthenticationfailed: "YES",
					});
					return;
				}
				this.setState({
					isAuthenticationfailed: "NO",
				});
				//here save the local storage of userid
				window.localStorage.setItem("AUTH-TOKEN", userInfo.token);
				if (userInfo.user.facilities.length > 0)
					window.localStorage.setItem(
						"FACILITY_ID",
						userInfo.user.facilities[0].facility
					);
				window.location.href = "/clinic/orders";
			})
			.catch((err) => {
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
													User Name <span className="text-danger">*</span>
												</label>
												<input
													type="text"
													name="userName"
													value={this.state.userName}
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
													type="password"
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
