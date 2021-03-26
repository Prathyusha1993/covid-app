import React, { Component } from "react";
import {Modal, Button} from "react-bootstrap";

class ModalView extends Component {
	constructor(props) {
		super(props);
		this.state = {
            id:'',
			firstName: "",
			lastName: "",
			dob: "",
			gender: "",
			mrn: "",
			email: "",
			mobile: "",
			address: "",
			city: "",
			state: "",
			zip: "",
			country: "",
		};
	}

	render() {
		return (
			<div>
				<Modal.Dialog>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>

					<Modal.Body>
                    <form>
						<div className="row form-row" >
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>First Name</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.firstName}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Last Name</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.lastName}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Date of Birth</label>
									<div className="cal-icon" style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}>
										<input
                                        
											type="text"
											className="form-control datetimepicker"
											value={this.state.dob}
											onChange={this.handleChange}
										/>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Gender</label>
										<input
                                        style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
											type="text"
											className="form-control "
											value={this.state.gender}
											onChange={this.handleChange}
										/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>MRN</label>
										<input
                                        style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
											type="text"
											className="form-control"
											value={this.state.mrn}
											onChange={this.handleChange}
										/>
								</div>
							</div>

							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Email ID</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="email"
										className="form-control"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Mobile</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.mobile}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12">
								<div className="form-group">
									<label>Address</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.address}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>City</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.city}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>State</label>
									<select
                                    
										className="form-control select"
										value={this.state.state}
										onChange={this.handleChange}
									>
										<option value="AL">Alabama</option>
										<option>Alaska</option>
										<option>Arizona</option>
										<option>Arkansas</option>
										<option>California</option>
										<option>Colorado</option>
										<option>Connecticut</option>
										<option>Delaware</option>
										<option>District Of Columbia</option>
										<option>Florida</option>
										<option>Georgia</option>
										<option>Hawaii</option>
										<option>Idaho</option>
										<option>Illinois</option>
										<option>Indiana</option>
										<option>Iowa</option>
										<option>Kansas</option>
										<option>Kentucky</option>
										<option>Louisiana</option>
										<option>Maine</option>
										<option>Maryland</option>
										<option>Massachusetts</option>
										<option>Michigan</option>
										<option>Minnesota</option>
										<option>Mississippi</option>
										<option>Missouri</option>
										<option>Montana</option>
										<option>Nebraska</option>
										<option>Nevada</option>
										<option>New Hampshire</option>
										<option>New Jersey</option>
										<option>New Mexico</option>
										<option>New York</option>
										<option>North Carolina</option>
										<option>North Dakota</option>
										<option>Ohio</option>
										<option>Oklahoma</option>
										<option>Oregon</option>
										<option>Pennsylvania</option>
										<option>Rhode Island</option>
										<option>South Carolina</option>
										<option>South Dakota</option>
										<option>Tennessee</option>
										<option>Texas</option>
										<option>Utah</option>
										<option>Vermont</option>
										<option>Virginia</option>
										<option>Washington</option>
										<option>West Virginia</option>
										<option>Wisconsin</option>
										<option>Wyoming</option>
									</select>
								</div>
							</div>

							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Zip Code</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.zip}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="form-group">
									<label>Country</label>
									<input
                                    style={{borderTop:'none', borderLeft:'none', borderRight:'none'}}
										type="text"
										className="form-control"
										value={this.state.country}
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</div>
						{/* <div className="submit-section">
												<button
													type="submit"
													className="btn btn-primary submit-btn"
												>
													Save Changes
												</button>
											</div> */}
					</form>
					</Modal.Body>
					
					<Modal.Footer>
						<Button variant="secondary">Close</Button>
						<Button variant="primary">Save changes</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
}

export default ModalView;
