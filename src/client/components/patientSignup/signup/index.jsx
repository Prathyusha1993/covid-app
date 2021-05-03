import React, { Component } from "react";
import PatientBirthInfo from "./patientBirthInfo";
import PatientInfo from "./patientInfo";
import PatientInsuranceInfo from "./patientInsuranceInfo";
import PatientPhotoUploadInfo from "./patientPhotoUploadInfo";
import {phoneNumberFormatter} from "../../../utils/util";

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
			sex:"",
			dob:"",
			ethnicity:"",
			race:"",
			symptoms:"",
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

    handleChange = input => (e) => {
        // var key = e.target.name;
        // var value = e.target.value;
        // var obj = {};
        // if (key === "phone") {
        // 	this.setState((prevState) => ({
        // 		phone: phoneNumberFormatter(value, prevState.phone),
        // 	}));
        // } else {
        // 	obj[key] = value;
        if (e.target.type === "checkbox") {
            this.setState({ [input]: e.target.checked });
        } else if(input === 'phone') {
            this.setState((prevState) => ({
				phone: phoneNumberFormatter(e.target.value, prevState.phone),
			}));
        } else {
            this.setState({ [input]: e.target.value });
        }
    };

	nextStep = (e) => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	handleSubmit = () => {

	}

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
            driverLic
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
            driverLic
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
					values={values}/>
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
				return <PatientPhotoUploadInfo 
				prevStep={this.prevStep} 
				handleSubmit={this.handleSubmit}
				/>;
		}
	}
}

export default SignUp;
