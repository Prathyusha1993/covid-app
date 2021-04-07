import { serviceConstants } from "../patientPortalServices/constants";

export const getUserSettings = (userId, gridName) => {
	
	return fetch(`${serviceConstants.API_HOST_NAME}/usersettings/v1/gridstate/find`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
            // user_id: userId,
            // grid_name: gridName,
            "user_id": "6062151112591a26d4bb6685",
            "grid_name":"Order"
        }),
	}).then((response) => response.json());
};