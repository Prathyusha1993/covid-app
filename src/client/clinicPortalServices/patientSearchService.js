import { serviceConstants } from "../patientPortalServices/constants";

export const fetchPatientMasterData = (facilityId) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v2/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// body: JSON.stringify({ facility_id: '605cc973177b981d99673724' } )
		body: JSON.stringify({ facility_id: facilityId }),
	}).then((response) => response.json());
};

export const fetchPatientExpandableData = (patiendId) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ patient_id: patiendId }),
	}).then((response) => response.json());
};
