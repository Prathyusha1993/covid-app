import React, { Component } from "react";
import { identity, symptoms } from "../selectOptionsData";
import { ethnicity } from "../selectOptionsData";
import { race } from "../selectOptionsData";

class PatientBirthInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sex: "",
			dob: "",
			ethnicity: "",
			race: "",
			symptoms: "",
            errors: [],
		};
	}

	handleChange = (e) => {
        var key = e.target.name;
        var value = e.target.value;
        var obj = {};
        obj[key] = value;
        if(e.target.type === "checkbox"){
            this.setState({ key: e.target.checked});
        }
        else {
            this.setState(obj);
        }
	}

    hasError = (key) => {
		return this.state.errors.indexOf(key) !== -1;
	};

    continue = e => {
		e.preventDefault();
        var errors = [];

		if (this.state.sex === "") {
			errors.push("sex");
		}
		if (this.state.dob === "") {
			errors.push("dob");
		}
		if (this.state.ethnicity === "") {
			errors.push("ethnicity");
		}

		this.setState({ errors: errors });
		if (errors.length > 0) {
			return false;
		}
		this.props.nextStep();
	}

    back = e => {
        e.preventDefault();
		this.props.prevStep();
    }

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
								<div className="card">
									<div className="card-body">
										<div className="card-name">
											<h2 className="card-title">Required Intake Information</h2>
											<p className="card-info">
												Date Of Birth
											</p>
										</div>
										<form>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														Biological Sex <span className="text-danger"> *</span>
													</label>
													<select
                                                    autoComplete="off"
														name="sex"
														value={this.state.sex}
														onChange={this.handleChange}
                                                        className={
															this.hasError("sex")
																? "form-control select is-invalid"
																: "form-control"
														}
                                                        placeholder="Please Select"
														required
													>
                                                        {identity.map((item) => {
                                                            return <option value={item.value}>{item.gender}</option>
                                                        })}
                                                    </select>
													<label className="home-page-label">Please choose one</label>
                                                    <div
														className={
															this.hasError("sex")
																? "inline-errormsg"
																: "hidden"
														}
													>
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
												</div>
												<div className="col-md-6">
													<label className="signup-label-font"> 
                                                    Date Of Birth <span className="text-danger"> *</span></label>
													<input
                                                    autoComplete="off"
														type="date"
														name="dob"
														value={this.state.dob}
														onChange={this.handleChange}
														className={
															this.hasError("dob")
																? "form-control is-invalid"
																: "form-control"
														}
														required
													/>
													<label className="home-page-label">Date</label>
                                                    <div
														className={
															this.hasError("dob")
																? "inline-errormsg"
																: "hidden"
														}
													>
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
												</div>
											</div>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														What is your ethnicity?  <span className="text-danger"> *</span>
													</label>
													<select
                                                    autoComplete="off"
														name="ethnicity"
														value={this.state.ethnicity}
														onChange={this.handleChange}
														className={
															this.hasError("ethnicity")
																? "form-control select is-invalid"
																: "form-control"
														}
                                                        placeholder="Please Select"
														required
													>
                                                        {ethnicity.map((item) => {
                                                            return <option>{item.type}</option>
                                                        })}
                                                    </select>
                                                    <div
														className={
															this.hasError("lastName")
																? "inline-errormsg"
																: "hidden"
														}
													>
														{/* <i class="fa fa-exclamation-circle" aria-hidden="true"></i>This field is required */}
													</div>
												</div>
											</div>
                                            <div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-7">
													<label className="signup-label-font">
														What is your race?  <span className="text-danger"> *</span>
													</label>{" "}
                                                    <ul style={{listStyleType: 'none', paddingLeft: '7px'}}>
                                                    {race.map((item) => {
                                                        return (<li key={item.id} className="checkbox-control">
                                                            <label >
                                                                <input type="checkbox" 
                                                                name="race"
                                                                value={this.state.race}
                                                                onChange={this.handleChange}
                                                                required/>
                                                                <span>{item.value}</span>
                                                            </label>
                                                            </li>
                                                        )
                                                    })}
                                                    </ul>
												</div>
                                            </div>
                                            <div className="row form-bottom-border" style={{ paddingBottom: "20px" }}>
												<div className="col-md-8">
													<label className="signup-label-font">
														Symptoms  
													</label>{" "}
                                                    <ul style={{listStyleType: 'none', paddingLeft: '7px'}}>
                                                    {symptoms.map((item) => {
                                                        return (<li key={item.id} className="checkbox-control">
                                                            <label >
                                                                <input type="checkbox" 
                                                                name="symptoms"
                                                                value={this.state.symptoms}
                                                                onChange={this.handleChange}
                                                                required/>
                                                                <span>{item.value}</span>
                                                            </label>
                                                            </li>
                                                        )
                                                    })}
                                                    </ul>
												</div>
                                            </div>
											<div className="row next-button">
                                                <div >
                                                    <button className="btn-pagebreak-previous" onClick={this.back}>Back</button>
                                                </div>
                                                <div >
												<button className="btn-pagebreak-next" onClick={this.continue}>Next</button>
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

export default PatientBirthInfo;
