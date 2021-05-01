import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";
export const saveOrderSettings = (userId, gridName, columnState, pageSize) => {
	console.log('columnState-saved',columnState);
	var saveObject = {
		//user_id: "6062151112591a26d4bb6685",
		user_id: userId,
		grid_state: [
			{
				// grid_name: "Order",
				// page_size: "10",
				// columns: columnState,
				grid_name: gridName,
				page_size: pageSize,
				columns: columnState,
			},
		],
	};
	console.log(saveObject);
	var token  = getUserAuthToken();
	return fetch(
		`${serviceConstants.API_HOST_NAME}/usersettings/v1/gridstate/save`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization" : "Bearer " + token
			},
			body: JSON.stringify(saveObject),
		}
	).then((response) => response.json());
};



export const savePatientSettings = (userId, gridName, columnState, pageSize) => {
	console.log('columnState-saved',columnState);
	var saveObject = {
		//user_id: "6062151112591a26d4bb6685",
		user_id: userId,
		grid_state: [
			{
				// grid_name: "Patient",
				// page_size: "10",
				// columns: columnState,
				grid_name: gridName,
				page_size: pageSize,
				columns: columnState,
			},
		],
	};
	console.log(saveObject);
	var token  = getUserAuthToken();
	return fetch(
		`${serviceConstants.API_HOST_NAME}/usersettings/v1/gridstate/save`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization" : "Bearer " + token
			},
			body: JSON.stringify(saveObject),
		}
	).then((response) => response.json());
};