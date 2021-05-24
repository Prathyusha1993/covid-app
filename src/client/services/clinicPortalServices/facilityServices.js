import { serviceConstants } from "../common/constants";
import { getUserAuthToken,getUserRole,getUserID } from "../../utils/util";

export const fetchFacilitiesForOrders = () => {	
	var token  = getUserAuthToken();
    var userRole = getUserRole();
    if(userRole && userRole.toLowerCase().trim()==="superadmin"){
        return fetch(`${serviceConstants.API_HOST_NAME}/facility/v1`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + token
            }            
        }).then((response) => response.json());
    }
    else{
        var user_id = getUserID();
        return fetch(`${serviceConstants.API_HOST_NAME}/user/v1/facilities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + token
            },
            body: JSON.stringify({user_id: user_id}),
        }).then((response) => response.json());
    }
	
};

export const getFacilityData = () => {
    let token  = getUserAuthToken();
    return fetch(`${serviceConstants.API_HOST_NAME}/facility/v1/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + token
        }  
    }).then((response) => response.json());
};

export const getFacilityDataById = (facilityId) => {
    let token  = getUserAuthToken();
    return fetch(`${serviceConstants.API_HOST_NAME}/facility/v1/${facilityId}`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + token
        }
    }).then((response) => response.json());
};

export const createFacility = (facilityDetails) => {
    let token  = getUserAuthToken();
    let facilityInfo = {
        "address": {
            'address1': facilityDetails.address1,
            'address2': facilityDetails.address2,
            'city': facilityDetails.city,
            'state': facilityDetails.state,
            'zip': facilityDetails.zip,
            'country': facilityDetails.country
        },
        'code': facilityDetails.code,
        'name':facilityDetails.name,
        'isActive':true,
        'phone_no':facilityDetails.phoneNum,
        'contact_name':facilityDetails.contactName,
        'contact_email':facilityDetails.contactEmail,
        'fax_no':facilityDetails.faxNum,
        'email_notifications_enabled':facilityDetails.emailNotifications,
        'environmental_monitoring_enabled':facilityDetails.environmentalMonitoring,
        'fax_type': facilityDetails.faxType
    };
    return fetch(`${serviceConstants.API_HOST_NAME}/facility/v1/`,{
        method: 'POST',
        headers: {
			"Content-Type": "application/json",
            "Authorization" : "Bearer " + token
		},
        body: JSON.stringify(facilityInfo)
    })
};

export const updateFacility = (update) => {
    let token  = getUserAuthToken();
    let updateFacilityInfo = {
        "address": {
            'address1': update.address1,
            'address2': update.address2,
            'city': update.city,
            'state': update.state,
            'zip': update.zip,
            'country': update.country
        },
        '_id': update.id,
        'code': update.code,
        'name':update.name,
        'isActive':true,
        'phone_no':update.phoneNum,
        'contact_name':update.contactName,
        'contact_email':update.contactEmail,
        'fax_no':update.faxNum,
        'email_notifications_enabled':update.emailNotifications,
        'environmental_monitoring_enabled':update.environmentalMonitoring,
        'fax_type': update.faxType
    };
    return fetch(`${serviceConstants.API_HOST_NAME}/facility/v1/`, {
        method: 'PUT',
        headers: {
			"Content-Type": "application/json",
            "Authorization" : "Bearer " + token
		},
        body: JSON.stringify(updateFacilityInfo)
    })
};