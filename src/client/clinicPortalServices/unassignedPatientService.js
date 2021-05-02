import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";
export const fetchUnassignedPatientData = (facilityId) => {
	//debugger;
	var token  = getUserAuthToken();
	console.log("facility_id", facilityId);
	debugger;
	return fetch(`${serviceConstants.API_HOST_NAME}/patient/v1/unassigned`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		// body: JSON.stringify({ facility_id: '605cc973177b981d99673724' } )
		//console.log("facility_id", facilityId);
		body: JSON.stringify({ facility_id: facilityId }),
	}).then((response) => response.json());
};
