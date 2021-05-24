import { serviceConstants } from "../common/constants";
import { getPatientAuthToken } from "../common/util";

export const authenticateAndFetchUserDetails = (loginInfo) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/authenticate`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginInfo),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject("invalid credentials");
			}
		})
		.then((data) => {
			return data;
		});
};

export const logout = () => {
	//debugger;
	//console.log('patient logout');
	var token = getPatientAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/logout`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	}).then((response) => response.json());
};
