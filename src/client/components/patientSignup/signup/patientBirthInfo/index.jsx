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
		};
	}

	handleChange = (e) => {
        if(e.target.type === "checkbox"){
            this.setState({ [e.target.name]: e.target.checked});
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
	}

    continue = e => {
		e.preventDefault();
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
														name="sex"
														value={this.state.sex}
														onChange={this.handleChange}
														className="form-control select"
                                                        placeholder="Please Select"
														required
													>
                                                        {identity.map((item) => {
                                                            return <option value={item.value}>{item.gender}</option>
                                                        })}
                                                    </select>
													<label className="home-page-label">Please choose one</label>
												</div>
												<div className="col-md-6">
													<label className="signup-label-font"> 
                                                    Date Of Birth <span className="text-danger"> *</span></label>
													<input
														type="date"
														name="dob"
														value={this.state.dob}
														onChange={this.handleChange}
														className="form-control"
														required
													/>
													<label className="home-page-label">Date</label>
												</div>
											</div>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														What is your ethnicity?  <span className="text-danger"> *</span>
													</label>
													<select
														name="ethnicity"
														value={this.state.ethnicity}
														onChange={this.handleChange}
														className="form-control select"
                                                        placeholder="Please Select"
														required
													>
                                                        {ethnicity.map((item) => {
                                                            return <option>{item.type}</option>
                                                        })}
                                                    </select>
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
