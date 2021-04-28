import React, { Component } from "react";
import { identity, symptoms } from "../selectOptionsData";
import { ethnicity } from "../selectOptionsData";
import { race } from "../selectOptionsData";

class PatientPhotoUploadInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
            uploadFile:"",
		};
	}

	handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
        
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
											<h2 className="card-title">Photo Uploads</h2>
											<p className="card-info">
												Driver's License, Insurance card
											</p>
										</div>
										<form>
											<div className="row" style={{ paddingBottom: "25px" }}>
												<div className="col-md-6">
													<label className="signup-label-font">
														Hoe would you like to submit your photos?
													</label>
													<div class="form-check">
                                                        <input class="form-check-input" type="radio" name="uploadFile"  value={this.state.uploadFile}/>
                                                        <label class="form-check-label" >
                                                        Upload file from computer
                                                        </label>
                                                    </div>
													
												</div>
												
											</div>
											
                                            
											<div className="row next-button">
                                                <div >
                                                    <button className="btn-pagebreak-previous" onClick={this.back}>Back</button>
                                                </div>
                                                <div >
												<button className="btn-pagebreak-next">Submit</button>
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

export default PatientPhotoUploadInfo;
