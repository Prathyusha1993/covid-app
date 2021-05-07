
import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";

export const patientSignup = (patientDetails) => {
    console.log("patientSignup",patientDetails);
    var patientInfo = {
        "first_name":patientDetails.firstName,
        "last_name":patientDetails.lastName,
        "email":patientDetails.email,
        "mobile":patientDetails.phone,
        "date_of_birth": patientDetails.dob,
        "gender":patientDetails.sex,
        "mrn":"",
        "ethnicity":patientDetails.ethnicity,
        "race":patientDetails.race,
        "is_assigned":false,
        "is_active":false,
        "address":{
            "address1":patientDetails.address,
            "address2":"",
            "city":patientDetails.city,
            "state":patientDetails.state,
            "zip":patientDetails.zipCode
            
        },
        "health_info":{
            "record_date":"05012021",
            "symptoms":patientDetails.symptoms
        },
        "insurance":{
            "insured_first_name": patientDetails.insuredFirstName,
            "insured_last_name": patientDetails.insuredLastName,
            "insured_member_id": patientDetails.memberId,
            "insured_group_number": patientDetails.groupNum,
            "insured_drivers_license":patientDetails.driverLic,
            "insurance_provider": patientDetails.insuranceProv1.toLowerCase() == "other" ? patientDetails.insuranceProv2:patientDetails.insuranceProv1,
            "relation_to_insured":patientDetails.relation,
            "is_active": true,
            "images":{
                "drivers_license": patientDetails.driverLicFileName,
                "insurance_front": patientDetails.insuranceFrontPageFileName,
                "insurance_back": patientDetails.insuranceBackPageFileName,
            }
        },
    };
    console.log("patientSignup-patientInfo",JSON.stringify(patientInfo));
    return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/insurance`, {
        method: 'POST',
        headers: {
			"Content-Type": "application/json"
		},
        body: JSON.stringify(patientInfo)
        
    })
};


export const patientUploadImages = (formData) => {
    return fetch(`${serviceConstants.API_HOST_NAME}/patientinsurance/v1/uploadimages/`, {
        method: 'POST',
        body: formData, 
    })
};