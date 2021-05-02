import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { getInTouchDetails } from "../../../../appointmentBookingServices/getInTouch";
import { phoneNumberFormatter } from "../../../../utils/util";

class FormInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            testingNeeds: "",
            toEmail: "",
            subject: "Contact Us",
            showMessage: false,
            validated: false
        };
    }

    getInTouch = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            this.setState({
                validated: true,
                showMessage: false
            });
        } else {
            e.preventDefault();

            var body =
                "First Name - " +
                this.state.firstName +
                "\n" +
                "Last Name - " +
                this.state.lastName +
                "\n" +
                "Mobile - " +
                this.state.mobile.replace(/[^0-9]/g, '') +
                "\n" +
                "Email - " +
                this.state.email +
                "\n" +
                "Testing Needs - " +
                this.state.testingNeeds +
                "\n";

            console.log('body', body);
            getInTouchDetails(this.state.toEmail, this.state.subject, body);
            this.setState({
                firstName: "",
                lastName: "",
                mobile: "",
                email: "",
                testingNeeds: "",
                showMessage: true,
                validated: false
            });
        }
    };

    handleChange = (e) => {
        var key = e.target.name;
        var value = e.target.value;
        var obj = {};
        if (key === 'mobile') {
            this.setState(prevState => ({ mobile: phoneNumberFormatter(value, prevState.mobile) }));
        } else {
            obj[key] = value;
            this.setState(obj);
        }
    };

    render() {
        return (
            <div style={{ paddingTop: "50px" }}>
                <Form
                    noValidate
                    validated={this.state.validated}
                    className="home-page-form"
                    onSubmit={this.getInTouch}
                >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>What is your name?</Form.Label>
                            <Form.Control
                                required
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
                                required
                                style={{ marginTop: "8px" }}
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
                            required
                            name="mobile"
                            type="tel"
                            placeholder="(XXX) XXX-XXXX"
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
                            required
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
                    <br />
                    {this.state.showMessage && (
                        <p
                            style={{ color: "green", marginLeft: "50px", marginTop: "10px" }}
                        >
                            Thank you for contacting us, we will get back to you shortly.
                        </p>
                    )}
                </Form>
            </div>
        );
    }
}

export default FormInfo;
