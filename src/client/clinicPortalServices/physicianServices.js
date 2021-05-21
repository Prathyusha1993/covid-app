import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";

export const fetchPhysicians = (facilityId) => {	
	let token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1/search`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
		body: JSON.stringify({facility_id: facilityId}),
	}).then((response) => response.json());
};

export const getPhysicianData = () => {
	let token  = getUserAuthToken();
	return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		}
	}).then((response) => response.json());
};

export const getPhysicianDataById = (physicianId) => {
    let token  = getUserAuthToken();
    return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1/${physicianId}`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + token
        }
    }).then((response) => response.json());
};

export const createPhysician = (physicianDetails) => {
	let token  = getUserAuthToken();
    let physicianInfo = {
        "address": {
            'address1': '',
            'address2': '',
            'city': '',
            'state': '',
            'zip': '',
            'country': physicianDetails.country
        },
		'last_name': physicianDetails.lastName,
		'first_name': physicianDetails.firstName,
		'npi': physicianDetails.npi,
		'mobile': '',
		'code': '',
		'facility_id':physicianDetails.facilityId

    };
    return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1/`,{
        method: 'POST',
        headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
        body: JSON.stringify(physicianInfo)
    })
};

export const updatePhysician = (update) => {
	let token  = getUserAuthToken();
    let updatePhysicianInfo = {
        "address": {
            'address1': '',
            'address2': '',
            'city': '',
            'state': '',
            'zip': '',
            'country': update.country
        },
		'_id':update.id,
		'last_name': update.lastName,
		'first_name': update.firstName,
		'npi': update.npi,
		'mobile': '',
		'code': '',
		'facility_id':update.facilityId
    };
    return fetch(`${serviceConstants.API_HOST_NAME}/physician/v1/`, {
        method: 'PUT',
        headers: {
			"Content-Type": "application/json",
			"Authorization" : "Bearer " + token
		},
        body: JSON.stringify(updatePhysicianInfo)
    })
};
