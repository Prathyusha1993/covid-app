import React, { Component } from "react";
import { phoneNumberFormatter } from "../../../../services/common/util";
import { Form, Button, Col } from "react-bootstrap";
import { states } from "../../../common/optionsData";

class PatientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      firstName: "",
      validated: false,
      viewModal: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  continue = (e) => {
    // const form = e.currentTarget;

    const form = document.getElementById("patientInfoForm");
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        validated: true,
      });
    } else {
      this.props.nextStep();
    }
  };

  render() {
    const { values } = this.props;
    //console.log("values", values);
    return (
      <div>
        <div className="content">
          <div className="row" style={{ justifyContent: "center" }}>
            {/* <div className="col-md-12 col-lg-7 col-xl-7"> */}
            <div className={values.classStyle}>
              <div className="card row-bg-color ">
                <div className="card-body">
                  <div className="card-name">
                    <h2 className="card-title">Your Information</h2>

                    <p className="card-info">
                      As the patient please enter your information
                    </p>
                  </div>
                  <Form
                    id="patientInfoForm"
                    noValidate
                    validated={this.state.validated}
                  >
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="signup-label-font">
                          Full Name <span className="text-danger"> *</span>
                        </Form.Label>

                        <Form.Control
                          required
                          type="text"
                          value={values.firstName}
                          onChange={this.props.handleChange("firstName")}
                        />
                        <Form.Label className="home-page-label">
                          First Name
                        </Form.Label>
                        <Form.Control.Feedback
                          type="invalid"
                          className="inline-errormsg"
                        >
                          <i
                            class="fa fa-exclamation-circle"
                            aria-hidden="true"
                          >
                            This field is required.
                          </i>
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                          required
                          type="text"
                          style={{ marginTop: "8px" }}
                          value={values.lastName}
                          onChange={this.props.handleChange("lastName")}
                        />
                        <Form.Label className="home-page-label">
                          Last Name
                        </Form.Label>
                        <Form.Control.Feedback
                          type="invalid"
                          className="inline-errormsg"
                        >
                          <i
                            class="fa fa-exclamation-circle"
                            aria-hidden="true"
                          >
                            This field is required.
                          </i>
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="signup-label-font">
                          E mail <span className="text-danger"> *</span>
                        </Form.Label>
                        <Form.Control
                          required
                          type="email"
                          value={values.email}
                          onChange={this.props.handleChange("email")}
                        />
                        <Form.Label className="home-page-label">
                          {" "}
                          example@example.com{" "}
                        </Form.Label>
                        <Form.Control.Feedback
                          type="invalid"
                          className="inline-errormsg"
                        >
                          <i
                            class="fa fa-exclamation-circle"
                            aria-hidden="true"
                          >
                            Enter a valid email.
                          </i>
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="signup-label-font">
                          Phone <span className="text-danger"> *</span>{" "}
                        </Form.Label>
                        <Form.Control
                          required
                          type="tel"
                          value={values.phone}
                          placeholder="(XXX) XXX-XXXX"
                          onChange={this.props.handleChange("phone")}
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className="inline-errormsg"
                        >
                          <i
                            class="fa fa-exclamation-circle"
                            aria-hidden="true"
                          >
                            This field is required.
                          </i>
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <div className="form-bottom-border">
                      <Form.Group controlId="formGridEmail">
                        <Form.Label className="signup-label-font">
                          Address <span className="text-danger"> *</span>{" "}
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          value={values.address}
                          onChange={this.props.handleChange("address")}
                        />
                        <Form.Label className="home-page-label">
                          Street Address
                        </Form.Label>
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Control
                            required
                            type="text"
                            value={values.city}
                            onChange={this.props.handleChange("city")}
                          />
                          <Form.Label className="home-page-label">
                            {" "}
                            City
                          </Form.Label>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="exampleForm.SelectCustom"
                        >
                          <Form.Control
                            as="select"
                            required
                            type="text"
                            value={values.state}
                            onChange={this.props.handleChange("state")}
                          >
                            {states.map((state) => {
                              return (
                                <option value={state.value}>
                                  {state.state}
                                </option>
                              );
                            })}
                          </Form.Control>
                          <Form.Label className="home-page-label">
                            State
                          </Form.Label>
                        </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="formGridEmail">
                        <Form.Control
                          required
                          type="number"
                          value={values.zipCode}
                          onChange={this.props.handleChange("zipCode")}
                        />
                        <Form.Label className="home-page-label">
                          Zip Code
                        </Form.Label>
                        <Form.Control.Feedback
                          type="invalid"
                          className="inline-errormsg"
                        >
                          <i
                            class="fa fa-exclamation-circle"
                            aria-hidden="true"
                          >
                            This field is required.
                          </i>
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className=" row next-button btn-patientinfo-next">
                      <Button
                        className="btn-pagebreak-next"
                        type="submit"
                        onClick={this.continue}
                        id="btnNext"
                      >
                        Next
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientInfo;
