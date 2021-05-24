import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../../utils/util";

export const getOrderUserSettings = (userId, gridName) => {
	var token = getUserAuthToken();
	return fetch(
		`${serviceConstants.API_HOST_NAME}/usersettings/v1/gridstate/find`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				user_id: userId,
				grid_name: gridName,
				// "user_id": "6062151112591a26d4bb6685",
				// "grid_name":"Order"
			}),
		}
	).then((response) => response.json());
};

export const getPatientUserSettings = (userId, gridName) => {
	var token = getUserAuthToken();
	return fetch(
		`${serviceConstants.API_HOST_NAME}/usersettings/v1/gridstate/find`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify({
				user_id: userId,
				grid_name: gridName,
				//"user_id": "6062151112591a26d4bb6685",
				//"grid_name":"Patient"
			}),
		}
	).then((response) => response.json());
};
