import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";

export const getAuditData = () => {
	var token = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/audit/v1`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	}).then((response) => response.json());
};
