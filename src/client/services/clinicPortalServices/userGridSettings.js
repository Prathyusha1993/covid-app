import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";

export const getOrderUserSettings = (userId, gridName) => {
	const token = getUserAuthToken();
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
	const token = getUserAuthToken();
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
			}),
		}
	).then((response) => response.json());
};
