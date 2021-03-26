import { serviceConstants } from "../patientPortalServices/constants";

// export const fetchOrderMasterData = () => {
// 	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/`).then((response) =>
// 		response.json()
// 	);
// };

export const fetchOrderMasterData = (patiendId) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v2/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ patient_id: patiendId }),
	}).then((response) => response.json());
};