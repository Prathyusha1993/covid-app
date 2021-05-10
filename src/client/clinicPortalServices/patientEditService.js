import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";
export const updatePatientData = (editParams) => {
	//console.log(editParams);
	var token  = getUserAuthToken();
	var updatedPatient = {
		_id: editParams._id,
		first_name:
			editParams && editParams.firstName ? editParams.firstName : "",
		last_name: editParams && editParams.lastName ? editParams.lastName : "",
		email: editParams && editParams.email ? editParams.email : "",
		gender: editParams && editParams.gender ? editParams.gender : "",
		mobile: editParams && editParams.mobile ? editParams.mobile : "",
		date_of_birth: editParams && editParams.dob ? editParams.dob : "",
		mrn: editParams && editParams.mrn ? editParams.mrn : "",
		address:{
			address1: editParams && editParams.address1 ? editParams.address1 : "",
			address2: editParams && editParams.address2 ? editParams.address2 : "",
			city: editParams && editParams.city ? editParams.city : "",
			state: editParams && editParams.state ? editParams.state : "",
			zip: editParams && editParams.zip ? editParams.zip : "",
			country: editParams && editParams.country ? editParams.country : ""
		}
	}
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/`, {
		
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: JSON.stringify(updatedPatient),
	}).then((response) => response.json());
};
