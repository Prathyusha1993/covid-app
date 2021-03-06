import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";

export const fetchOrderMasterData = (facilityId) => {
	var token = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body:
			facilityId.length > 0 ? JSON.stringify({ facility_id: facilityId }) : "",
	}).then((response) => response.json());
};

export const exportOrders = () => {
	var token = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/export`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	}).then((response) => response.json());
};

export const searchOrders = (filters) => {
	var token = getUserAuthToken();
	var filterParams = {
		facility_id: filters.facility_id,
		from_date: filters.from_date,
		to_date: filters.to_date,
		result_value: filters.result_value,
	};
	console.log("filters", JSON.stringify(filterParams));
	return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/filter`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(filterParams),
	}).then((response) => response.json());
};
