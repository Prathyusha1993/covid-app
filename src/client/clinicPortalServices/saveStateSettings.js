

export const saveSettings = () => {
	return fetch(``, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: ""
	}).then((response) => response.json());
};