import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";
export const fetchPhysicians = (facilityId) => {	
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: JSON.stringify({facility: facilityId}),
	}).then((response) => response.json());
};

export const generateUniqueKey = () => {
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/uniquekey`)
	.then((response) => response.json());
}