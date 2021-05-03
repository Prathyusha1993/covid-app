import React, { Component } from "react";
import PatientBirthInfo from "./patientBirthInfo";
import PatientInfo from "./patientInfo";
import PatientInsuranceInfo from "./patientInsuranceInfo";
import PatientPhotoUploadInfo from "./patientPhotoUploadInfo";
import { phoneNumberFormatter } from "../../../utils/util";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
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
			symptoms: [],
			insuranceProv1: "",
			insuranceProv2: "",
			memberId: "",
			groupNum: "",
			relation: "",
			firstName: "",
			lastName: "",
			driverLic: "",
		};

		// TODO: temp code for dev purpose, remove later

		// this.state = {
		//     step: 1,
		//     firstName: "John",
		//     lastName: "Grisham",
		//     email: "example@something.com",
		//     phone: "1234567890",
		//     address: "12 bell st",
		//     city: "San Jose",
		//     state: "CA",
		//     zipCode: "95134",
		//     sex: "M",
		//     dob: "1990-01-01",
		//     ethnicity: "Hispanic or Latino",
		//     race: "White",
		//     symptoms: [
		//         'Fever or chills',
		//         'Cough'
		//     ],
		//     insuranceProv1: "",
		//     insuranceProv2: "",
		//     memberId: "",
		//     groupNum: "",
		//     relation: "",
		//     // firstName: "",
		//     // lastName: "",
		//     driverLic: "",
		// };
	}

	handleChange = (input) => (e) => {
		const value = e.target.value;
		switch (input) {
			case "phone":
				this.setState((prevState) => ({
					phone: phoneNumberFormatter(value, prevState.phone),
				}));
				break;

			case "symptoms":
				const symptoms = this.state.symptoms;
				// if the check box is checked then add the item to the symptoms array
				if (
					symptoms.findIndex((element) => element === value) === -1 &&
					e.target.checked
				) {
					symptoms.push(value);
				} else if (
					symptoms.findIndex((element) => element === value) !== -1 &&
					!e.target.checked
				) {
					// if the check box is unchecked then delete the item from the symptoms array
					symptoms.splice(
						symptoms.findIndex((element) => element === value),
						1
					);
				}
				this.setState({ [input]: symptoms });
				break;

			default:
				this.setState({ [input]: e.target.value });
				break;
		}
	};

	handleRaceChange = () => {};

	handleSymptomsChange = () => {};

	nextStep = (e) => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
		console.log("state", this.state);
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	handleSubmit = () => {};

	render() {
		const { step } = this.state;
		const {
			firstName,
			lastName,
			email,
			phone,
			address,
			city,
			state,
			zipCode,
			sex,
			dob,
			ethnicity,
			race,
			symptoms,
			insuranceProv1,
			insuranceProv2,
			memberId,
			groupNum,
			relation,
			insuranceFirstName,
			insuranceLastName,
			driverLic,
		} = this.state;
		const values = {
			firstName,
			lastName,
			email,
			phone,
			address,
			city,
			state,
			zipCode,
			sex,
			dob,
			ethnicity,
			race,
			symptoms,
			insuranceProv1,
			insuranceProv2,
			memberId,
			groupNum,
			relation,
			insuranceFirstName,
			insuranceLastName,
			driverLic,
		};
		switch (step) {
			default:
				return <h1>User Forms not working.</h1>;
			case 1:
				return (
					<PatientInfo
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<PatientBirthInfo
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return (
					<PatientInsuranceInfo
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 4:
				return (
					<PatientPhotoUploadInfo
						prevStep={this.prevStep}
						handleSubmit={this.handleSubmit}
						values={values}
					/>
				);
		}
	}
}

export default SignUp;
