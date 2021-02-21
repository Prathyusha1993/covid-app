import React, { Component } from "react";
import { Form } from "react-bootstrap";
//import loginBanner from '../../assets/images/login-banner.png';
//icon

//import { Link } from 'react-router-dom';

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			dob: "",
		};
	}

	handleChange = () => {};

	handleLogin = () => {};

	componentDidMount() {
		document.body.classList.add("account-page");
	}
	componentWillUnmount() {
		document.body.classList.remove("account-page");
	}
	render() {
		return (
			<div
				className="content"
				style={{ boxSizing: "border-box" }}
			>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									<div className="col-md-7 col-lg-6 login-left">
										{/* <img src={loginBanner} className="img-fluid" alt="Doccure Login" />	 */}
										<h4>
											Welcome to American Gene Technologies Results Portal
											<sup>TM</sup>
										</h4>
										<p>
											Please enter your information to access your Dashboard.
										</p>
										{/* <br/> */}
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
									<div
										className="col-md-12 col-lg-6 login-right"
										style={{
											border: "1px solid white",
											padding: "50px",
											backgroundColor: "lightgray",
											borderRadius: "5px",
										}}
									>
										<Form onSubmit={this.handleLogin}>
											<Form.Group
												controlId="email"
												className="form-group form-focus"
											>
												<Form.Label
													className="font-weight-bold"
													className="focus-label"
												>
													Email/Mobile Number
												</Form.Label>
												<Form.Control
													className="form-control floating"
													required
													type="text"
													name="email"
													value={this.state.email}
													onChange={this.handleChange}
												/>
												<Form.Control.Feedback type="invalid">
													Please enter your email or mobile number.
												</Form.Control.Feedback>
											</Form.Group>
											<Form.Group
												controlId="dateofbirth"
												className="form-group form-focus"
											>
												<Form.Label
													className="font-weight-bold"
													className="focus-label"
												>
													Date of Birth
												</Form.Label>
												<Form.Control
													className="form-control floating"
													required
													type="date"
													name="dateofbirth"
													value={this.state.dob}
													onChange={this.handleChange}
												/>
												<Form.Control.Feedback type="invalid">
													Please select your date of birth.
												</Form.Control.Feedback>
											</Form.Group>
											{/* {this.state.isAuthenticationfailed === "YES" && (
                            <div style={{ color: "red", display: "flex", justifyContent: "center" }}>
                                Invalid credentials
                            </div>
                        )} */}
											<button
												type="submit"
												className="btn btn-primary btn-block btn-lg login-btn"
												//style={{ background: "#4CAF50", color: 'white' }}
												//disabled={!this.validateForm()}
											>
												Login
											</button>
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

export default LoginContainer;
