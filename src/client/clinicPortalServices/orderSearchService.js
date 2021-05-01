//import { NormalModuleReplacementPlugin } from "webpack";
import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";
export const fetchOrderMasterData = (facilityId) => {
	debugger;
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: facilityId.length > 0 ? JSON.stringify({ facility_id: facilityId }) : "",
	}).then((response) => response.json());
};

export const exportOrders = () => {
	debugger;
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/export`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		}
	}).then((response) => response.json());
};

