import React, { Component } from "react";
import PatientBirthInfo from "./patientBirthInfo";
import PatientInfo from "./patientInfo";
import PatientInsuranceInfo from "./patientInsuranceInfo";
import PatientPhotoUploadInfo from "./patientPhotoUploadInfo";
import { phoneNumberFormatter } from "../../../services/common/util";
import { updateUnassignedPatientDetails } from "../../../services/clinicPortalServices/unassignedPatientService";
import { patientSignup } from "../../../services/patientSignupServices/patientSignupFormService";
import { patientUploadImages } from "../../../services/patientSignupServices/patientSignupFormService";
import moment from "moment";
import { Redirect } from "react-router";

class SignUp extends Component {
  constructor(props) {
    super(props);
    var patientDetails =
      this.props && this.props.patientDetails ? this.props.patientDetails : "";
    this.state = {
      step: 1,
      showMessage: false,
      message: "",
      patientId: patientDetails ? patientDetails.patientId : "",
      firstName: patientDetails ? patientDetails.firstName : "",
      lastName: patientDetails ? patientDetails.lastName : "",
      email: patientDetails ? patientDetails.email : "",
      phone: patientDetails ? patientDetails.phone : "",
      address: patientDetails ? patientDetails.address : "",
      city: patientDetails ? patientDetails.city : "",
      state: patientDetails ? patientDetails.state : "",
      zipCode: patientDetails ? patientDetails.zipCode : "",
      sex: patientDetails ? patientDetails.sex : "",
      dob: patientDetails ? patientDetails.dob : "",
      ethnicity: patientDetails ? patientDetails.ethnicity : "",
      race: patientDetails ? patientDetails.race : "",
      symptoms: patientDetails ? patientDetails.symptoms : [],
      insuranceId: patientDetails ? patientDetails.insuranceId : "",
      insuranceProv1: patientDetails ? patientDetails.insuranceProv1 : "",
      insuranceProv2: patientDetails ? patientDetails.insuranceProv2 : "",
      memberId: patientDetails ? patientDetails.memberId : "",
      groupNum: patientDetails ? patientDetails.groupNum : "",
      relation: patientDetails ? patientDetails.relation : "",
      insuredFirstName: patientDetails ? patientDetails.insuredFirstName : "",
      insuredLastName: patientDetails ? patientDetails.insuredLastName : "",
      driverLic: patientDetails ? patientDetails.driverLic : "",
      classStyle: patientDetails
        ? patientDetails.classStyle
        : "col-md-6 col-lg-7 col-xl-7",
      driverLicFile: "",
      insuranceFrontPageFile: "",
      insuranceBackPageFile: "",
      driverLicFileName: patientDetails ? patientDetails.driverLicFile : "",
      insuranceFrontPageFileName: patientDetails
        ? patientDetails.insuranceFrontPageFile
        : "",
      insuranceBackPageFileName: patientDetails
        ? patientDetails.insuranceBackPageFile
        : "",
      driverLicFile: "",
      insuranceFrontPageFile: "",
      insuranceBackPageFile: "",
      driverLicFileName: patientDetails ? patientDetails.driverLicFile : "",
      insuranceFrontPageFileName: patientDetails
        ? patientDetails.insuranceFrontPageFile
        : "",
      insuranceBackPageFileName: patientDetails
        ? patientDetails.insuranceBackPageFile
        : "",
    };

    // TODO: temp code for dev purpose, remove later

    // this.state = {
    //   step: 1,
    //   patientId: -1,
    //   firstName: "John",
    //   lastName: "Grisham1310",
    //   email: "example@something.com",
    //   phone: "1234567890",
    //   address: "12 bell st",
    //   city: "San Jose",
    //   state: "CA",
    //   zipCode: "95134",
    //   sex: "M",
    //   dob: "1990-01-01",
    //   ethnicity: "Hispanic or Latino",
    //   race: "White",
    //   symptoms: ["Fever or chills", "Cough"],
    //   insuranceId: -1,
    //   insuranceProv1: "Other",
    //   insuranceProv2: "Oth Ins",
    //   memberId: "mem123",
    //   groupNum: "grp456",
    //   relation: "Adult",
    //   insuredFirstName: "InsFirst",
    //   insuredLastName: "InsLast",
    //   driverLic: "DL789",
    //   classStyle: "col-md-12 col-lg-7 col-xl-7",
    //   driverLicFile:"",
    //     insuranceFrontPageFile:"",
    //     insuranceBackPageFile:"",
    //     driverLicFileName: "",
    // 	 insuranceFrontPageFileName: "",
    // 	 insuranceBackPageFileName:  "",
    // };

    // this.getPatientDetails();
  }

  componentWillReceiveProps(nextProps) {
    this.getPatientDetails(nextProps);
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

  handleReadFile = (input) => (file) => {
    //console.log("signupFileName", input, file);
    this.setState({ [input]: file });
    switch (input) {
      case "driverLicFile":
        this.setState({
          driverLicFileName:
            this.state.driverLicFile.name.substring(
              0,
              this.state.driverLicFile.name.lastIndexOf(".")
            ) +
            "_" +
            moment(new Date(), "MM/DD/YYYY hh:mm:ss").format("YYYYMMDDHHMMss") +
            this.state.driverLicFile.name.substring(
              this.state.driverLicFile.name.lastIndexOf(".")
            ),
        });
        break;

      case "insuranceFrontPageFile":
        this.setState({
          insuranceFrontPageFileName:
            this.state.insuranceFrontPageFile.name.substring(
              0,
              this.state.insuranceFrontPageFile.name.lastIndexOf(".")
            ) +
            "_" +
            moment(new Date(), "MM/DD/YYYY hh:mm:ss").format("YYYYMMDDHHMMss") +
            this.state.insuranceFrontPageFile.name.substring(
              this.state.insuranceFrontPageFile.name.lastIndexOf(".")
            ),
        });
        break;

      case "insuranceBackPageFile":
        this.setState({
          insuranceBackPageFileName:
            this.state.insuranceBackPageFile.name.substring(
              0,
              this.state.insuranceBackPageFile.name.lastIndexOf(".")
            ) +
            "_" +
            moment(new Date(), "MM/DD/YYYY hh:mm:ss").format("YYYYMMDDHHMMss") +
            this.state.insuranceBackPageFile.name.substring(
              this.state.insuranceBackPageFile.name.lastIndexOf(".")
            ),
        });
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
    //console.log("state", this.state);
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleFileUpload = () => {
    const formData = new FormData();
    if (this.state.driverLicFile && this.state.driverLicFileName) {
      formData.append(
        "images",
        this.state.driverLicFile,
        this.state.driverLicFileName
      );
    }
    //console.log("check", this.state.driverLicFile);
    if (
      this.state.insuranceFrontPageFile &&
      this.state.insuranceFrontPageFileName
    ) {
      formData.append(
        "images",
        this.state.insuranceFrontPageFile,
        this.state.insuranceFrontPageFileName
      );
    }
    if (
      this.state.insuranceBackPageFile &&
      this.state.insuranceBackPageFileName
    ) {
      formData.append(
        "images",
        this.state.insuranceBackPageFile,
        this.state.insuranceBackPageFileName
      );
    }
    patientUploadImages(formData).then((success) => {
      //console.log("success");
    });
  };

  handleSubmit = () => {
    //console.log("handlesubmit");

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
      driverLicFileName: this.state.driverLicFileName,
      insuranceFrontPageFileName: this.state.insuranceFrontPageFileName,
      insuranceBackPageFileName: this.state.insuranceBackPageFileName,
    };
    //update existing patient info from clinic login
    if (this.props && this.state.patientId) {
      updateUnassignedPatientDetails(patientInfo).then((data) => {
        this.setState({
          showMessage: true,
          message: "Updated the changes successfully!!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
    //new patient sign up
    else {
      patientSignup(patientInfo).then((data) => {
        this.handleFileUpload();
        window.location.href = "/patientsignup/confirmation";
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  getPatientDetails = (props) => {
    if (props && props.patientDetails) {
      var patientDetails = props.patientDetails;
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
        driverLicFile: patientDetails.driverLicFile,
        insuranceFrontPageFile: patientDetails.insuranceFrontPageFile,
        insuranceBackPageFile: patientDetails.insuranceBackPageFile,
        driverLicFileName: patientDetails.driverLicFileName,
        insuranceFrontPageFileName: patientDetails.insuranceFrontPageFileName,
        insuranceBackPageFileName: patientDetails.insuranceBackPageFileName,
      });
    }
  };

  render() {
    const { step } = this.state;

    const {
      patientId,
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
      driverLicFileName,
      insuranceFrontPageFileName,
      insuranceBackPageFileName,
    } = this.state;
    const values = {
      patientId,
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
      driverLicFileName,
      insuranceFrontPageFileName,
      insuranceBackPageFileName,
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
            handleReadFile={this.handleReadFile}
          />
        );
    }
  }
}

export default SignUp;
