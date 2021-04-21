import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { getInTouchDetails } from "../../../../appointmentBookingServices/getInTouch";

class FormInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			mobile: "",
			email: "",
			testingNeeds: "",
			toEmail:"",
			subject: "",
			showMessage: false,
		};
	}

	// getInTouch = (e) => {
	// 	const info = {
	// 		firstName: this.state.firstName ,
	// 		lastName: this.state.lastName,
	// 		mobile: this.state.mobile,
	// 		email: this.state.email,
	// 		testingNeeds: this.state.testingNeeds,
	// 	}
	// 	e.preventDefault();
	// 	getInTouchDetails(this.state.toEmail, this.state.subject, info);
	// 	this.setState({
	// 		firstName: '',
	// 		lastName: '',
	// 		mobile:'',
	// 		email:'',
	// 		testingNeeds: '',
	// 		showMessage: true
	// 	});
	// };

	getInTouch = (e) => {
			const info = {
			firstName: this.state.firstName ,
			lastName: this.state.lastName,
			mobile: this.state.mobile,
			email: this.state.email,
			testingNeeds: this.state.testingNeeds,
		}
		e.preventDefault();
		fetch('https://www.mycovidnow.com/api/misc/v2/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"toEmail" : "kiran@ushealthtek.com",
				"subject" : "Contact Us",
				"body" : info
			})
		})
		.then(response => response.json());
		this.setState({
					firstName: '',
					lastName: '',
					mobile:'',
					email:'',
					testingNeeds: '',
					showMessage: true
				});
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div style={{ paddingTop: "50px" }}>
				<Form
					className="home-page-form"
					onSubmit={this.getInTouch}
					//action="https://hipaa.jotform.com/jsform/210838200288049"
					//method="post"
					//autocomplete="off"
				>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>What is your name?</Form.Label>
							<Form.Control
								type="text"
								name="firstName"
								value={this.state.firstName}
								onChange={this.handleChange}
							/>
							<Form.Label className="home-page-label">First Name </Form.Label>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label> </Form.Label>
							<Form.Control
							style={{marginTop: "8px"}}
								type="text"
								name="lastName"
								value={this.state.lastName}
								onChange={this.handleChange}
							/>
							<Form.Label className="home-page-label" > Last Name </Form.Label>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>What number can you be reached at?</Form.Label>
						<Form.Control
							type="number"
							name="mobile"
							value={this.state.mobile}
							onChange={this.handleChange}
						/>
						<Form.Label className="home-page-label">
							{" "}
							please enter a valid phone number.{" "}
						</Form.Label>
					</Form.Group>

					<Form.Group controlId="formGridAddress2">
						<Form.Label>What is your email address?</Form.Label>
						<Form.Control
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<Form.Label className="home-page-label">
							{" "}
							example@example.com{" "}
						</Form.Label>
					</Form.Group>

					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Tell us about your testing needs</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Type here..."
							name="testingNeeds"
							value={this.state.testingNeeds}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Button variant="primary" type="submit" className="home-page-button">
						Submit
					</Button>
					<br/>
					{this.state.showMessage && <p style={{color: 'green', marginLeft: '50px', marginTop: '10px'}}>Thank you for contacting us, we will get back to you shortly.</p>}
				</Form>
			</div>
		);
	}
}

export default FormInfo;
