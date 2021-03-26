
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class BtnCellRenderer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 2,
			item: 0,
			show: false,
			firstName: '',
			lastName:'',
			dob:'',
			gender:'',
			mrn:'',
			email:'',
			mobile:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			country:''
		};
	}

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	// buttonClicked = () => {
	// 	alert(`${this.state.count} medals won!`);
	// };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handlePatientEditChanges = () => {
        //api edit changes here
    }

	render() {
		return (
			<div>
				<button onClick={this.handleShow} style={{ border: "none", backgroundColor: 'white' }}>
					<i class="fas fa-pen"></i>
				</button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Patient Information</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="row form-row">
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>First Name</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="firstName"
											value={this.state.firstName}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Last Name</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="lastName"
											value={this.state.lastName}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Date of Birth</label>
											<input
                                            style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
												type="date"
												className="form-control "
                                                name="dob"
												value={this.state.dob}
												onChange={this.handleChange}
											/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Gender</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control "
                                            name="gender"
											value={this.state.gender}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>MRN</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="mrn"
											value={this.state.mrn}
											onChange={this.handleChange}
										/>
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Email ID</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="email"
											className="form-control"
                                            name="email"
											value={this.state.email}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Mobile</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="mobile"
											value={this.state.mobile}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label>Address</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="address"
											value={this.state.address}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>City</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="city"
											value={this.state.city}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>State</label>
										<select
										style={{
											borderTop: "none",
											borderLeft: "none",
											borderRight: "none",
										}}
											className="form-control select"
                                            name="state"
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
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="zip"
											value={this.state.zip}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="form-group">
										<label>Country</label>
										<input
											style={{
												borderTop: "none",
												borderLeft: "none",
												borderRight: "none",
											}}
											type="text"
											className="form-control"
                                            name="country"
											value={this.state.country}
											onChange={this.handleChange}
										/>
									</div>
								</div>
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
