import { serviceConstants } from "../common/constants";
import { getUserAuthToken } from "../common/util";

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
            'address1': physicianDetails.address1,
            'address2': physicianDetails.address2,
            'city': physicianDetails.city,
            'state': physicianDetails.state,
            'zip': physicianDetails.zip,
            'country': physicianDetails.country
        },
		'last_name': physicianDetails.lastName,
		'first_name': physicianDetails.firstName,
		'npi': physicianDetails.npi,
		'mobile': physicianDetails.mobile,
		'code': physicianDetails.code,
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

export const updatePhysician = (physicianDetails) => {
	let token  = getUserAuthToken();
    let updatePhysicianInfo = {
        "address": {
            'address1': physicianDetails.address1,
            'address2': physicianDetails.address2,
            'city': physicianDetails.city,
            'state': physicianDetails.state,
            'zip': physicianDetails.zip,
            'country': physicianDetails.country
        },
		'_id':physicianDetails.id,
		'last_name': physicianDetails.lastName,
		'first_name': physicianDetails.firstName,
		'npi': physicianDetails.npi,
		'mobile': physicianDetails.mobile,
		'code': physicianDetails.code,
		'facility_id':physicianDetails.facilityId
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
