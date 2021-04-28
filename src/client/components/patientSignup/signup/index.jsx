import React, { Component } from 'react'
import PatientBirthInfo from './patientBirthInfo';
import PatientInfo from "./patientInfo";
import PatientInsuranceInfo from './patientInsuranceInfo';
import PatientPhotoUploadInfo from './patientPhotoUploadInfo';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            step:1,
        };
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
         });
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
         });
    };

    render () {
        const {step} = this.state;
        switch (step) {
            default:
              return <h1>User Forms not working. Enable Javascript!</h1>;
            case 1:
              return (
                <PatientInfo 
                  nextStep={this.nextStep}
                />
              );
            case 2:
              return (
                <PatientBirthInfo 
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              );
            case 3:
              return (
                <PatientInsuranceInfo 
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                />
              );
            case 4:
              return <PatientPhotoUploadInfo 
              prevStep={this.prevStep}/>;
          }
    }
}

export default SignUp;