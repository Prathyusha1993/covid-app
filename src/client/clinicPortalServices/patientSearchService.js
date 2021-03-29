import { serviceConstants } from "../patientPortalServices/constants";

export const fetchPatientMasterData = (facilityId) => {
	debugger;
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v2/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// body: JSON.stringify({ facility_id: '605cc973177b981d99673724' } )
		body: JSON.stringify({ facility_id: facilityId }),
	}).then((response) => response.json());
};

export const fetchPatientExpandableData = (patientId) => {
	debugger;
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ patient_id: patientId }),
	}).then((response) => response.json());
};
