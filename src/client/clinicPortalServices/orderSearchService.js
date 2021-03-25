import {serviceConstants} from '../patientPortalServices/constants';

export const fetchOrderMasterData = () => {
    return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/`)
    .then((response) => response.json());
}


