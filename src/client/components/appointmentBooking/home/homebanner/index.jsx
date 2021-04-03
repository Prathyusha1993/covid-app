import React, { Component } from "react";

class HomeBookAppoinment extends Component {
	render() {
		return (
			<section className="section section-banner" id="scroll-top">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6"></div>
						<div className="col-12 col-md-6">
							<div className="banner-wrapper">
								<div className="banner-header">
									<h5>Covid 19 Rt-PCR Testing</h5>
									<h1>
										Results within 24 hours <br />
										<span>Four step process</span>
									</h1>
									<p>
										Book an appointment with a physician at one of our partner
										locations and you will have your results within 24 hours!
									</p>
									<div className="btn-col">
										<ul>
											<li>
												<a href="#search-provider" className="btn btn-fill">
													Book an Appointment Now
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default HomeBookAppoinment;
