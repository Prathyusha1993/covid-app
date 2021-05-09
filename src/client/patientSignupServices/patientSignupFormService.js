
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

//TODO: uncomment this later
// export const fetchPatientQrResponse = (patientId) => {
//     return fetch(`https://www.mycovidnow.com/api/notifications/qrcode/:patientId`, {
//         method: 'POST',
//     })
//     .then((response) => response.json());
// };

// TODO: this is for testing, comment this later
export const fetchPatientQrResponse = () => {
    const sampleDataStream = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK4SURBVO3BQW7sWAwEwSxC979yjpdcPUCQur/NYUT8wRqjWKMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoFw8l4ZtUuiR0KidJOFHpkvBNKk8Ua5RijVKsUS5epvKmJJyodEnoVDqVJ1TelIQ3FWuUYo1SrFEuPiwJd6g8odIloVPpktCp3JGEO1Q+qVijFGuUYo1y8ccloVO5Q2WSYo1SrFGKNcrFMEm4Iwmdyl9WrFGKNUqxRrn4MJVvUumS0CWhU3lC5Tcp1ijFGqVYo1y8LAm/mUqXhE7lJAm/WbFGKdYoxRol/uAPS8KbVP6yYo1SrFGKNcrFQ0noVO5IQqfSJeEJlS4JnUqXhDepnCShU3miWKMUa5RijRJ/8EAS3qRyRxI6lZMknKicJKFT6ZJwovJJxRqlWKMUa5SLh1S6JHQqJ0nokvBNKidJOElCp3JHEjqVJ4o1SrFGKdYoFw8loVPpktCpdCpdEjqVLgl3JKFTOUnCiUqXhC4J/1KxRinWKMUaJf7gRUm4Q6VLwh0qTyThDpU3JaFTeaJYoxRrlGKNcvEylSdU7kjCicq/lIRvKtYoxRqlWKNcPJSEb1I5UXmTyh1J6FS6JHQqbyrWKMUapVijXLxM5U1JOFG5IwknKidJ6FR+k2KNUqxRijXKxYcl4Q6VO5LQqdyhcpKEkyR0Kl0STpLQqTxRrFGKNUqxRrn441ROknCShE6lU+mS0Kl0SehUuiR8UrFGKdYoxRrl4n9O5SQJJ0k4SUKn8knFGqVYoxRrlIsPU/lNVE6ScKLSJaFT6ZLQJaFTeVOxRinWKMUa5eJlSfimJJyonCThCZUnktCpPFGsUYo1SrFGiT9YYxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGuU/cykK+iZHUNEAAAAASUVORK5CYII=';
    return Promise.resolve(sampleDataStream);
};