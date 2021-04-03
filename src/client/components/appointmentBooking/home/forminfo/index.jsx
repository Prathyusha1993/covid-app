import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
//import message from semanticuireact if you want to show mesage after submission

class FormInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			mobile: "",
			email: "",
			text: "",
		};
	}

	// getInTouch = (e) => {
	// 	const info = {
	// 		firstName: this.state.firstName,
	// 		lastName: this.state.lastName,
	// 		mobile: this.state.mobile,
	// 		email: this.state.email,
	// 		text: this.state.text,
	// 	}
	// 	e.preventDefault();
	// 	fetch(`https://hipaa.jotform.com/jsform/210838200288049`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(info),
	// 	}).then((response) => {
	// 		console.log(response);
	// 		response.json();
	// 	})
	// };

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div style={{ paddingTop: "50px" }}>
				<Form
					className="home-page-form"
					//onSubmit={this.getInTouch}
					action="https://hipaa.jotform.com/jsform/210838200288049"
					method="post"
					autocomplete="off"
				>
					{/* <Message 
					success
					header="Form completed"
					content="Thank you your submission has been received" />
					<Message 
					error
					header="Missing fields!"
					list={['All fields must be filled.']}/> */}
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
								type="text"
								name="lastName"
								value={this.state.lastName}
								onChange={this.handleChange}
							/>
							<Form.Label className="home-page-label"> Last Name </Form.Label>
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
							name="text"
							value={this.state.text}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Button variant="primary" type="submit" className="home-page-button">
						Get in Touch With Luke
					</Button>
				</Form>
			</div>
		);
	}
}

export default FormInfo;
