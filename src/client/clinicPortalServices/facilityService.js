import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken,getUserRole,getUserID } from "../utils/util";
export const fetchFacilities = () => {	
	var token  = getUserAuthToken();
    var userRole = getUserRole();
    if(userRole && userRole.toLowerCase().trim()=="superadmin"){
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

