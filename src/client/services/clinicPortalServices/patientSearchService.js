import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";

export const fetchPatientMasterData = (facilityId) => {
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: JSON.stringify({ facility_id: facilityId }),
	}).then((response) => response.json());
};

export const fetchPatientExpandableData = (patientId) => {
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
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/export`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		}
	}).then((response) => response.json());
};