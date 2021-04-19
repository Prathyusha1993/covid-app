import { serviceConstants } from "../patientPortalServices/constants";

export const getAuditData = () => {
    return fetch(`${serviceConstants.API_HOST_NAME}/audit/v1`)
    .then(response => response.json());
};