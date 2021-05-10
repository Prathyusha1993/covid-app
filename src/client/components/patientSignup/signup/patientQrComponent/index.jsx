import React, { Component } from "react";
import { getUserAuthToken } from "../../../../utils/util";
import { fetchPatientQrResponse } from "../../../../patientSignupServices/patientSignupFormService";
import {fetchUnassignedPatientDetails} from "../../../../clinicPortalServices/unassignedPatientService"

class PatientQrComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// dataStream: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK4SURBVO3BQW7sWAwEwSxC979yjpdcPUCQur/NYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUuiR0KidJOFHpkvBNKk8Ua5RijVKsUS5epvKmJJyodEnoVDqVJ1TelIQ3FWuUYo1SrFEuPiwJd6g8odIloVPpktCp3JGEO1Q+qVijFGuUYo1y8ccloVO5Q2WSYo1SrFGKNcrFMEm4Iwmdyl9WrFGKNUqxRrn4MJVvUumS0CWhU3lC5Tcp1ijFGqVYo1y8LAm/mUqXhE7lJAm/WbFGKdYoxRol/uAPS8KbVP6yYo1SrFGKNcrFQ0noVO5IQqfSJeEJlS4JnUqXhDepnCShU3miWKMUa5RijRJ/8EAS3qRyRxI6lZMknKicJKFT6ZJwovJJxRqlWKMUa5SLh1S6JHQqJ0nokvBNKidJOElCp3JHEjqVJ4o1SrFGKdYoFw8loVPpktCpdCpdEjqVLgl3JKFTOUnCiUqXhC4J/1KxRinWKMUaJf7gRUm4Q6VLwh0qTyThDpU3JaFTeaJYoxRrlGKNcvEylSdU7kjCicq/lIRvKtYoxRqlWKNcPJSEb1I5UXmTyh1J6FS6JHQqbyrWKMUapVijXLxM5U1JOFG5IwknKidJ6FR+k2KNUqxRijXKxYcl4Q6VO5LQqdyhcpKEkyR0Kl0STpLQqTxRrFGKNUqxRrn441ROknCShE6lU+mS0Kl0SehUuiR8UrFGKdYoxRrl4n9O5SQJJ0k4SUKn8knFGqVYoxRrlIsPU/lNVE6ScKLSJaFT6ZLQJaFTeVOxRinWKMUa5eJlSfimJJyonCThCZUnktCpPFGsUYo1SrFGiT9YYxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGuU/cykK+iZHUNEAAAAASUVORK5CYII=',
			//patientId: "60903a9f513609de503835c6",
			patientId: this.props.patientId,
			dataStream: "",
			patientName: ""
		};
	}

	componentDidMount() {
		fetchPatientQrResponse(this.props.patientId).then((dataStream) => {
			this.setState({ dataStream: dataStream });
		});
		this.fetchPatientDetails();
	};


	fetchPatientDetails = () => {
		console.log("enter");
			fetchUnassignedPatientDetails(this.state.patientId).then((data) => {
				console.log('response data', data);
					let patientDetails = data.data[0];
					let patientFullName =  patientDetails.first_name + " " + patientDetails.last_name;
					this.setState({ patientName: patientFullName });
			}).catch(error => {
				console.log(error);
			}) 
	};

	render() {
		return (
			<div style={{ height: "100vh" }}>
				<div className="img-data-stream">
					<img src={this.state.dataStream} />
				</div>
				<div >
					<div className="img-text-data-stream">
						<label className="label-patient-details">Patient Id: {this.state.patientId} </label>
					</div>
					<div className="img-text-data-stream">
						<label className="label-patient-details">Patient Name: {this.state.patientName}</label>
					</div>
				</div>
			</div>
		);
	}
}

export default PatientQrComponent;
