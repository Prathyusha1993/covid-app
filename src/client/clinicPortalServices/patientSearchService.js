import { serviceConstants } from "../patientPortalServices/constants";

export const fetchPatientMasterData = () => {
	return fetch(
		` ${serviceConstants.API_HOST_NAME}/patient/v1/`
	).then((response) => response.json());
};

export const fetchPatientExpandableData = (patiendId) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ patient_id: patiendId }),
	}).then((response) => response.json());
};
