import {serviceConstants} from '../../patientPortalServices/constants';
import { getPatientAuthToken } from "../../utils/util";

export const fetchDashboardDetails = (patientInfo) => {
   //console.log('patientInfo from index' , patientInfo);
   var token  = getPatientAuthToken();
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
    //console.log("resultsViewed");
    //console.log(orderInfo);
    var token  = getPatientAuthToken();
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