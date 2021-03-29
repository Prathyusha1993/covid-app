import { serviceConstants } from "../patientPortalServices/constants";

export const fetchOrderMasterData = (facilityId) => {
	debugger;
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: facilityId.length > 0 ? JSON.stringify({ facility_id: facilityId }) : "",
	}).then((response) => response.json());
};
