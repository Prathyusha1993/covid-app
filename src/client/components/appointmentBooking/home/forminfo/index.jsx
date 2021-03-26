import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class FormInfo extends Component {
	constructor(props) {
		super(props);
		this.staet = {};
	}

	render() {
		const styleForm = {
			border: "1px solid",
			width: "600px",
			height: "600px",
			backgroundColor: "#f7f7f7",
			padding: "20px 20px 20px 20px",
			display: "block",
			marginLeft: "auto",
			marginRight: "auto",
			boxShadow: "5px 10px 18px #888888",
            borderRadius: '5px'
		};
		return (
			<div style={{ paddingTop: "50px" }}>
				<Form style={styleForm}>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>What is your name?</Form.Label>
							<Form.Control type="text" />
							<Form.Label style={{ fontSize: "12px" }}>First Name </Form.Label>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label> </Form.Label>
							<Form.Control type="text" />
							<Form.Label style={{ fontSize: "12px" }}> Last Name </Form.Label>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>What number can you be reached at?</Form.Label>
						<Form.Control type="number" defaultValue="(000) 000-0000" />
						<Form.Label style={{ fontSize: "12px" }}>
							{" "}
							please enter a valid phone number.{" "}
						</Form.Label>
					</Form.Group>

					<Form.Group controlId="formGridAddress2">
						<Form.Label>What is your email address?</Form.Label>
						<Form.Control type="text" />
						<Form.Label style={{ fontSize: "12px" }}>
							{" "}
							example@example.com{" "}
						</Form.Label>
					</Form.Group>

					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Tell us about your testing needs</Form.Label>
						<Form.Control as="textarea" rows={3} placeholder="Type here..." />
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						style={{ width: "40%", marginLeft: "30%", marginRight: "30%" }}
					>
						Get in Touch With Luke
					</Button>
				</Form>
			</div>
		);
	}
}

export default FormInfo;
