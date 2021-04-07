import { serviceConstants } from "../patientPortalServices/constants";

export const saveSettings = (saveParams) => {
	var saveObject = {
		"user_id": "6062151112591a26d4bb6685",
		"grid_state":[{
			"grid_name":"Order",
			"page_size":"10",
		"columns":
		[
			{
				"colId": "patientName",
				"width": 212,
				"hide": true,
				"pinned": null,
				"sort": null,
				"sortIndex": null,		
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "description",
				"width": 150,
				"hide": true,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "testType",
				"width": 150,
				"hide": true,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "sample",
				"width": 212,
				"hide": false,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "1",
				"width": 212,
				"hide": false,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "collectedDate",
				"width": 212,
				"hide": false,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "provider",
				"width": 212,
				"hide": false,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "receivedDate",
				"width": 212,
				"hide": false,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "requisition",
				"width": 212,
				"hide": false,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			},
			{
				"colId": "0",
				"width": 80,
				"hide": true,
				"pinned": null,
				"sort": null,
				"sortIndex": null,
				"aggFunc": null,
				"rowGroup": false,
				"rowGroupIndex": null,
				"pivot": false,
				"pivotIndex": null,
				"flex": 1
			}
		]}]
		}
		console.log(saveObject);
	return fetch(`${serviceConstants.API_HOST_NAME}/usersettings/v1/gridstate/save`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(saveObject),
	}).then((response) => response.json());
};