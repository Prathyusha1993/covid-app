import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";
export const authenticateAndFetchUserDetails = (username, password) => {
	return fetch(`${serviceConstants.API_HOST_NAME}/user/v1/authenticate`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user_name:username,
			password:password
			//user_name: "test1",
			//password: "Test#123",
		}),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				return Promise.reject("invalid credentials");
			}
		})
		.then((response) => {
			return response.data;
		});
};

export const logout = () => {
	console.log("calling logout api");
	var token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/user/v1/logout`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		}
	}).then((response) => response.json());
};
