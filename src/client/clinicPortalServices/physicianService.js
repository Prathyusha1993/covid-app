import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";

export const fetchPhysicians = (facilityId) => {	
	let token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: JSON.stringify({facility_id: facilityId}),
	}).then((response) => response.json());
};

export const getPhysicianData = () => {
	let token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		}
	}).then((response) => response.json());
}