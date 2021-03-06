import React, { Component } from "react";

class PatientBreadcrumb extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										Patients
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Patients</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PatientBreadcrumb;
