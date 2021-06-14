import {serviceConstants} from '../common/constants';
import { getPatientAuthToken } from "../common/util";

export const fetchDashboardDetails = (patientInfo) => {
   const token  = getPatientAuthToken();
    return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/patient/results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + token
        },
        body : JSON.stringify(patientInfo)
      })
        .then(response => response.json());
  }

  export const resultsViewed = (orderInfo) => {
    const token  = getPatientAuthToken();
     return fetch(`${serviceConstants.API_HOST_NAME}/order/v1/patient/resultsviewed`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization' : 'Bearer ' + token
         },
         body : JSON.stringify({orderInfo})
       })
         .then(response => response.json());
   }