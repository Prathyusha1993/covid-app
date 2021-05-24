import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";
export const fetchPatientMasterData = (facilityId) => {
	//debugger;
	var token  = getUserAuthToken();
	//console.log("facility_id", facilityId);
	//debugger;
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		// body: JSON.stringify({ facility_id: '605cc973177b981d99673724' } )
		//console.log("facility_id", facilityId);
		body: JSON.stringify({ facility_id: facilityId }),
	}).then((response) => response.json());
};

export const fetchPatientExpandableData = (patientId) => {
	//debugger;
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: JSON.stringify({ patient_id: patientId }),
	}).then((response) => response.json());
};

export const exportPatients = () => {
	//debugger;
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/export`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		}
	}).then((response) => response.json());
};