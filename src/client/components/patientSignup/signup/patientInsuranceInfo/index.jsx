import React, { Component } from "react";
import { insuranceProvider } from "../selectOptionsData";
import { relation } from "../selectOptionsData";

class PatientInsuranceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceProv1: "",
            insuranceProv2: "",
            memberId: "",
            groupNum: "",
            relation: "",
            firstName: "",
            lastName: "",
            driverLic: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row" style={{ justifyContent: "center" }}>
                            {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<DoctorSidebar />
							</div> */}
                            <div className="col-md-6 col-lg-7 col-xl-7">
                                <div className="card row-bg-color">
                                    <div className="card-body">
                                        <div className="card-name">
                                            <h2 className="card-title">Insurance Information</h2>
                                            <p className="card-info">
                                                If you are not self paying, please provide information
											</p>
                                        </div>
                                        <form>
                                            <div className="row" style={{ paddingBottom: "25px" }}>
                                                <div className="col-md-6">
                                                    <label className="signup-label-font">
                                                        Choose your Insurance Provider
													</label>
                                                    <select
                                                        name="insuranceProv1"
                                                        value={this.state.insuranceProv1}
                                                        onChange={this.handleChange}
                                                        className="form-control select"
                                                        placeholder="Please Select"
                                                        required
                                                    >
                                                        {insuranceProvider.map((item) => {
                                                            return (
                                                                <option value={item.id}>{item.value}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            {
                                                this.state.insuranceProv1 === '2'
                                                ? null
                                                : 
                                                <div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Insurance Provider (If other)
													</label>
                                                            <input
                                                                type="text"
                                                                name="insuranceProv2"
                                                                value={this.state.insuranceProv2}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Insurance Member ID
													</label>
                                                            <input
                                                                type="text"
                                                                name="memberId"
                                                                value={this.state.memberId}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Insurance Group Number
													</label>
                                                            <input
                                                                type="text"
                                                                name="groupNum"
                                                                value={this.state.groupNum}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Relation to Insured
													</label>
                                                            <select
                                                                name="relation"
                                                                value={this.state.relation}
                                                                onChange={this.handleChange}
                                                                className="form-control select"
                                                                placeholder="Please Select"
                                                                required
                                                            >
                                                                {relation.map((item) => {
                                                                    return (
                                                                        <option value={item.id}>{item.value}</option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ paddingBottom: "25px" }}>
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                What is the Name of The Insurance Holder?
													</label>
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                value={this.state.firstName}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                            <label className="home-page-label">First Name</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label> </label>
                                                            <input
                                                                style={{ marginTop: "8px" }}
                                                                type="text"
                                                                name="lastName"
                                                                value={this.state.lastName}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                            <label className="home-page-label">last Name</label>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="row form-bottom-border"
                                                        style={{ paddingBottom: "25px" }}
                                                    >
                                                        <div className="col-md-6">
                                                            <label className="signup-label-font">
                                                                Driver's License # (required for filling an
                                                                insurance claim)
													</label>
                                                            <input
                                                                type="text"
                                                                name="driverLic"
                                                                value={this.state.driverLic}
                                                                onChange={this.handleChange}
                                                                className="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            <div className="row next-button">
                                                <div>
                                                    <button
                                                        className="btn-pagebreak-previous"
                                                        onClick={this.back}
                                                    >
                                                        Back
													</button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="btn-pagebreak-next"
                                                        onClick={this.continue}
                                                    >
                                                        Next
													</button>
                                                </div>
                                            </div>
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

export default PatientInsuranceInfo;
