import React, { Component } from "react";
import PatientBirthInfo from "./patientBirthInfo";
import PatientInfo from "./patientInfo";
import PatientInsuranceInfo from "./patientInsuranceInfo";
import PatientPhotoUploadInfo from "./patientPhotoUploadInfo";
import { phoneNumberFormatter } from "../../../utils/util";
import { updateUnassignedPatientDetails } from "../../../clinicPortalServices/unassignedPatientService";
import { patientSignup } from "../../../patientSignupServices/patientSignupFormService";

class SignUp extends Component {
  constructor(props) {
    super(props);
    var patientDetails =
      this.props && this.props.patientDetails ? this.props.patientDetails : "";
    // this.state = {
    //   step: 1,
    //   showMessage: false,
    //   message: "",
    //   patientId: patientDetails ? patientDetails.patientId : "",
    //   firstName: patientDetails ? patientDetails.firstName : "",
    //   lastName: patientDetails ? patientDetails.lastName : "",
    //   email: patientDetails ? patientDetails.email : "",
    //   phone: patientDetails ? patientDetails.phone : "",
    //   address: patientDetails ? patientDetails.address : "",
    //   city: patientDetails ? patientDetails.city : "",
    //   state: patientDetails ? patientDetails.state : "",
    //   zipCode: patientDetails ? patientDetails.zipCode : "",
    //   sex: patientDetails ? patientDetails.sex : "",
    //   dob: patientDetails ? patientDetails.dob : "",
    //   ethnicity: patientDetails ? patientDetails.ethnicity : "",
    //   race: patientDetails ? patientDetails.race : "",
    //   symptoms: patientDetails ? patientDetails.symptoms : [],
    //   insuranceId: patientDetails ? patientDetails.insuranceId : "",
    //   insuranceProv1: patientDetails ? patientDetails.insuranceProv1 : "",
    //   insuranceProv2: patientDetails ? patientDetails.insuranceProv2 : "",
    //   memberId: patientDetails ? patientDetails.memberId : "",
    //   groupNum: patientDetails ? patientDetails.groupNum : "",
    //   relation: patientDetails ? patientDetails.relation : "",
    //   insuredFirstName: patientDetails ? patientDetails.insuredFirstName : "",
    //   insuredLastName: patientDetails ? patientDetails.insuredLastName : "",
    //   driverLic: patientDetails ? patientDetails.driverLic : "",
    //   classStyle: patientDetails
    //     ? patientDetails.classStyle
    //     : "col-md-6 col-lg-7 col-xl-7",
    //   // driverLicFile: "EAD COPY",
    //   driverLicFile: "",
    //   insuranceFrontPageFile: "",
    //   insuranceBackPageFile: "",
    // };

    // TODO: temp code for dev purpose, remove later
    
    this.state = {
      step: 1,
      patientId: -1,
      firstName: "John",
      lastName: "Grisham",
      email: "example@something.com",
      phone: "1234567890",
      address: "12 bell st",
      city: "San Jose",
      state: "CA",
      zipCode: "95134",
      sex: "M",
      dob: "1990-01-01",
      ethnicity: "Hispanic or Latino",
      race: "White",
      symptoms: ["Fever or chills", "Cough"],
      insuranceId: -1,
      insuranceProv1: "Other",
      insuranceProv2: "Oth Ins",
      memberId: "mem123",
      groupNum: "grp456",
      relation: "Adult",
      insuredFirstName: "InsFirst",
      insuredLastName: "InsLast",
      driverLic: "DL789",
      classStyle: "col-md-12 col-lg-7 col-xl-7",
      driverLicFile:"",
        insuranceFrontPageFile:"",
        insuranceBackPageFile:"",
    };
	
    this.getPatientDetails();
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


  // handleReadFile = input => (e) =>{
  //   this.setState({ [input] : e.target.file})
  // }
  handleReadFile = input => (fileName) =>{
    console.log('signupFileName', input, fileName);
    this.setState({ [input] : fileName});
  }

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

  handleSubmit = () => {
    console.log("handlesubmit");

    var patientInfo = {
      patientId: this.state.patientId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      sex: this.state.sex,
      dob: this.state.dob,
      ethnicity: this.state.ethnicity,
      race: this.state.race,
      symptoms: this.state.symptoms,
      insuranceProv1: this.state.insuranceProv1,
      insuranceProv2: this.state.insuranceProv2,
      memberId: this.state.memberId,
      groupNum: this.state.groupNum,
      relation: this.state.relation,
      insuranceId: this.state.insuranceId,
      insuredFirstName: this.state.insuredFirstName,
      insuredLastName: this.state.insuredLastName,
      driverLic: this.state.driverLic,
      driverLicFile: this.state.driverLicFile,
      insuranceFrontPageFile: this.state.insuranceFrontPageFile,
      insuranceBackPageFile: this.state.insuranceBackPageFile,
    };
    //update existing patient info from clinic login
    if (this.props && this.state.patientId) {
      updateUnassignedPatientDetails(patientInfo).then((data) => {
        console.log("patientUpdate success");
        this.setState({ 
          showMessage: true,
          message: "Updated the changes successfully!!"
         });
      });
    }
    //new patient sign up
    else {
      patientSignup(patientInfo).then((data) => {
        console.log("patientSignup success");
        this.setState({ 
          showMessage: true,
          message: "Thank you for contacting us, You're all signed up."
         });
      });
    }
  };
  /*
  getPatientDetails = () => {
    if (this.props && this.props.patient_Id) {
      console.log(this.props.patient_Id);

      fetchUnassignedPatientDetails(this.props.patient_Id).then((data) => {
        console.log(data.data[0]);

        if (data && data.data[0]) {
          var patientDetails = data.data[0];
          var insurance = patientDetails.insurance[0];
          var index = insuranceProvider.findIndex(
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
          this.setState({
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
            insuranceId: insurance._id,
            insuranceProv1: insurance.insuranceProv1,
            insuranceProv2: insurance.insuranceProv2,
            memberId: insurance.insured_member_id,
            groupNum: insurance.insured_group_number,
            relation: insurance.relation_to_insured,
            insuredFirstName: insurance.insured_first_name,
            insuredLastName: insurance.insured_last_name,
            driverLic: insurance.insured_drivers_license,
            classStyle: "col-md-12 col-lg-7 col-xl-12",
          });
        }
      });
    }
  };
  */
  getPatientDetails = () => {
    console.log("signup-props", this.props);
    if (this.props && this.props.patientDetails) {
      var patientDetails = this.props.patientDetails;
      this.setState({
        patientId: patientDetails.patientId,
        firstName: patientDetails.firstName,
        lastName: patientDetails.lastName,
        email: patientDetails.email,
        phone: patientDetails.phone,
        address: patientDetails.address,
        city: patientDetails.city,
        state: patientDetails.state,
        zipCode: patientDetails.zipCode,
        sex: patientDetails.sex,
        dob: patientDetails.dob,
        ethnicity: patientDetails.ethnicity,
        race: patientDetails.race,
        symptoms: patientDetails.symptoms,
        insuranceId: patientDetails.insuranceId,
        insuranceProv1: patientDetails.insuranceProv1,
        insuranceProv2: patientDetails.insuranceProv2,
        memberId: patientDetails.memberId,
        groupNum: patientDetails.groupNum,
        relation: patientDetails.relation,
        insuredFirstName: patientDetails.insuredFirstName,
        insuredLastName: patientDetails.insuredLastName,
        driverLic: patientDetails.driverLic,
        classStyle: "col-md-12 col-lg-7 col-xl-12",
      });
    }
  };

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
      insuredFirstName,
      insuredLastName,
      driverLic,
      classStyle,
      showMessage,
      message,
      driverLicFile,
      insuranceFrontPageFile,
      insuranceBackPageFile,
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
      insuredFirstName,
      insuredLastName,
      driverLic,
      classStyle,
      showMessage,
      message,
      driverLicFile,
      insuranceFrontPageFile,
      insuranceBackPageFile,
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
            handleSubmit={this.handleSubmit}
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
            handleReadFile = {this.handleReadFile}
          />
        );
    }
  }
}

export default SignUp;
