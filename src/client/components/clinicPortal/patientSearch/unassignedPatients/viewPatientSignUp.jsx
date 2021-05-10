import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SignUp from "../../../patientSignup/signup";
import ViewRequisitionFormpage from "../unassignedPatients/viewRequisitionFormPage";
import { insuranceProvider } from "../../../patientSignup/signup/selectOptionsData";
import { fetchUnassignedPatientDetails } from "../../../../clinicPortalServices/unassignedPatientService";

class ViewPatientSignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patientId:
				this.props && this.props.patientId ? this.props.patientId : "No result",
			patientDetails: {
				patientId: -1,
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				address: "",
				city: "",
				state: "",
				zipCode: "",
				sex: "",
				dob: "",
				ethnicity: "",
				race: "",
				symptoms: "",
				insuranceId: "",
				insuranceProv1: "",
				insuranceProv2: "",
				memberId: "",
				groupNum: "",
				relation: "",
				insuredFirstName: "",
				insuredLastName: "",
				driverLic: "",
				classStyle: "col-md-12 col-lg-7 col-xl-12",
			},
		};
	}

	// componentDidMount() {
	// 	this.fetchPatientDetails(this.props.patientId);
	// }

	componentWillReceiveProps(nextProps) {
		if (nextProps.patientId && this.props.patientId !== nextProps.patientId) {
			this.fetchPatientDetails(nextProps.patientId);
		}
	};

	fetchPatientDetails = (patientId) => {
		console.log("patientId", patientId);
		if (patientId && patientId.toLowerCase() !== "no result") {
			fetchUnassignedPatientDetails(patientId).then((data) => {
				// console.log(data && data.data[0]);

				if (data && Array.isArray(data.data) && data.data[0]) {
					let patientDetails = data.data[0];
					let insurance = patientDetails.insurance[0];
					if (insurance) {
						let index = insuranceProvider.findIndex(
							(i) =>
								i.value.toLowerCase() ===
								insurance.insurance_provider.toLowerCase()
						);
						console.log(index);
						if (index > -1) {
							insurance.insuranceProv1 = insurance.insurance_provider;
							insurance.insuranceProv2 = "";
						} else {
							insurance.insuranceProv1 = "Other";
							insurance.insuranceProv2 = insurance.insurance_provider;
						}
					}

					let patientInfo = {
						patientId: patientDetails._id,
						firstName: patientDetails.first_name,
						lastName: patientDetails.last_name,
						email: patientDetails.email,
						phone: patientDetails.mobile,
						address:
							patientDetails.address.address1 +
							" " +
							patientDetails.address.address2,
						city: patientDetails.address.city,
						state: patientDetails.address.state,
						zipCode: patientDetails.address.zip,
						sex: patientDetails.gender,
						dob: patientDetails.date_of_birth,
						ethnicity: patientDetails.ethnicity,
						race: patientDetails.race,
						symptoms:
							patientDetails.health_info &&
							patientDetails.health_info[0].symptoms,
						insuranceId: insurance ? insurance._id : "",
						insuranceProv1: insurance ? insurance.insuranceProv1 : "",
						insuranceProv2: insurance ? insurance.insuranceProv2 : "",
						memberId: insurance ? insurance.insured_member_id : "",
						groupNum: insurance ? insurance.insured_group_number : "",
						relation: insurance ? insurance.relation_to_insured : "",
						insuredFirstName: insurance ? insurance.insured_first_name : "",
						insuredLastName: insurance ? insurance.insured_last_name : "",
						driverLic: insurance ? insurance.insured_drivers_license : "",
						driverLicFileName:
							insurance && insurance.images
								? insurance.images.drivers_license
								: "",
						insuranceFrontPageFileName:
							insurance && insurance.images
								? insurance.images.insurance_front
								: "",
						insuranceBackPageFileName:
							insurance && insurance.images
								? insurance.images.insurance_back
								: "",
						classStyle: "col-md-12 col-lg-7 col-xl-12",
					};
					this.setState({ patientDetails: patientInfo });
					this.props.setPatientDetails(patientInfo);
				}
			});
		}
	};

	render() {
		return (
			<div>
				<Modal
					//onEnter={this.fetchPatientDetails}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.props.show}
					onHide={this.props.hidePatientSignupHandler}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Patient Details
						</Modal.Title>
					</Modal.Header>
					<Modal.Body id="requisition-btn">
						{/* <button className="btn btn-primary submit-btn button-info-grid button-requisition">Create Requisition</button> */}
						{this.props.show && this.state.patientDetails.patientId ? (
							<div>
								<div className="row">
									<div className="col-12">
										<button
											onClick={this.props.showCreateRequisitionHandler}
											className="btn btn-primary submit-btn button-info-grid pull-right"
										>
											Create Requisition
										</button>
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<SignUp patientDetails={this.state.patientDetails} />
									</div>
								</div>
							</div>
						) : null}
					</Modal.Body>
					<Modal.Footer>
						<Button
							letiant="secondary"
							onClick={this.props.hidePatientSignupHandler}
						>
							Close
						</Button>
						{/* <Button letiant="primary" onClick={this.handleOrderEditChanges}>
							Save Changes
						</Button> */}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ViewPatientSignUp;
