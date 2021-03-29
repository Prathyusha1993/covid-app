import { serviceConstants } from "../patientPortalServices/constants";

export const authenticateAndFetchUserDetails = (username, password) => {
	debugger;
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
