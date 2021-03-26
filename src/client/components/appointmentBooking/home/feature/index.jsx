import React, { Component } from "react";
import { ImgStep1, ImgStep2, ImgStep3, ImgStep4 } from "./img.jsx";

class Feature extends Component {
	render() {
		return (
			<section className="feature-list" style={{ marginTop: "20px" }}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 col-lg-3">
							<div className="feature-list-box">
								<div className="number-col text-right">
									<h5>01</h5>
								</div>
								<div className="feature-icon">
									<img src={ImgStep1} alt="" />
								</div>
								<h4>
									Find A Close <br />
									Location
								</h4>
								<div className="plus-icon text-right">
									{/* <i className="fas fa-plus-circle" /> */}
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="feature-list-box">
								<div className="number-col text-right">
									<h5>02</h5>
								</div>
								<div className="feature-icon">
									<img src={ImgStep2} alt="" />
								</div>
								<h4>
									Book An <br />
									Appointment
								</h4>
								<div className="plus-icon text-right">
									{/* <i className="fas fa-plus-circle" /> */}
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="feature-list-box">
								<div className="number-col text-right">
									<h5>03</h5>
								</div>
								<div className="feature-icon">
									<img src={ImgStep3} alt="" />
								</div>
								<h4>
									Go For Your <br />
									Rt-PCR Test 
									
								</h4>
								<div className="plus-icon text-right">
									{/* <i className="fas fa-plus-circle" /> */}
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3">
							<div className="feature-list-box">
								<div className="number-col text-right">
									<h5>04</h5>
								</div>
								<div className="feature-icon">
									<img src={ImgStep4} alt="" />
								</div>
								<h4>
									Get Your <br />
									Results
								</h4>
								<div className="plus-icon text-right">
									{/* <i className="fas fa-plus-circle" /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Feature;
