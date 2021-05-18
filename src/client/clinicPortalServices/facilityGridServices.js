import { serviceConstants } from "../patientPortalServices/constants";
import { getUserAuthToken } from "../utils/util";

export const getFacilityData = () => {
    const token  = getUserAuthToken();
    return fetch(`${serviceConstants.API_HOST_NAME}/facility/v1/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + token
        }  
    }).then((response) => response.json());
};