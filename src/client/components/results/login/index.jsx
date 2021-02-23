import React, { Component } from 'react';
//import loginBanner from '../../assets/images/login-banner.png';
import {Form} from 'react-bootstrap'
//icon
//import { Link } from 'react-router-dom';

class LoginContainer extends Component {  

    constructor(props) {
		super(props);
		this.state = {
			dob: "",
            contactInfo: '',
			
		};
	}

	handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

	handleLogin = (e) => {
        e.preventDefault();
        if((this.state.contactInfo==="johndoe@gmail.com" || this.state.contactInfo ==="8766788987") && 
        this.state.dob==="1970-10-30")
            {
                this.setState({
                        isAuthenticationfailed: "NO",
                    });
                    window.localStorage.setItem(
                        "_id",
                        "6032672222fd8c47b4d60cd3"
                    );
                    window.localStorage.setItem("USER-EMAIL", "johndoe@gmail.com");
                    window.localStorage.setItem("Username","John Doe" );
                    window.location.href="/results/dashboard";
                
            }
            else{
                this.setState({
                    isAuthenticationfailed: "YES",
                });
            }
    }

	// componentDidMount(){
	// 	document.body.classList.add('account-page');
	// }
	// componentWillUnmount(){
	// 	document.body.classList.remove('account-page');
	// }
 render(){
	return(
		<div className="content">
				<div className="container-fluid">
					
					<div className="row">
						<div className="col-md-8 offset-md-2">
							
							
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									{/* <div className="col-md-7 col-lg-6 login-left"> */}
									<div className="col-md-7 col-lg-5 login-left">
										{/* <img src={loginBanner} className="img-fluid" alt="Doccure Login" />	 */}
										<h4>
											Welcome to American Gene Technologies Results Portal
											<sup>TM</sup>
										</h4>
										<br />
										<p>
											<h6>Please enter your information to access your Dashboard.</h6>
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
									<div className="col-md-12 col-lg-6 login-right">
										{/* <div className="login-header">
											<h3>Login <span>Doccure</span></h3>
										</div> */}
										<form onSubmit={this.handleLogin}>
											{/* <div className="form-group form-focus">
												
												<input type="text" className="form-control floating" />
												<label className="focus-label">Email/MobileNum#</label>
											</div> */}
											<div className="form-group">
												<label className="font-weight-bold" >Email/MobileNumber# <span className="text-danger">*</span></label>
												<input type="text" name="contactInfo" value={this.state.contactInfo} onChange={this.handleChange} className="form-control" required />
											</div>
											{/* <div className="form-group form-focus">
												
												<input  className="form-control floating" />
												<label className="focus-label">Date Of Birth</label>
											</div> */}
											<div className="form-group">
												<label className="font-weight-bold" >Date Of Birth <span className="text-danger">*</span></label>
												<input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} className="form-control" required/>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
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

export default LoginContainer;