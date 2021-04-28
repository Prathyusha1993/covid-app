import React, { Component } from 'react'
import PatientBirthInfo from './patientBirthInfo';
import PatientInfo from "./patientInfo";

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    render () {
        return(
            <div>
                <PatientInfo />
                <PatientBirthInfo />
            </div>
        );
    }
}

export default SignUp;